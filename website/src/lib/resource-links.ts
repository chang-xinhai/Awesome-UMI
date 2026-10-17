export interface ResourceLink {
  label: string;
  url: string;
}

interface LinkedWork {
  paperUrl: string;
  publication: string;
  links: ResourceLink[];
  research?: { dataset?: Record<string, unknown> };
}

type Role = "Paper" | "Project" | "Code" | "Data" | "Other";
const priority: Record<Role, number> = { Paper: 0, Project: 1, Code: 2, Data: 3, Other: 4 };
const repository = (url: URL) => /^(?:github\.com|gitlab\.com|bitbucket\.org)$/.test(url.hostname)
  && url.pathname.split("/").filter(Boolean).length >= 2;
const dataset = (url: URL) => /^(?:huggingface\.co|modelscope\.cn)$/.test(url.hostname)
  && /^\/datasets\//.test(url.pathname);
const paper = (url: URL) => /^(?:arxiv\.org|doi\.org|dx\.doi\.org|openreview\.net|openaccess\.thecvf\.com|ieeexplore\.ieee\.org|papers\.nips\.cc|proceedings\.(?:mlr\.press|neurips\.cc|iclr\.cc)|(?:www\.)?roboticsproceedings\.org|(?:www\.)?ecva\.net)$/.test(url.hostname)
  || /\/doi\//.test(url.pathname)
  || /\.pdf$/i.test(url.pathname)
  || (url.hostname === "www.microsoft.com" && /\/research\/publication\//.test(url.pathname))
  || (url.hostname === "www.research-collection.ethz.ch" && /\/items\//.test(url.pathname))
  || (url.hostname === "elib.dlr.de" && /^\/\d+\//.test(url.pathname));

function canonicalRole(url: URL, publication: string): Role {
  // Product manuals and SDK PDFs are not papers. The legacy paperUrl field
  // can point to a project, repository or released data instead of a paper.
  if (/product|solution/i.test(publication)) return "Project";
  if (dataset(url)) return "Data";
  if (repository(url)) return "Code";
  if (paper(url)) return "Paper";
  return "Project";
}

function normalize(label: string, url: URL): { label: string; role: Role } {
  const name = label.trim();
  if (/^(?:gated\s+)?datasets?(?=$|\s*[,(/])|^data(?=$|\s*[,(/])|^download$/i.test(name)) {
    const suffix = name.replace(/^(?:gated\s+)?datasets?|^data|^download/i, "").trim();
    return { label: `Data${/^gated\s/i.test(name) ? " (gated)" : ""}${suffix ? (/^,/.test(suffix) ? suffix : " " + suffix) : ""}`, role: "Data" };
  }
  if (/^paper code$/i.test(name)) return { label: "Code", role: "Code" };
  if (/^(?:paper|arxiv|doi)$/i.test(name)) return { label: "Paper", role: "Paper" };
  if (/^(?:publication|proceedings)$/i.test(name)) return { label: "Paper (published)", role: "Paper" };
  if (/^(?:original paper|supporting paper|paper pdf)$/i.test(name)) {
    return { label: `Paper (${name.replace(/\bpaper\b/i, "").trim().toLowerCase()})`, role: "Paper" };
  }
  if (/^(?:project|page|product|solution|official resource)$/i.test(name) || /^project\s*[/+]/i.test(name)) return { label: "Project", role: "Project" };
  if (/^(?:github|code|software|sdk|repository|official repository)(?=$|\s*[/+&,(])/i.test(name)) {
    return { label: name.replace(/^(?:official repository|repository|github|software|sdk|code)/i, "Code"), role: "Code" };
  }
  if (/^hardware\s*&\s*code$/i.test(name)) return { label: "Code & hardware", role: "Code" };
  if ((/^tools$|^device sdk$/i.test(name) || /^docs$/i.test(name) && /^\/[^/]+\/[^/]+\/?$/.test(url.pathname)) && repository(url)) return { label: "Code", role: "Code" };
  if (dataset(url) || /^(?:sim assets|scene assets|subset|ShareRobot dataset)(?:$|,)/i.test(name)) return { label: `Data (${name})`, role: "Data" };
  return { label: name, role: "Other" };
}

function identity(url: URL): string {
  // arXiv abstract, HTML and PDF links identify the same paper, not three
  // resources. Keep other query strings and fragments, which may be meaningful.
  const arxiv = url.hostname === "arxiv.org" && url.pathname.match(/^\/(?:abs|html|pdf)\/(\d{4}\.\d{4,5}(?:v\d+)?)(?:\.pdf)?\/?$/);
  return arxiv ? `arxiv:${arxiv[1]}` : url.href.replace(/\/$/, "");
}

export function detailLinks(work: LinkedWork): ResourceLink[] {
  const candidates = [
    { label: "", url: work.paperUrl, canonical: true },
    ...work.links.map(link => ({ ...link, canonical: false })),
    { label: "Data", url: String(work.research?.dataset?.datasetUrl ?? ""), canonical: false },
  ];
  const ranked = candidates.flatMap(link => {
    let url: URL;
    try { url = new URL(link.url); } catch { return []; }
    if (!/^https?:$/.test(url.protocol)) return [];
    const role = link.canonical ? canonicalRole(url, work.publication) : undefined;
    const normalized = role ? { role, label: role } : normalize(link.label, url);
    return [{ label: normalized.label, url: link.url, key: identity(url), rank: priority[normalized.role] }];
  }).sort((a, b) => a.rank - b.rank);
  const seen = new Set<string>();
  return ranked.filter(link => {
    if (seen.has(link.key)) return false;
    seen.add(link.key);
    return true;
  }).map(({ label, url }) => ({ label, url }));
}
