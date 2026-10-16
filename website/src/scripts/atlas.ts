import type { Work } from "../lib/catalog";
const works: Work[] = JSON.parse(
  document.getElementById("catalog-data")!.textContent!,
);
const settings = JSON.parse(
  document.getElementById("catalog-settings")!.textContent!,
);
const byId = new Map(works.map((w) => [w.id, w]));
const $ = <T extends HTMLElement>(id: string) =>
  document.getElementById(id) as T;
const e = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
const image = (w: Work) => settings.base.replace(/\/$/, "") + "/" + w.image;
const search = $<HTMLInputElement>("catalog-search");
const source = $<HTMLSelectElement>("source-filter");
const year = $<HTMLSelectElement>("year-filter");
const access = $<HTMLSelectElement>("access-filter");
const sort = $<HTMLSelectElement>("sort-order");
const results = $("catalog-results");
const detail = $<HTMLDialogElement>("detail-dialog");
const compare = $<HTMLDialogElement>("compare-dialog");
const selected = new Set<string>();
let view: "gallery" | "index" = "gallery";
let limit = 24;
let lastFocus: HTMLElement | null = null;
let toastTimer: ReturnType<typeof setTimeout>;
const params = new URLSearchParams(location.search);
function announce(message: string) {
  const toast = $("atlas-announcement");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3500);
}
function assignOption(el: HTMLSelectElement, key: string) {
  const value = params.get(key);
  if (value && [...el.options].some((o) => o.value === value)) el.value = value;
}
assignOption(source, "source");
assignOption(year, "year");
assignOption(access, "access");
assignOption(sort, "sort");
search.value = params.get("q") ?? "";
if (params.get("view") === "index") view = "index";
const chosen =
  params
    .get("compare")
    ?.split(",")
    .filter((id) => byId.has(id))
    .slice(0, 4) ?? [];
chosen.forEach((id) => selected.add(id));
for (const input of document.querySelectorAll<HTMLInputElement>(
  'input[name="facet"],input[name="signal"]',
)) {
  const key =
    input.name === "facet"
      ? settings.kind === "umi"
        ? "form"
        : "stage"
      : "signals";
  input.checked = (params.get(key)?.split(",") ?? []).includes(input.value);
}
function checked(name: string) {
  return [
    ...document.querySelectorAll<HTMLInputElement>(
      `input[name="${name}"]:checked`,
    ),
  ].map((x) => x.value);
}
function stateUrl() {
  const p = new URLSearchParams();
  if (view === "index") p.set("view", view);
  if (search.value.trim()) p.set("q", search.value.trim());
  if (source.value !== "all") p.set("source", source.value);
  if (year.value !== "all") p.set("year", year.value);
  if (access.value !== "all") p.set("access", access.value);
  if (sort.value !== "recommended") p.set("sort", sort.value);
  const facets = checked("facet"),
    signals = checked("signal");
  if (facets.length)
    p.set(settings.kind === "umi" ? "form" : "stage", facets.join(","));
  if (signals.length) p.set("signals", signals.join(","));
  if (selected.size) p.set("compare", [...selected].join(","));
  if (detail.open) {
    const id = detail.dataset.work;
    if (id) p.set("item", id);
  }
  return p;
}
function syncUrl() {
  const p = stateUrl().toString();
  history.replaceState(
    null,
    "",
    location.pathname + (p ? "?" + p : "") + location.hash,
  );
}
function resourceChips(w: Work) {
  const labels = [
    w.codeAccess === "Repository linked" ? "Code linked" : null,
    w.dataAccess === "Dataset linked"
      ? "Data linked"
      : w.dataAccess === "Not reported"
        ? null
        : w.dataAccess,
  ];
  return labels
    .filter(Boolean)
    .map((v) => `<span class="resource-chip">${e(v)}</span>`)
    .join("");
}
function card(w: Work) {
  const chosen = selected.has(w.id);
  const visual = view === "gallery";
  const tags = w.signals.filter((x) => x !== "Not reported").slice(0, 3);
  return `<article class="atlas-card ${chosen ? "is-selected" : ""}" data-id="${e(w.id)}">
 ${visual ? `<button type="button" class="atlas-card-image" data-detail="${e(w.id)}" aria-label="View ${e(w.name)} details"><img src="${e(image(w))}" alt="${e(w.imageAlt)}" width="640" height="400" loading="lazy" decoding="async"/><span class="image-credit">${e(w.credit)}</span><span class="atlas-image-arrow" aria-hidden="true">↗</span></button>` : ""}
 <div class="atlas-card-body"><div class="atlas-card-top"><span>${e(settings.kind === "umi" ? w.kind : w.source)}</span><time datetime="${e(w.date)}">${e(w.year)}</time></div><h3><button type="button" data-detail="${e(w.id)}">${e(visual ? w.name : w.title)}</button></h3>
 <p class="atlas-card-description">${e(visual ? (w.summary ?? w.keywords) : w.keywords)}</p>
 <div class="atlas-tags">${tags.map((v) => `<span>${e(v)}</span>`).join("")}${settings.kind === "engine" ? `<span>${e(w.stage)}</span>` : ""}</div>
 <div class="atlas-card-status">${resourceChips(w)}</div>
 <div class="atlas-card-footer"><button class="atlas-detail-link" type="button" data-detail="${e(w.id)}">View details <span aria-hidden="true">↗</span></button><label class="atlas-compare-check"><input type="checkbox" data-compare="${e(w.id)}" ${chosen ? "checked" : ""} aria-label="Compare ${e(w.name)}"/>Compare</label></div></div></article>`;
}
function filtered() {
  const q = search.value.trim().toLowerCase();
  const facets = checked("facet"),
    signals = checked("signal");
  const list = works.filter(
    (w) =>
      (view === "index" || w.image) &&
      (!q ||
        [w.name, w.title, w.keywords, w.institute, w.publication, ...w.sections]
          .join(" ")
          .toLowerCase()
          .includes(q)) &&
      (source.value === "all" || source.value === w.source) &&
      (year.value === "all" || year.value === w.year) &&
      (access.value === "all" || access.value === w.dataAccess) &&
      (!facets.length ||
        facets.includes(settings.kind === "umi" ? w.form : w.stage)) &&
      (!signals.length || signals.every((s) => w.signals.includes(s))),
  );
  const rank = (w: Work) => {
    const p = settings.initial.indexOf(w.id);
    return p < 0 ? 1000 : p;
  };
  return list.sort((a, b) =>
    sort.value === "name"
      ? a.name.localeCompare(b.name)
      : sort.value === "oldest"
        ? a.date.localeCompare(b.date)
        : sort.value === "newest"
          ? b.date.localeCompare(a.date)
          : rank(a) - rank(b) || b.date.localeCompare(a.date),
  );
}
function activeFilters() {
  const tags: [string, string][] = [];
  if (search.value.trim()) tags.push(["q", `Search: ${search.value.trim()}`]);
  if (source.value !== "all") tags.push(["source", source.value]);
  if (year.value !== "all") tags.push(["year", year.value]);
  if (access.value !== "all") tags.push(["access", access.value]);
  checked("facet").forEach((v) => tags.push(["facet", v]));
  checked("signal").forEach((v) => tags.push(["signal", v]));
  $("active-filters").innerHTML = tags
    .map(
      ([key, label]) =>
        `<button type="button" data-remove="${key}" data-value="${e(label)}" aria-label="Remove ${e(label)} filter">${e(label)} <span aria-hidden="true">×</span></button>`,
    )
    .join("");
}
function render() {
  const list = filtered();
  results.classList.toggle("atlas-list", view === "index");
  results.innerHTML = list.slice(0, limit).map(card).join("");
  $("result-count").textContent =
    `${list.length} ${view === "gallery" ? "visual entries" : "unique works"}${list.length > limit ? ` · showing ${limit}` : ""}`;
  $("view-explanation").textContent =
    view === "gallery"
      ? "Selected projects with official imagery · full coverage in Research index"
      : "All curated works · grouped across their README sections";
  $("catalog-empty").hidden = !!list.length;
  $("load-more").hidden = list.length <= limit;
  document
    .querySelectorAll<HTMLButtonElement>("[data-view]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.view === view)),
    );
  activeFilters();
  syncUrl();
}
function reset() {
  search.value = "";
  source.value = year.value = access.value = "all";
  sort.value = "recommended";
  document
    .querySelectorAll<HTMLInputElement>(
      'input[name="facet"],input[name="signal"]',
    )
    .forEach((x) => (x.checked = false));
  limit = 24;
  render();
}
function tray() {
  const items = [...selected].map((id) => byId.get(id)!);
  $("compare-tray").hidden = !items.length;
  $("compare-count").textContent = `${items.length} / 4 selected`;
  $("compare-names").textContent = items.map((w) => w.name).join(" · ");
  const btn = $<HTMLButtonElement>("open-compare");
  btn.disabled = items.length < 2;
  btn.textContent = items.length < 2 ? "Select one more" : "Compare selected";
  document
    .querySelectorAll<HTMLInputElement>("[data-compare]")
    .forEach((el) => {
      el.checked = selected.has(el.dataset.compare!);
      el.closest("article")?.classList.toggle("is-selected", el.checked);
    });
  syncUrl();
}
function facts(w: Work) {
  const values: [string, string][] = [
    ["First release", w.date],
    ["Institution", w.institute],
    ["Publication", w.publication],
    ["Data source / area", w.source],
    ["Pipeline role", w.stage],
    ["Interface form", w.form],
    ["Pose tracking", w.tracking],
    ["Observation signals", w.signals.join(" · ")],
    ["Reported format", w.format],
    ["Code", w.codeAccess],
    ["Dataset access", w.dataAccess],
  ];
  return values.filter(([key]) =>
    settings.kind === "umi"
      ? key !== "Pipeline role"
      : !["Interface form", "Pose tracking"].includes(key),
  );
}
function showDetail(id: string) {
  const w = byId.get(id);
  if (!w) return;
  lastFocus = document.activeElement as HTMLElement;
  detail.dataset.work = id;
  const seen = new Set<string>();
  const official = [
    { label: "Paper / primary resource", url: w.paperUrl },
    ...w.links,
  ].filter((l) => {
    if (seen.has(l.url)) return false;
    seen.add(l.url);
    return true;
  });
  $("detail-content").innerHTML =
    `${w.image ? `<div class="detail-image"><img src="${e(image(w))}" alt="${e(w.imageAlt)}"/><p>Image: ${e(w.credit)} · <a href="${e(w.imagePage)}" target="_blank" rel="noopener noreferrer">Official project ↗</a></p></div>` : ""}<div class="detail-copy"><p class="atlas-eyebrow">${e(w.kind)} / ${e(w.date)}</p><h2>${e(w.name)}</h2><p class="detail-title">${e(w.title)}</p><p>${e(w.keywords)}</p><dl class="detail-facts">${facts(
      w,
    )
      .map(([k, v]) => `<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`)
      .join(
        "",
      )}</dl><h3>Follow the original work</h3><div class="detail-links">${official.map((l) => `<a href="${e(l.url)}" target="_blank" rel="noopener noreferrer">${e(l.label)} ↗</a>`).join("")}</div><details class="detail-sections"><summary>Where this work appears</summary><ul>${w.sections.map((s) => `<li>${e(s)}</li>`).join("")}</ul></details><button type="button" class="atlas-primary" data-toggle-detail="${e(w.id)}">${selected.has(w.id) ? "Remove from comparison" : "Add to comparison"}</button><p class="detail-footnote">Not reported means the index has no verified value. Follow the original resource for specifications and access conditions.</p></div>`;
  detail.showModal();
  document.body.classList.add("dialog-open");
  syncUrl();
}
function toggle(id: string) {
  if (selected.has(id)) selected.delete(id);
  else if (selected.size >= 4) {
    announce("Compare up to four entries. Remove one to add another.");
    tray();
    return;
  } else selected.add(id);
  tray();
  const button = detail.querySelector<HTMLButtonElement>(
    "[data-toggle-detail]",
  );
  if (button?.dataset.toggleDetail === id)
    button.textContent = selected.has(id)
      ? "Remove from comparison"
      : "Add to comparison";
}
function showCompare() {
  if (selected.size < 2) return;
  lastFocus = document.activeElement as HTMLElement;
  const items = [...selected].map((id) => byId.get(id)!);
  const rows = facts(items[0]).map(([key]) => key);
  $("compare-content").innerHTML =
    `<div class="compare-heading"><p class="atlas-eyebrow">SIDE BY SIDE</p><h2>Compare the details.</h2><p>Reported attributes, with direct links to each original work.</p></div><div class="compare-table-wrap" tabindex="0" role="region" aria-label="Comparison table; scroll horizontally for all columns"><table class="atlas-compare-table"><thead><tr><th scope="col">Attribute</th>${items.map((w) => `<th scope="col">${w.image ? `<img src="${e(image(w))}" alt="${e(w.imageAlt)}"/>` : ""}<strong>${e(w.name)}</strong><a href="${e(w.paperUrl)}" target="_blank" rel="noopener noreferrer">Primary source ↗</a></th>`).join("")}</tr></thead><tbody>${rows.map((key) => `<tr><th scope="row">${e(key)}</th>${items.map((w) => `<td>${e(facts(w).find(([k]) => k === key)?.[1])}</td>`).join("")}</tr>`).join("")}<tr><th scope="row">Reported scope / keywords</th>${items.map((w) => `<td>${e(w.keywords)}</td>`).join("")}</tr></tbody></table></div><p class="compare-footnote">Dataset sizes and release conditions are reported individually. A larger stated corpus is not necessarily a larger public release.</p>`;
  compare.showModal();
  document.body.classList.add("dialog-open");
}
function closeDialog(d: HTMLDialogElement) {
  d.close();
  if (!detail.open && !compare.open)
    document.body.classList.remove("dialog-open");
  syncUrl();
  lastFocus?.focus();
}
results.addEventListener("click", (event) => {
  const b = (event.target as HTMLElement).closest<HTMLElement>("[data-detail]");
  if (b) showDetail(b.dataset.detail!);
});
results.addEventListener("change", (event) => {
  const input = event.target as HTMLInputElement;
  if (input.dataset.compare) toggle(input.dataset.compare);
});
detail.addEventListener("click", (event) => {
  const b = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-toggle-detail]",
  );
  if (b) toggle(b.dataset.toggleDetail!);
});
for (const d of [detail, compare]) {
  d.querySelector("[data-close]")?.addEventListener("click", () =>
    closeDialog(d),
  );
  d.addEventListener("click", (event) => {
    if (event.target === d) closeDialog(d);
  });
  d.addEventListener("close", () => {
    if (!detail.open && !compare.open)
      document.body.classList.remove("dialog-open");
    syncUrl();
  });
}
for (const el of [source, year, access, sort])
  el.addEventListener("change", () => {
    limit = 24;
    render();
  });
search.addEventListener("input", () => {
  limit = 24;
  render();
});
document
  .querySelectorAll('input[name="facet"],input[name="signal"]')
  .forEach((el) =>
    el.addEventListener("change", () => {
      limit = 24;
      render();
    }),
  );
document.querySelectorAll<HTMLButtonElement>("[data-view]").forEach((b) =>
  b.addEventListener("click", () => {
    view = b.dataset.view as "gallery" | "index";
    limit = 24;
    render();
  }),
);
$("reset-filters").addEventListener("click", reset);
$("empty-reset").addEventListener("click", reset);
$("empty-index").addEventListener("click", () => {
  view = "index";
  render();
});
$("load-more").addEventListener("click", () => {
  limit += 24;
  render();
});
$("open-compare").addEventListener("click", showCompare);
$("clear-compare").addEventListener("click", () => {
  selected.clear();
  tray();
});
$("active-filters").addEventListener("click", (event) => {
  const b = (event.target as HTMLElement).closest<HTMLElement>("[data-remove]");
  if (!b) return;
  const key = b.dataset.remove;
  if (key === "q") search.value = "";
  else if (key === "source") source.value = "all";
  else if (key === "year") year.value = "all";
  else if (key === "access") access.value = "all";
  else
    document
      .querySelectorAll<HTMLInputElement>(`input[name="${key}"]`)
      .forEach((x) => {
        if (x.value === b.dataset.value) x.checked = false;
      });
  limit = 24;
  render();
});
$("share-view").addEventListener("click", async () => {
  syncUrl();
  try {
    await navigator.clipboard.writeText(location.href);
    announce("Link copied. This view and comparison are included.");
  } catch {
    const input = document.createElement("input");
    input.value = location.href;
    input.setAttribute("aria-label", "Copy this view URL");
    $("active-filters").append(input);
    input.focus();
    input.select();
    announce("Copy the selected link to share this view.");
  }
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !detail.open &&
    !compare.open &&
    !["INPUT", "TEXTAREA", "SELECT"].includes(
      (event.target as HTMLElement).tagName,
    )
  ) {
    event.preventDefault();
    search.focus();
  }
});
if (matchMedia("(max-width: 760px)").matches)
  $<HTMLDetailsElement>("filter-panel").open = false;
render();
tray();
if (params.get("item")) showDetail(params.get("item")!);
