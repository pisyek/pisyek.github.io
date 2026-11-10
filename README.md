# pisyek.github.io

Personal landing page for **Ts. Mohd Hafiz Suhaimi** — senior software engineer, technical trainer and founder of Pisyek Studios.

The page is a single, static HTML document. No frameworks, no build step, no tracking.

## Stack

- `index.html` — semantic single page, meta tags and `Person` JSON-LD
- `style.css` — design tokens, layout, components, responsive and print styles
- `script.js` — navigation, mobile menu, scrollspy, scroll reveal and copy-email
- `img/` — portrait (WebP + PNG fallback), Open Graph card, favicon and touch icon
- `profile-linkedin.pdf` — downloadable CV, linked from the footer

## Local preview

Open `index.html` directly, or serve the folder:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Editing notes

- Colours and type live in the `:root` custom properties at the top of `style.css`.
- Content is written by hand in `index.html`; there is no CMS or templating.
- All motion is disabled under `prefers-reduced-motion`. The page is light-theme only by design.
- `design.md` holds the original design and build plan.

## Deploy

Push to the `main` branch of the `pisyek.github.io` repository. GitHub Pages serves it at <https://pisyek.github.io/>.
