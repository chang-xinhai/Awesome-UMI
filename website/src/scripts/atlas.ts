import type { Work } from "../lib/catalog";
import { compareDates } from "../lib/order";
const $ = <T extends HTMLElement = HTMLElement>(id: string) =>
  document.getElementById(id)! as T;
const settings = JSON.parse($("catalog-settings").textContent!) as {
  initial: string[];
  base: string;
  endpoint: string;
  github: string;
};
const e = (v: unknown) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
const path = (p: string) =>
  settings.base.replace(/\/$/, "") + "/" + p.replace(/^\//, "");
type MediaMode = "hardware" | "datasets";
const mode = (): MediaMode => collection === "datasets" ? "datasets" : "hardware";
function media(w: Work, context: MediaMode = mode()) {
  if (context === "datasets") return w.datasetImage ? {
    url: path(w.datasetImage), alt: w.datasetImageAlt ?? w.name,
    kind: w.datasetImageType ?? "Dataset overview",
    source: w.datasetImagePage ?? w.datasetImageSource ?? w.paperUrl,
  } : undefined;
  const image = w.hardwareImage ?? w.coverImage ?? w.image;
  return image ? { url: path(image), alt: w.hardwareImageAlt ?? w.coverAlt ?? w.imageAlt ?? w.name,
    kind: w.hardwareImageType ?? w.coverType ?? "Hardware illustration",
    source: w.hardwareImagePage ?? w.coverSource ?? w.imagePage ?? w.paperUrl,
  } : undefined;
}
const mediaKey = (w: Work, context: MediaMode = mode()) => `${context}:${w.id}`;
const previews = new Map<string, ReturnType<typeof media> | null>();
const preview = (w: Work, context: MediaMode = mode()) => previews.has(mediaKey(w, context)) ? previews.get(mediaKey(w, context)) : media(w, context);
const imageFallback = (w: Work) =>
  `<div class="card-cover image-fallback"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="m4 17 5-5 4 4 3-3 4 4M8 8h.01"/></svg><span>Preview unavailable</span><button type="button" data-retry-image="${e(w.id)}">Retry image</button></div>`;
function coverHtml(w: Work) {
  const p = preview(w);
  return p
    ? `<button type="button" class="card-cover" data-detail="${e(w.id)}" aria-label="View ${e(w.name)} details"><img src="${e(p.url)}" alt="${e(p.alt)}" width="640" height="360" decoding="async"/></button>`
    : imageFallback(w);
}
const record = (v: unknown): Record<string, unknown> =>
  v && typeof v === "object" && !Array.isArray(v)
    ? (v as Record<string, unknown>)
    : {};
const text = (v: unknown, fallback = "Not verified"): string =>
  v === null || v === undefined || v === ""
    ? fallback
    : Array.isArray(v)
      ? v
          .map((x) => text(x, ""))
          .filter(Boolean)
          .join(" · ")
      : typeof v === "object"
        ? Object.entries(v as Record<string, unknown>)
            .map(([k, x]) => `${k}: ${text(x, "")}`)
            .join("; ")
        : String(v);
const search = $<HTMLInputElement>("catalog-search"),
  sort = $<HTMLSelectElement>("sort-order"),
  results = $("catalog-results");
const filterIds = [
  "source",
  "form",
  "tactile",
  "force",
  "access",
  "openness",
  "availability",
  "year",
] as const;
const controls = Object.fromEntries(
  filterIds.map((k) => [k, $<HTMLSelectElement>(k + "-filter")]),
) as Record<(typeof filterIds)[number], HTMLSelectElement>;
const detail = $<HTMLDialogElement>("detail-dialog"),
  compare = $<HTMLDialogElement>("compare-dialog"),
  about = $<HTMLDialogElement>("about-dialog");
let works: Work[] = [],
  byId = new Map<string, Work>(),
  collection = "hardware",
  cursor = 0,
  generation = 0,
  busy = false,
  observer: IntersectionObserver | undefined,
  activeBatch: HTMLElement | undefined;
const params = new URLSearchParams(location.search);
collection = ["hardware", "datasets", "research"].includes(
  params.get("collection") ?? "",
)
  ? params.get("collection")!
  : "hardware";
if (params.get("view") === "index") collection = "research";
search.value = params.get("q") ?? "";
const sortParam = params.get("sort");
sort.value = Array.from(sort.options).some((o) => o.value === sortParam)
  ? sortParam!
  : "newest";
for (const k of filterIds)
  if (
    params.has(k) &&
    Array.from(controls[k].options).some((o) => o.value === params.get(k))
  )
    controls[k].value = params.get(k)!;
for (const el of document.querySelectorAll<HTMLInputElement>(
  "input[name=signal]",
))
  el.checked = (params.get("signals") ?? "").split(",").includes(el.value);
const selected = new Set<string>(
  [...new Set((params.get("compare") ?? "").split(",").filter(Boolean))].slice(
    0,
    4,
  ),
);
const PAGE_SIZE = 12;
const signals = () =>
  Array.from(
    document.querySelectorAll<HTMLInputElement>("input[name=signal]:checked"),
  ).map((el) => el.value);
function syncUrl() {
  const p = new URLSearchParams();
  if (collection !== "hardware") p.set("collection", collection);
  if (search.value.trim()) p.set("q", search.value.trim());
  if (sort.value !== "newest") p.set("sort", sort.value);
  for (const k of filterIds)
    if (controls[k].value !== "all") p.set(k, controls[k].value);
  if (signals().length) p.set("signals", signals().join(","));
  if (selected.size) p.set("compare", [...selected].join(","));
  if (detail.open && detail.dataset.work) p.set("item", detail.dataset.work);
  history.replaceState(
    null,
    "",
    location.pathname + (p.size ? "?" + p.toString() : "") + location.hash,
  );
}
function filtered() {
  const q = search.value.trim().toLowerCase(),
    sig = signals();
  const list = works.filter(
    (w) =>
      (collection === "research" || collection === "datasets"
        ? collection === "research" ||
          (w.id !== "resource-e31879bb21" && (w.sections.some((s) => s.startsWith("UMI Dataset")) ||
          !!w.research?.dataset))
        : !!(w.hardwareImage ?? w.coverImage ?? w.image) && (w.kind === "System" || w.form !== "Not reported")) &&
      (!q ||
        [
          w.name,
          w.title,
          w.keywords,
          w.institute,
          w.publication,
          w.tracking,
          JSON.stringify(w.research ?? {}),
          JSON.stringify(w.release ?? {}),
          ...w.sections,
          ...w.signals,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)) &&
      (controls.source.value === "all" || w.source === controls.source.value) &&
      (controls.form.value === "all" ||
        (w.forms ?? [w.form]).includes(controls.form.value)) &&
      (controls.tactile.value === "all" ||
        (w.tactileStatus ?? "unknown") === controls.tactile.value) &&
      (controls.force.value === "all" ||
        (w.forceStatus ?? "unknown") === controls.force.value) &&
      (controls.access.value === "all" ||
        w.dataAccess === controls.access.value) &&
      (controls.openness.value === "all" || (w.openness ?? "unknown") === controls.openness.value) &&
      (controls.availability.value === "all" || (controls.availability.value === "commercial" ? w.commercial === true : w.commercial !== true)) &&
      (controls.year.value === "all" || w.year === controls.year.value) &&
      sig.every((s) => w.signals.includes(s)),
  );
  const rank = (w: Work) => {
    const r = settings.initial.indexOf(w.id);
    return r < 0 ? 1000 : r;
  };
  return list.sort((a, b) =>
    sort.value === "name"
      ? a.name.localeCompare(b.name)
      : sort.value === "oldest"
        ? compareDates(a, b, "oldest")
        : sort.value === "newest"
          ? compareDates(a, b)
          : rank(a) - rank(b) || compareDates(a, b),
  );
}
function publicStats(w: Work) {
  const d = record(w.research?.dataset),
    released = record(d.publicScale),
    reported = record(d.reportedScale);
  const s = Object.keys(released).length ? released : reported;
  const scope = Object.keys(released).length ? "released" : "reported";
  const fmt = (x: unknown) =>
    typeof x === "number"
      ? new Intl.NumberFormat("en", {
          notation: x >= 10000 ? "compact" : "standard",
          maximumFractionDigits: 1,
        }).format(x)
      : text(x, "");
  return [
    "hours",
    "episodes",
    "sessions",
    "trajectories",
    "indexedDemos",
    "tasks",
    "semanticTasks",
    "vqaSamples",
  ]
    .filter((k) => s[k] !== undefined && s[k] !== null)
    .slice(0, 2)
    .map(
      (k) =>
        `${s[k + "Qualifier"] === ">" ? ">" : ""}${fmt(s[k])} ${k === "hours" ? "h" : k === "semanticTasks" ? "semantic tasks" : k === "indexedDemos" ? "indexed demos" : k === "vqaSamples" ? "VQA samples" : k}${k.startsWith("indexed") ? "" : " " + scope}`,
    );
}
function card(w: Work) {
  const research = collection === "research";
  const d = record(w.research?.dataset);
  const tags =
    collection === "datasets"
      ? [...publicStats(w), text(d.access, "")].filter(Boolean).slice(0, 3)
      : [...w.signals.filter((s) => s !== "Not reported").slice(0, 2),
        ...(w.commercial ? [String(w.release?.availability ?? "").includes("Announced") ? "Announced" : String(w.release?.availability ?? "").includes("project") ? "Industry" : "Commercial"] : w.openness === "open" ? ["Open source"] : [])];
  const name = collection === "datasets" ? w.datasetName ?? text(d.name, w.name) : controls.availability.value === "commercial" ? text(w.release?.productName, w.name) : w.name;
  const description = collection === "datasets" ? w.datasetSummary ?? text(d.observations, w.summary ?? w.keywords) : w.summary ?? w.keywords;
  return `<article class="library-card feed-enter${selected.has(w.id) ? " is-selected" : ""}" data-id="${e(w.id)}">${!research ? coverHtml(w) : ""}<div class="card-copy"><p class="card-meta">${e(w.institute)} <span>·</span> ${e(w.publication === "Product" ? "Product" : w.year)}</p><h2><button type="button" data-detail="${e(w.id)}" title="${e(w.title)}">${e(research ? w.title : name)}</button></h2><p class="card-description">${e(description)}</p><div class="card-tags">${tags.map((s) => `<span${/soon|pending/i.test(s) ? ' class="access-pending"' : ""}>${e(s === "Proprioception" ? "State" : s)}</span>`).join("")}</div><div class="card-actions"><button type="button" data-detail="${e(w.id)}">Details <span aria-hidden="true">↗</span></button><button type="button" class="compare-toggle" data-compare="${e(w.id)}" aria-label="${selected.has(w.id) ? "Remove" : "Compare"} ${e(w.name)}" aria-pressed="${selected.has(w.id)}" title="${selected.has(w.id) ? "Remove from comparison" : "Add to comparison"}"><span aria-hidden="true">${selected.has(w.id) ? "✓" : "+"}</span> Compare</button></div></div></article>`;
}
function skeleton() {
  return `<article class="library-card skeleton-card" aria-hidden="true"><div class="card-cover skeleton-stage"><div class="skeleton-block skeleton-cover"></div></div><div class="card-copy"><div class="skeleton-block skeleton-meta"></div><div class="skeleton-block skeleton-title"></div><div class="skeleton-block skeleton-line"></div><div class="skeleton-block skeleton-line short"></div><div class="skeleton-tags"><i class="skeleton-block"></i><i class="skeleton-block"></i></div><div class="skeleton-footer"><i class="skeleton-block"></i><i class="skeleton-block"></i></div></div></article>`;
}
function shimmerMask(batch: HTMLElement) {
  const overlay = batch.querySelector<HTMLElement>(".shared-shimmer");
  if (!overlay) return;
  const origin = batch.getBoundingClientRect();
  if (!origin.width || !origin.height) return;
  const rects = Array.from(
    batch.querySelectorAll<HTMLElement>(".skeleton-block"),
  )
    .map((el) => {
      const r = el.getBoundingClientRect();
      return `<rect x="${(r.left - origin.left).toFixed(1)}" y="${(r.top - origin.top).toFixed(1)}" width="${r.width.toFixed(1)}" height="${r.height.toFixed(1)}" rx="${Math.min(14, r.height / 3)}" fill="white"/>`;
    })
    .join("");
  const mask = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${origin.width}' height='${origin.height}' viewBox='0 0 ${origin.width} ${origin.height}'>${rects}</svg>`)}")`;
  overlay.style.maskImage = mask;
  overlay.style.setProperty("-webkit-mask-image", mask);
}
function makeBatch(n: number) {
  const batch = document.createElement("div");
  batch.className = "feed-batch";
  batch.innerHTML =
    Array.from({ length: n }, skeleton).join("") +
    '<div class="shared-shimmer" aria-hidden="true"><div class="shimmer-light"></div></div>';
  results.append(batch);
  activeBatch = batch;
  shimmerMask(batch);
  return batch;
}
async function loadImage(url: string) {
  return await new Promise<boolean>((resolve) => {
    const im = new Image();
    let finished = false;
    const finish = (ok: boolean) => {
      if (finished) return;
      finished = true;
      clearTimeout(timeout);
      im.onload = im.onerror = null;
      resolve(ok);
    };
    const timeout = setTimeout(() => finish(false), 10000);
    im.onload = () => {
      im.decode()
        .catch(() => {})
        .then(() => finish(true));
    };
    im.onerror = () => finish(false);
    im.src = url;
  });
}
async function preload(w: Work, force = false, context: MediaMode = mode()) {
  if (collection === "research") return;
  const key = mediaKey(w, context);
  if (previews.has(key) && !force) return;
  const candidate = media(w, context);
  if (candidate && await loadImage(candidate.url)) {
    previews.set(key, candidate);
    return;
  }
  // Keep the image's meaning: a dataset never falls back to a hardware photograph.
  previews.set(key, null);
}
let maskFrame = 0;
function queueMask(batch: HTMLElement) {
  cancelAnimationFrame(maskFrame);
  maskFrame = requestAnimationFrame(() => {
    if (batch.isConnected) shimmerMask(batch);
  });
}
function setBoundary(loading: boolean, finished: boolean) {
  $("loading-dots").hidden = !loading;
  $("feed-end").hidden = !finished;
  $("feed-error").hidden = true;
  results.setAttribute("aria-busy", String(loading));
}
async function loadNext() {
  if (busy || !works.length) return;
  const list = filtered();
  if (cursor >= list.length) {
    setBoundary(false, !!list.length);
    return;
  }
  const token = generation;
  busy = true;
  setBoundary(true, false);
  const chunk = list.slice(cursor, cursor + PAGE_SIZE);
  cursor += chunk.length;
  const batch = makeBatch(chunk.length);
  const nodes = Array.from(
    batch.querySelectorAll<HTMLElement>(".skeleton-card"),
  );
  await Promise.allSettled(
    chunk.map(async (w, i) => {
      await preload(w);
      if (token !== generation || !batch.isConnected) return;
      const template = document.createElement("template");
      template.innerHTML = card(w);
      nodes[i].replaceWith(template.content);
      queueMask(batch);
    }),
  );
  if (token !== generation) return;
  batch.querySelector(".shared-shimmer")?.remove();
  activeBatch = undefined;
  busy = false;
  setBoundary(false, cursor >= list.length);
  updateTray();
  observe();
  if (
    cursor < list.length &&
    $("feed-boundary").getBoundingClientRect().top <= innerHeight * 2
  )
    void loadNext();
}
function observe() {
  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) void loadNext();
    },
    { rootMargin: `0px 0px ${Math.ceil(innerHeight)}px 0px`, threshold: 0 },
  );
  observer.observe($("feed-boundary"));
}
function filterChips() {
  const chips: { key: string; value: string; label: string }[] = [];
  if (search.value.trim())
    chips.push({ key: "q", value: "", label: search.value.trim() });
  for (const k of filterIds)
    if (controls[k].value !== "all")
      chips.push({
        key: k,
        value: "",
        label: `${({source: "Research area", form: "Interface", tactile: "Tactile", force: "Force / torque", access: "Dataset access", openness: "Source release", availability: "Availability", year: "Year"})[k]}: ${controls[k].selectedOptions[0].textContent}`,
      });
  signals().forEach((s) => chips.push({ key: "signal", value: s, label: s }));
  $("active-filters").innerHTML = chips
    .map(
      (c) =>
        `<button type="button" data-remove="${e(c.key)}" data-value="${e(c.value)}" aria-label="Remove ${e(c.label)} filter">${e(c.label)}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button>`,
    )
    .join("");
  $("filter-count").textContent = String(chips.length);
  $("filter-count").hidden = !chips.length;
}
function render() {
  if (!works.length) {
    filterChips();
    syncUrl();
    return;
  }
  generation++;
  busy = false;
  activeBatch = undefined;
  cursor = 0;
  observer?.disconnect();
  results.replaceChildren();
  results.classList.toggle("research-view", collection === "research");
  results.classList.toggle("dataset-view", collection === "datasets");
  const list = filtered();
  $("catalog-empty").hidden = !!list.length;
  $("result-count").textContent =
    `${list.length} ${collection === "hardware" ? "hardware entries" : collection === "datasets" ? "dataset families" : "research entries"}`;
  document
    .querySelectorAll<HTMLButtonElement>("[data-collection]")
    .forEach((b) =>
      b.setAttribute(
        "aria-pressed",
        String(b.dataset.collection === collection),
      ),
    );
  filterChips();
  syncUrl();
  setBoundary(false, false);
  if (list.length) void loadNext();
}
function reset() {
  search.value = "";
  for (const k of filterIds) controls[k].value = "all";
  document
    .querySelectorAll<HTMLInputElement>("input[name=signal]")
    .forEach((el) => (el.checked = false));
  sort.value = "newest";
  render();
}
function fitPanel() {
  const el = $("filter-panel");
  if (el.hidden) return;
  const viewport = window.visualViewport;
  const viewportTop = viewport?.offsetTop ?? 0;
  const bottom = viewport ? viewportTop + viewport.height : innerHeight;
  el.style.top = "";
  // Short windows need a taller sheet, rather than a popover squeezed under chrome.
  if (bottom - el.getBoundingClientRect().top < 300) {
    const toolbarTop = $("library-toolbar").getBoundingClientRect().top;
    el.style.top = `${viewportTop + 12 - toolbarTop}px`;
  }
  el.style.maxHeight = `${Math.max(48, Math.floor(bottom - el.getBoundingClientRect().top - 12))}px`;
}
function panel(open: boolean) {
  $("filter-panel").hidden = !open;
  $("filters-toggle").setAttribute("aria-expanded", String(open));
  if (open) fitPanel();
}
window.visualViewport?.addEventListener("resize", fitPanel, { passive: true });
addEventListener("scroll", fitPanel, { passive: true });
function updateTray() {
  for (const id of selected) if (!byId.has(id)) selected.delete(id);
  $("compare-tray").hidden = !selected.size;
  $("compare-count").textContent = `${selected.size} of 4 selected`;
  $("compare-names").textContent = [...selected]
    .map((id) => byId.get(id)!.name)
    .join(" · ");
  $<HTMLButtonElement>("open-compare").disabled = selected.size < 2;
  for (const b of document.querySelectorAll<HTMLButtonElement>(
    "[data-compare]",
  )) {
    const chosen = selected.has(b.dataset.compare!);
    b.setAttribute("aria-pressed", String(chosen));
    b.innerHTML = `<span aria-hidden="true">${chosen ? "✓" : "+"}</span> Compare`;
    b.closest("article")?.classList.toggle("is-selected", chosen);
  }
  syncUrl();
}
let toastTimer: ReturnType<typeof setTimeout> | undefined;
function announce(message: string) {
  const el = $("announcement");
  el.textContent = message;
  el.classList.add("is-visible");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2500);
}
function toggle(id: string) {
  if (!byId.has(id)) return;
  if (selected.has(id)) selected.delete(id);
  else if (selected.size >= 4) {
    announce("Compare up to four entries. Remove one to add another.");
    return;
  } else selected.add(id);
  updateTray();
  const b = detail.querySelector<HTMLElement>("[data-detail-compare]");
  if (b)
    b.textContent = selected.has(id)
      ? "Remove from comparison"
      : "Add to comparison";
}
function sensor(v: unknown) {
  const s = record(v);
  return s.status === "none" ? "None" : s.status === "present" ? "Yes" : s.status === "optional" ? "Optional" : "Unknown";
}
function measurement(value: unknown) {
  const m = record(value);
  if (!Object.keys(m).length) return "Unknown";
  const amount = typeof m.value === "number" ? new Intl.NumberFormat("en", {maximumFractionDigits: 2}).format(m.value) : text(m.value, "");
  const valueLabel = m.currency && typeof m.value === "number"
    ? new Intl.NumberFormat("en", {style: "currency", currency: String(m.currency), maximumFractionDigits: 2}).format(m.value)
    : `${amount}${m.tolerance ? " ± " + text(m.tolerance) : ""} ${text(m.unit ?? m.currency, "")}`;
  return `${valueLabel} · ${text(m.shortScope ?? m.scope, "scope unknown")}`;
}
const concise = (w: Work) => record(record(w.research?.hardware).display);
const opennessLabel = (w: Work) => ({open:"Open source", partial:"Partial release", closed:"Closed source", unknown:"Unknown"})[w.openness ?? "unknown"] ?? "Unknown";
function hardwareFacts(w: Work): [string, string][] {
  const h = record(w.research?.hardware), c = concise(w);
  const rows: [string, string][] = [
    ["Interface", text(c.form, (w.forms ?? [w.form]).join(" · "))],
    ["Tracking", text(c.tracking, "Unknown")],
    ["Vision", text(c.vision, "Unknown")],
    ["Tactile", sensor(h.tactile)],
    ["Force / torque", sensor(h.forceTorque)],
    ["Actions", text(c.actions, "Unknown")],
    ["Source release", opennessLabel(w)],
  ];
  if (w.commercial) rows.push(["Availability", text(w.release?.availability, "Commercial product")]);
  if (w.release?.productName && w.release.productName !== w.name) rows.push(["Product version", text(w.release.productName)]);
  for (const k of ["cost", "mass"]) if (h[k]) rows.push([k === "cost" ? "Reported cost" : "Reported mass", measurement(h[k])]);
  return rows;
}
function facts(w: Work): [string, string][] {
  const d = record(w.research?.dataset), h = record(w.research?.hardware);
  return [
    ["Paper / record", w.date], ["Institution", w.institute], ["Publication", w.publication],
    ...hardwareFacts(w).filter(([key]) => !["Availability", "Product version", "Reported cost", "Reported mass"].includes(key)),
    ["Reported cost", measurement(h.cost)],
    ["Reported mass", measurement(h.mass)],
    ["Availability", text(w.release?.availability, w.commercial ? "Commercial product" : "Research / DIY")],
    ["Product version", text(w.release?.productName, "—")],
    ["Hardware license", text(w.release?.hardwareLicense, "Unknown")],
    ["Software license", text(w.release?.softwareLicense, "Unknown")],
    ["Recorded channels", w.signals.map(v => v === "Proprioception" ? "State" : v).join(" · ")],
    ["Dataset access", text(d.access, w.dataAccess)],
    ["Released / indexed", scaleText(record(d.publicScale))],
    ["Reported scale", scaleText(record(d.reportedScale))],
    ["Data format", text(d.formats, w.format)],
    ["Dataset license", text(d.license, "Unknown")],
  ];
}
function scaleText(scale: Record<string, unknown>) {
  const labels: Record<string, string> = {
    hours: "hours",
    episodes: "episodes",
    demos: "demonstrations",
    demonstrations: "demonstrations",
    sessions: "sessions",
    tasks: "tasks",
    scenes: "scenes",
    environments: "environments",
    objects: "objects",
    operators: "operators",
    collectionDesks: "collection desks",
    trajectories: "trajectories",
    videos: "videos",
    semanticTasks: "semantic tasks",
    taskConfigurations: "task configurations",
    taskHandConfigurations: "task–hand configurations",
    singleArmTasks: "single-arm tasks",
    dualArmTasks: "bimanual tasks",
    singleArmSessions: "single-arm sessions",
    dualArmSessions: "bimanual sessions",
    indexedDemos: "indexed demonstrations",
    indexedRows: "indexed task rows",
    pretrainingVideos: "pretraining videos",
    vqaSamples: "VQA samples",
    realWorldVqaSamples: "real-world VQA samples",
    fisheyeRefSpatialVqaSamples: "fisheye VQA samples",
    clips: "clips",
    indoorScenes: "indoor scenes",
    householdScenarios: "household scenarios",
    locations: "locations",
    datasetFamilies: "dataset families",
    processedSplits: "processed splits",
    frames: "frames",
    tables: "tables",
    laundryEpisodes: "laundry episodes",
    drawingEpisodes: "drawing episodes",
    uniqueDrawings: "unique drawings",
  };
  return (
    Object.entries(labels)
      .filter(([k]) => scale[k] !== undefined && scale[k] !== null)
      .map(
        ([k, label]) =>
          `${scale[k + "Qualifier"] === ">" ? ">" : ""}${typeof scale[k] === "number" ? new Intl.NumberFormat("en").format(scale[k] as number) : text(scale[k])} ${label}`,
      )
      .join(" · ") || "Not verified"
  );
}
const factsHtml = (rows: [string, string][]) =>
  `<dl class="facts">${rows.map(([k, v]) => `<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join("")}</dl>`;
function sources(w: Work) {
  const h = record(w.research?.hardware),
    d = record(w.research?.dataset);
  const items = [
    ...(Array.isArray(h.evidence) ? h.evidence : []),
    ...(h.signalsEvidence ? [h.signalsEvidence] : []),
    ...(Array.isArray(d.sources) ? d.sources : []),
    ...(Array.isArray(w.release?.evidence) ? w.release.evidence : []),
  ].map(record);
  const seen = new Set<string>();
  return items.filter((s) => {
    const u = String(s.url ?? "");
    if (!/^https?:\/\//.test(u) || seen.has(u)) return false;
    seen.add(u);
    return true;
  });
}
function variantsHtml(w: Work) {
  const variants = Array.isArray(w.release?.commercialVariants) ? w.release.commercialVariants.map(record) : [];
  return variants.length ? `<div class="product-versions"><h4>Product versions</h4>${variants.map(v => {
    const image = record(v.media), joints = record(v.joints);
    const rows: [string,string][] = [
      ...(v.mass ? [["Mass", measurement(v.mass)] as [string,string]] : []),
      ...(Object.keys(joints).length ? [["Joints", `${text(joints.active)} active + ${text(joints.passive)} passive`] as [string,string]] : []),
      ...(v.form ? [["Interface", text(v.form)] as [string,string]] : []),
      ...(v.tracking ? [["Tracking", text(v.tracking)] as [string,string]] : []),
    ];
    return `<div class="product-version"><a href="${e(v.url)}" target="_blank" rel="noopener noreferrer">${e(v.name)} ↗</a>${image.image ? `<img src="${e(path(String(image.image)))}" alt="${e(image.alt ?? v.name)}" loading="lazy"/><p class="image-note"><a href="${e(image.page)}" target="_blank" rel="noopener noreferrer">${e(image.type ?? "Official product image")} ↗</a></p>` : ""}${factsHtml(rows)}</div>`;
  }).join("")}</div>` : "";
}
function showDetail(id: string) {
  const w = byId.get(id);
  if (!w) return;
  panel(false);
  detail.dataset.work = id;
  const h = record(w.research?.hardware),
    d = record(w.research?.dataset);
  const links = [
    { label: w.publication === "Product" ? "Product" : w.publication === "Solution" ? "Solution" : /arxiv\.org|doi\.org|openreview\.net|proceedings/i.test(w.paperUrl) ? "Paper" : "Source", url: w.paperUrl },
    ...w.links.filter(l => !(d.datasetUrl && /dataset|^data$/i.test(l.label))).map(l => ({...l, label: /^github$|^code$|^software$|^sdk$/i.test(l.label) ? "Code" : /^project$/i.test(l.label) ? "Project" : l.label})),
    { label: "Dataset", url: String(d.datasetUrl ?? "") },
  ].filter((l) => l.url && /^https?:\/\//.test(l.url));
  const seen = new Set<string>();
  const unique = links.filter((l) => {
    if (seen.has(l.url)) return false;
    seen.add(l.url);
    return true;
  });
  const sourceList = sources(w);
  const selectedMedia = preview(w) ?? media(w);
  const isDataset = collection === "datasets";
  const mediaHtml = selectedMedia ? `<div class="detail-media"><img class="detail-cover" src="${e(selectedMedia.url)}" alt="${e(selectedMedia.alt)}"/><p class="image-note">${e(w.credit ?? w.institute)} · <a href="${e(selectedMedia.source)}" target="_blank" rel="noopener noreferrer">${e(selectedMedia.kind)} ↗</a></p></div>` : "";
  const notes = [h.observationSignalsNote, h.interfaceFormsNote, record(h.tactile).note, record(h.forceTorque).note, h.hardwareAvailability,
    record(h.cost).scope, record(h.mass).scope, d.accessNote, d.fpsScope, record(d.publicScale).scope, record(d.reportedScale).scope,
    ...(Array.isArray(d.scopeNotes) ? d.scopeNotes : []),
    ...(Array.isArray(w.release?.notes) ? w.release.notes : [])].filter(Boolean);
  const hardwareSection = w.kind === "System" || Object.keys(h).length ? `<section class="detail-section"><h3>Hardware & sensing</h3>${factsHtml(hardwareFacts(w))}</section>` : "";
  const datasetSection = Object.keys(d).length ? `<section class="detail-section"><h3>Dataset</h3><div class="data-scale-columns">${scaleText(record(d.publicScale)) !== "Not verified" ? `<div class="data-scale-column"><span>Released / indexed</span><p>${e(scaleText(record(d.publicScale)))}</p></div>` : ""}${scaleText(record(d.reportedScale)) !== "Not verified" ? `<div class="data-scale-column"><span>Reported</span><p>${e(scaleText(record(d.reportedScale)))}</p></div>` : ""}</div>${factsHtml([
    ["Access", text(d.access)], ["Format", text(d.formats)], ["Frame rate", d.fps ? `${d.fps} Hz` : "Unknown"], ["License", text(d.license)],
  ])}</section>` : "";
  const release = w.release ? `<div class="release-specifications">${factsHtml([
    ["Hardware", text(w.release.hardwareStatus, "Unknown")], ["Software", text(w.release.softwareStatus, "Unknown")],
    ...(w.commercial ? [["Availability", text(w.release?.availability, "Commercial product")] as [string, string]] : []),
  ])}</div>` : "";
  const specifications: [string, string][] = [
    ["Interface", text(h.form, "")], ["Tracking", text(h.poseTracking, "")], ["Vision", text(h.vision, "")],
    ["Tactile sensor", text(record(h.tactile).type, "")], ["Force sensor", text(record(h.forceTorque).type, "")],
    ["Actions", text(h.actionSpace ?? d.action, "")], ["Observations", text(d.observations, "")], ["Embodiments", text(d.embodiments, "")],
  ].filter(([,v]) => !!v) as [string,string][];
  $("detail-content").innerHTML = `<div class="detail-layout${selectedMedia ? "" : " no-media"}">${mediaHtml}<div class="detail-copy"><p class="detail-kicker">${e(w.institute)}${w.date === "—" ? "" : " · " + e(w.date)} · ${e(w.publication)}</p><h2>${e(isDataset ? text(d.name, w.name) : w.name)}</h2><p class="detail-paper-title">${e(isDataset ? w.datasetSummary ?? w.title : w.summary ?? w.title)}</p><div class="detail-links">${unique.map(l => `<a href="${e(l.url)}" target="_blank" rel="noopener noreferrer">${e(l.label)} ↗</a>`).join("")}</div>${isDataset ? datasetSection + (hardwareSection ? `<details class="detail-secondary"><summary>Hardware & sensing</summary>${hardwareSection}</details>` : "") : hardwareSection + (datasetSection ? `<details class="detail-secondary"><summary>Dataset · ${e(publicStats(w)[0] ?? text(d.access))}</summary>${datasetSection}</details>` : "")}
    <details class="detail-sources"><summary>Sources & specifications${sourceList.length ? ` · ${sourceList.length} references` : ""}</summary>${factsHtml(specifications)}${release}${variantsHtml(w)}${notes.map(n => `<p class="data-note">${e(n)}</p>`).join("")}${sourceList.length ? `<ol>${sourceList.map(s => `<li><a href="${e(s.url)}" target="_blank" rel="noopener noreferrer">${e(new URL(String(s.url)).hostname)} ↗</a><br/>${e(s.note ?? s.supports ?? s.section)}</li>`).join("")}</ol>` : `<a href="${e(w.paperUrl)}" target="_blank" rel="noopener noreferrer">Primary source ↗</a>`}</details>
    <button class="button-dark detail-compare" data-detail-compare="${e(id)}" type="button">${selected.has(id) ? "Remove from comparison" : "Add to comparison"}</button></div></div>`;
  detail.showModal();
  document.body.classList.add("dialog-open");
  syncUrl();
}
function showCompare() {
  if (selected.size < 2) return;
  const items = [...selected].map((id) => byId.get(id)!);
  const keys = facts(items[0]).map(([k]) => k);
  $("compare-content").innerHTML =
    `<div class="compare-heading"><h2>Side by side.</h2><p>Specifications and release conditions, with their original sources.</p></div><div class="compare-table-wrap" role="region" tabindex="0" aria-label="Comparison table, scroll horizontally"><table class="comparison-table"><thead><tr><th scope="col">Compare</th>${items.map((w) => `<th scope="col">${preview(w) ? `<img src="${e(preview(w)?.url)}" alt="${e(preview(w)?.alt)}"/>` : ""}<strong>${e(w.name)}</strong><a href="${e(w.paperUrl)}" target="_blank" rel="noopener noreferrer">Primary source ↗</a></th>`).join("")}</tr></thead><tbody>${keys.map((key) => `<tr><th scope="row">${e(key)}</th>${items.map((w) => `<td>${e(facts(w).find(([k]) => k === key)?.[1])}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="compare-footnote">Public releases, gated data, announced corpora, and observation variants are different scopes. A reported total is not necessarily the downloadable portion.</p>`;
  compare.showModal();
  document.body.classList.add("dialog-open");
}
function closeDialog(d: HTMLDialogElement) {
  d.close();
  if (![detail, compare, about].some((x) => x.open))
    document.body.classList.remove("dialog-open");
  syncUrl();
}
for (const d of [detail, compare, about]) {
  d.querySelector("[data-close]")?.addEventListener("click", () =>
    closeDialog(d),
  );
  d.addEventListener("click", (event) => {
    if (event.target === d) closeDialog(d);
  });
  d.addEventListener("close", () => {
    if (![detail, compare, about].some((x) => x.open))
      document.body.classList.remove("dialog-open");
    syncUrl();
  });
}
results.addEventListener("click", (event) => {
  const t = event.target as HTMLElement;
  const retry = t.closest<HTMLButtonElement>("[data-retry-image]");
  if (retry) {
    const w = byId.get(retry.dataset.retryImage!);
    const article = retry.closest("article");
    if (w && article) {
      retry.disabled = true;
      retry.textContent = "Loading…";
      void preload(w, true).then(() => {
        const template = document.createElement("template");
        template.innerHTML = coverHtml(w);
        article.querySelector(".card-cover")?.replaceWith(template.content);
      });
    }
    return;
  }
  const compareButton = t.closest<HTMLElement>("[data-compare]");
  if (compareButton) toggle(compareButton.dataset.compare!);
  const b = t.closest<HTMLElement>("[data-detail]");
  if (b) showDetail(b.dataset.detail!);
});
results.addEventListener(
  "error",
  (event) => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;
    const article = img.closest<HTMLElement>("article[data-id]");
    const w = article ? byId.get(article.dataset.id!) : undefined;
    if (!w || !article) return;
    previews.set(mediaKey(w), null);
    const template = document.createElement("template");
    template.innerHTML = imageFallback(w);
    article.querySelector(".card-cover")?.replaceWith(template.content);
  },
  true,
);
detail.addEventListener("click", (event) => {
  const b = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-detail-compare]",
  );
  if (b) toggle(b.dataset.detailCompare!);
});
document.querySelectorAll<HTMLButtonElement>("[data-collection]").forEach((b) =>
  b.addEventListener("click", () => {
    collection = b.dataset.collection!;
    panel(false);
    render();
  }),
);
for (const k of filterIds) controls[k].addEventListener("change", render);
for (const el of document.querySelectorAll("input[name=signal]"))
  el.addEventListener("change", render);
search.addEventListener("input", render);
sort.addEventListener("change", render);
$("reset-filters").addEventListener("click", reset);
$("empty-reset").addEventListener("click", reset);
$("filters-toggle").addEventListener("click", () =>
  panel($("filter-panel").hidden),
);
$("apply-filters").addEventListener("click", () => panel(false));
document.addEventListener("pointerdown", (event) => {
  if (!$("library-toolbar").contains(event.target as Node)) panel(false);
});
$("active-filters").addEventListener("click", (event) => {
  const b = (event.target as HTMLElement).closest<HTMLElement>("[data-remove]");
  if (!b) return;
  const key = b.dataset.remove!;
  if (key === "q") search.value = "";
  else if (key === "signal")
    document
      .querySelectorAll<HTMLInputElement>("input[name=signal]")
      .forEach((el) => {
        if (el.value === b.dataset.value) el.checked = false;
      });
  else if (filterIds.includes(key as (typeof filterIds)[number]))
    controls[key as (typeof filterIds)[number]].value = "all";
  render();
});
$("open-compare").addEventListener("click", showCompare);
$("clear-compare").addEventListener("click", () => {
  selected.clear();
  updateTray();
});
$("share-view").addEventListener("click", async () => {
  syncUrl();
  try {
    await navigator.clipboard.writeText(location.href);
    announce("Link copied. Filters and comparison are included.");
  } catch {
    const field = document.createElement("input");
    field.value = location.href;
    field.setAttribute("aria-label", "Copy view URL");
    $("active-filters").append(field);
    field.select();
    announce("Copy the selected link to share this view.");
  }
});
document.querySelectorAll("[data-about]").forEach((b) =>
  b.addEventListener("click", () => {
    about.showModal();
    document.body.classList.add("dialog-open");
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") panel(false);
  if (
    event.key === "/" &&
    ![detail, compare, about].some((d) => d.open) &&
    !["INPUT", "TEXTAREA", "SELECT"].includes(
      (event.target as HTMLElement).tagName,
    )
  ) {
    event.preventDefault();
    search.focus();
  }
});
let resizeFrame = 0;
addEventListener(
  "resize",
  () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (activeBatch) shimmerMask(activeBatch);
      if (works.length) observe();
      fitPanel();
    });
  },
  { passive: true },
);
async function boot() {
  generation++;
  const token = generation;
  busy = true;
  results.replaceChildren();
  makeBatch(PAGE_SIZE);
  setBoundary(true, false);
  try {
    const response = await fetch(settings.endpoint);
    if (!response.ok) throw Error(`Catalog HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data) || !data.length) throw Error("Empty catalog");
    if (token !== generation) return;
    works = data as Work[];
    byId = new Map(works.map((w) => [w.id, w]));
    const priorAccess = controls.access.value;
    const accesses = [...new Set(works.map((w) => w.dataAccess))].sort();
    controls.access.innerHTML =
      '<option value="all">All access states</option>' +
      accesses.map((s) => `<option value="${e(s)}">${e(s)}</option>`).join("");
    if (accesses.includes(priorAccess)) controls.access.value = priorAccess;
    render();
    updateTray();
    const item = params.get("item");
    if (item && byId.has(item)) showDetail(item);
  } catch (error) {
    if (token !== generation) return;
    busy = false;
    activeBatch = undefined;
    results.replaceChildren();
    setBoundary(false, false);
    $("feed-error").hidden = false;
    console.error(error);
  }
}
$("retry-load").addEventListener("click", () => void boot());
void boot();
