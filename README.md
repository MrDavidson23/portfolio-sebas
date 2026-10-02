# Portfolio

Personal portfolio site for Sebastián Quesada.

## Stack

Static HTML — a single `index.html` with inline CSS and JS, plus `CV.pdf`. The
only external dependency is Google Fonts. No build step, no framework.

## Deploy

Hosted on Vercel ([portfoliosebastian.vercel.app](https://portfoliosebastian.vercel.app)),
deployed straight from this repo on every push to `main`. Project framework
preset is "Other" (set via `vercel.json`, `"framework": null`) since there's
nothing to build.
