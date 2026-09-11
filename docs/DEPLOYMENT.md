# Deployment Guide

## GitHub Pages

This project ships with `.github/workflows/deploy-pages.yml`.

### One-time repository setup

1. Push the repository to GitHub with `main` as the default branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open **Actions** and run **Deploy GitHub Pages**, or push a commit to `main`.
5. The deployment job exposes the published URL through the `github-pages` environment.

### What the workflow does

The workflow:

1. Checks out the repository.
2. Uses Node.js to validate the question bank and JavaScript syntax.
3. Configures GitHub Pages.
4. Stages only the static site assets in `_site`.
5. Uploads `_site` as the GitHub Pages artifact.
6. Deploys the artifact to the `github-pages` environment.

### Optional environment protection

For stricter deployment control, add a protection rule to the `github-pages` environment so only the default branch can deploy.

## Custom domain

If you later use a custom domain, configure it from **Settings → Pages → Custom domain**. Do not rely only on adding a `CNAME` file.
