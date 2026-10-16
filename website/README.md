# Visual field guide

The Astro website renders the canonical root README. Update paper titles, dates,
institutions, publications, taxonomy, and resource links in `../README.md`.
Do not create a second paper database in this directory.

`src/data/media.json` adds reviewed presentation metadata: a short display name,
summary, official image URL, source page, image credit, and reported device
attributes for visual browsing. Its IDs must already exist in the README.
Unknown values remain `Not reported`. These records do not add canonical works.
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

Choose a clear official hardware photo or research illustration; avoid author
portraits, logos, and isolated result tables. Use an appropriately sized WebP
preview and preserve the full source figure for context through its official
project link. Verify the image visually before adding it. Record the image
review date and the source of any manually reviewed device attributes.

Run the check and build commands after changes, then test desktop and mobile
search, combined filters, details, comparison, and a reloaded shared URL.
