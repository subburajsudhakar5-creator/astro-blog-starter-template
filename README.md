# Sree Venkatesh Residency

Static Astro hotel website for Sree Venkatesh Residency in Ettayapuram, Tamil Nadu. Replaces the blog starter while preserving this repository's Git history.

## Hotel information

- Deluxe AC Double: ₹1,600 + applicable taxes per night.
- Standard Single Non AC: ₹1,000 + applicable taxes per night.
- Check-in: 12:00 PM. Check-out: 11:00 AM the following day.
- Primary telephone and Call Now action: +91 98654 34732.
- Alternate telephone: +91 98436 73636.
- WhatsApp remains disabled at the owner's request.
- Supplied location: https://share.google/jvqQCFJOdg51n4TjT

Edit `src/data/hotel.ts` to update the information. The supplied logo, exterior, room and corridor photographs are optimized WebP files in `public/images/`. The Standard Single Non AC room image is still a labelled placeholder. The street address and facilities await verified details; the Google location link is available for directions. No official star rating is claimed.

## Development and validation

Use Node.js 24 (also set in `.node-version`).

```bash
npm ci
npm run dev
```

```bash
npm run check
npm run build
npm run preview
```

The build produces six static pages and local assets in `dist/`. The GitHub Actions workflow runs type/template checks and a production build for pull requests and pushes to `main`.

## Cloudflare Pages

In Cloudflare **Workers & Pages**, create a **Pages** project using Git integration and select `subburajsudhakar5-creator/astro-blog-starter-template`.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root (leave blank) |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 24, from `.node-version` |

Enable preview deployments for the pull request branch if you want to review it before merging. No application secrets or Cloudflare adapter are needed for this static site. `wrangler.jsonc` declares the Pages project name and static output; the former Workers entry point, bindings and type declarations have been removed.

The repository configuration does not create or connect a project in your Cloudflare account. Complete that connection in the Cloudflare dashboard. If the starter was previously deployed as a Worker, create a Pages project separately; a Workers project does not become a Pages project through a Git change. Once Git integration is connected, Pages builds new commits automatically.

Reference: [Cloudflare's Astro Pages guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/).
