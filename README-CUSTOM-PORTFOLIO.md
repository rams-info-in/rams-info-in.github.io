# Crystal portfolio refresh

This package replaces the portfolio pages' presentation while keeping Jekyll and GitHub Pages.

## Copy into the repository

- _layouts/portfolio.html
- index.html
- _pages/projects.md
- _pages/about.md
- _pages/contact.md
- _data/projects.yml
- assets/css/portfolio.css
- assets/js/portfolio.js
- assets/images/favicon.svg

Keep the existing profile photo at assets/images/bio-photo.jpg. The homepage loads that file directly.

## Edit project content

Edit _data/projects.yml. For each project, update:

- id: unique lowercase anchor for direct links
- title: project title
- category: small label shown above the title
- filter: imaging, neuro, protein, genomics, network, or discovery
- status: optional short status
- featured: true adds the first featured project on the homepage
- summary: short current description

Copy an entry to add another project. Long descriptions and images can be added later without changing the page layout.

## Interactions

- Floating research labels open popup notes and link to a filtered project list.
- Research filters update the visible project entries.
- Each project note opens in a native dialog. Escape closes it, and focus returns to the opener.
- Ambient motion respects the visitor's reduced-motion setting.

## Publish

Upload/commit the files to the same GitHub Pages source branch. GitHub Pages rebuilds the Jekyll site after the commit. No separate host is required for these interactions.