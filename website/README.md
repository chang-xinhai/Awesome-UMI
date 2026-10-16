# Visual field guide

The Astro website renders the canonical root README. Update paper titles, dates,
institutions, publications, taxonomy, and resource links in `../README.md`.
Do not create a second paper database in this directory.

`src/data/media.json` adds reviewed presentation metadata: a short display name,
summary, official image URL, source page, image credit, and reported device
attributes for visual browsing. Its IDs must already exist in the README.
Unknown values remain explicitly unknown. These records do not add canonical works.
Locally optimized previews live in `public/images/catalog/`; original project
sources and credits remain attached to each image. Third-party images remain
under their original owners' terms; the repository code license does not
relicense them.

The site offers a visual atlas, a complete deduplicated research index, combined
filters, deep-linked details, comparison of up to four works, and shareable views.
The two related sites use the same component structure, with separate content
and source-specific navigation.

## Development

Requires Node.js 22.22 or newer.

```sh
npm ci
npm run dev
npm run check
npm run build
```

GitHub Pages builds and publishes from `main`. The configured repository base
path is used for every local link, font, script, and image. `explore/` remains a
working alternate entry point. No backend or user account is required.

## Media maintenance

Use separate `hardwareImage` and `datasetImage` fields for each context. Hardware
previews show the device or its hardware diagram; dataset previews show task
examples, environments, coverage, or a dataset overview. Avoid author portraits,
logos, pipelines, and isolated result tables as hardware covers. Use an
appropriately sized WebP preview and preserve the full source figure for context through its official
project link. Verify the image visually before adding it. Record the image
review date and the source of any manually reviewed device attributes.

Run the check and build commands after changes, then test desktop and mobile
search, combined filters, details, comparison, and a reloaded shared URL.

## Research evidence

`src/data/hardware-evidence.json` records field-level hardware facts and primary
sources. `src/data/dataset-evidence.json` keeps reported scale, released portions,
access conditions, formats, and their sources separate. Dates of verification
are not publication dates. Evidence may only attach to existing README IDs or
canonical resource URLs; it never creates a curated work.

The library loads `catalog.json`, built from README and those attributes. Its
continuous feed appends twelve entries per batch and begins loading one viewport
before the end. A single masked light layer sweeps across the active skeleton
batch. Existing cards retain their DOM and scroll position. Image failures show a retry
action; dataset previews never fall back to a hardware photograph. Reduced-motion
preferences disable shimmer, bounce, and movement.

Local review: `npm run dev -- --host 0.0.0.0 --port 4340`.

`release-evidence.json` records hardware and software releases separately. The
Open source filter requires verified reusable hardware source and licensed
software. Partial releases, explicit closed source, and unverified status remain
distinct; selling a product does not establish closed source. Commercial and
community entries with undated official pages use `—` in README.

Hardware details show concise specifications; full qualifications and primary
evidence remain in the collapsed Sources & specifications panel. Dataset
reported scale and released/indexed scale remain separate.

The library defaults to Newest in both the server-rendered preview and the
interactive feed. Reset returns to Newest; explicit shared sort choices are
preserved. Undated entries follow dated entries in chronological views.

The headline uses locally hosted Source Serif 4 (roman and italic); interface
text uses the system font. Font provenance and the SIL Open Font License are
in `src/assets/fonts/`.
