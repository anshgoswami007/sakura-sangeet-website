# Sakura Sangeet — Band Website

A static, bilingual (English / Japanese) website for Sakura Sangeet, a Tokyo-based
Sufi, Bollywood & Bhajan live band. No build tools required — just HTML, CSS and
vanilla JS.

## Structure

```
index.html, about.html, music.html, events.html, contact.html   English pages
ja/index.html, ja/about.html, ...                                Japanese pages (mirrors of the above)
assets/css/style.css                                              all styling
assets/js/data.js                                                 band members, gigs, and social links (single source of truth)
assets/js/main.js                                                 renders member/event cards, nav toggle, populates links
assets/images/                                                    logo + event poster images
robots.txt, sitemap.xml                                           SEO files
```

## Editing content

**You should almost never need to touch the HTML files for routine updates.**
Everything that changes often lives in `assets/js/data.js`:

- **Band members** — edit the `members` array. Each entry has an `en` and `ja`
  version of `name`, `role`, `taste` (music taste) and `experience`, plus a
  `photo` (path under `assets/images/`) and `instagram` (handle, no `@`).
  Placeholder entries have `isPlaceholder: true` and show a "Placeholder" badge
  on the site — remove that field once you fill in real info.
- **Gigs/events** — edit the `events` array. Add a new object with `date`
  (`YYYY-MM-DD`), `title`, `venue`, `description` (each with `en`/`ja`), and
  `image` (path under `assets/images/`). The site automatically sorts events by
  date and labels them "Upcoming" or "Past" based on today's date.
- **Social links** — edit `links.youtube`, `links.instagram`, `links.email` once
  and every page updates (buttons, footer icons, etc. all pull from here).

Changing `data.js` updates both the English and Japanese pages, since they share
the same file.

## Before going live — things to double check

1. **YouTube link & embed** — `links.youtube` in `data.js` is currently a
   placeholder. Also update the `<iframe>` embed on `music.html` / `ja/music.html`
   with your actual channel or video ID.
2. **Instagram handle** — pre-filled as `@sakura_sangeet` (seen on one of your
   flyers) — confirm this is correct.
3. **Email address** — `links.email` in `data.js` is a placeholder `mailto:` —
   replace with your real contact email.
4. **Domain** — `index.html`/`about.html`/etc. and `sitemap.xml`/`robots.txt`
   reference a placeholder domain `https://sakurasangeet.example/`. Once you pick
   a real domain, find-and-replace that placeholder everywhere.
5. **Member photos** — every member currently points to
   `assets/images/member-placeholder.svg` (a generic silhouette icon). Add each
   musician's real photo to `assets/images/` and update their `photo` field in
   `data.js` to point to it.
6. **Member Instagram handles** — pre-filled per member in `data.js`
   (`instagram` field, e.g. `nainysinger`) — confirm these are correct.

## Deploying

This is a plain static site, so it works on any static host:

- **GitHub Pages** — push this folder to a repo, enable Pages on the `main`
  branch (root).
- **Netlify / Vercel** — drag-and-drop this folder, or connect the repo. No
  build command needed (leave build command empty, publish directory = `/`).
- **Any web host** — upload the contents of this folder via FTP/SFTP to your
  hosting provider's public folder.

## After you have a live domain

- Replace the placeholder domain (see above) everywhere.
- Register the site with [Google Search Console](https://search.google.com/search-console)
  and submit `sitemap.xml` so Google indexes it faster.
- Consider adding the site to Google Business Profile if you want to show up in
  local Tokyo search/maps results.
