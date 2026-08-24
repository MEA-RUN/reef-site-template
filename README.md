# Reef site base

This repository is the internal Nuxt application used to build Reef subject
sites. The reusable
[`reef-deploy.yml`](https://github.com/MEA-RUN/actions/blob/main/.github/workflows/reef-deploy.yml)
workflow checks out this repository, adds the Reef layer, copies the subject's
Markdown, assets, and tools into it, then publishes the generated static site
to the source repository's `gh-pages` branch.

This is a machine-facing build base, not the template students should use.
Student repositories must be created from
[`subject-template`](https://github.com/MEA-RUN/subject-template).

The workflow does not create another repository and does not require a GitHub
App or a custom secret.

## Build inputs

During deployment, the shared workflow provides:

- `reef/`: a checkout of the Reef Nuxt layer;
- `content/`: synchronized subject Markdown;
- `public/`: synchronized assets and interactive tools;
- `REEF_SOURCE_REPOSITORY`: the repository shown by Docus edit/source links;
- `NUXT_APP_BASE_URL`: the GitHub Pages base path;
- `NUXT_SITE_URL`: the GitHub Pages origin.

## Local maintenance

This repository expects a local `reef/` directory because its dependency is
declared as `file:./reef`. To test it manually, check out Reef there before
installing dependencies:

```bash
git clone https://github.com/MEA-RUN/reef.git reef
bun install --frozen-lockfile
bun run build
```

The central deployment workflow is the canonical way to assemble a complete
subject site.
