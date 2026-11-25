# LibreDental website

The public information site for the LibreDental project, built with
[Astro](https://astro.build) and deployed to Cloudflare Workers as static
assets.

## What's here

```
astro.config.mjs        Astro config (static output, site URL)
wrangler.jsonc          Cloudflare config — serves ./dist, custom 404 page
src/layouts/Base.astro  HTML shell: <head>, SEO tags, header, footer
src/components/         Header and Footer
src/styles/global.css   All styling (light + dark via prefers-color-scheme)
src/pages/index.astro   Landing page
src/pages/about.astro   About the project
src/pages/contribute.astro  How to contribute (devs, dentists, sponsors)
src/pages/docs/         Documentation index + getting-started page
src/pages/license.astro License page
src/pages/404.astro     Custom 404
public/                 Files copied verbatim to the site root (favicon, images)
```

## Local development

```sh
npm install
npm run dev        # http://localhost:4321
```

## Build

```sh
npm run build      # outputs static HTML/CSS/JS to ./dist
```

## License

Licensed under the [Apache License, Version 2.0](LICENSE). The LibreDental
name and logo are trademarks of the LibreDental project and are not covered
by this license.
