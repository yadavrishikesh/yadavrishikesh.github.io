# Rishikesh Yadav — academic website

Personal academic site for Rishikesh Yadav (Assistant Professor, School of
Mathematical and Statistical Sciences, IIT Mandi), published with GitHub Pages
at <https://yadavrishikesh.github.io>.

Plain HTML, CSS and JavaScript. **No build step, no framework, no dependencies.**
What is in the repository is exactly what the browser receives.

---

## Run it locally

Any static file server works. The simplest option, with Python already installed:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

> Opening the `.html` files directly with `file://` also mostly works, but a
> local server is closer to how GitHub Pages actually serves the site.

There is nothing to install, compile, or watch. Edit a file, refresh the browser.

---

## Project layout

```
.
├── index.html                  Home
├── research.html               Group members, software, manuscripts
├── teaching.html               Courses by semester
├── conferences.html            Talks and workshops
├── reading-group.html          Reading group sessions
├── 404.html                    Shown for unknown URLs
│
├── assets/
│   ├── css/
│   │   ├── main.css            The only stylesheet the pages link to
│   │   ├── base/               Tokens, reset, base typography
│   │   ├── layout/             Container, header, footer, section blocks
│   │   ├── components/         Cards, galleries, tags, hero, ...
│   │   └── pages/              Rules specific to one kind of page
│   ├── js/
│   │   └── main.js             Mobile menu + active nav link
│   └── images/                 All photos
│
├── docs/
│   ├── STRUCTURE.md            How the code is organised, and why
│   ├── CONTENT-GUIDE.md        Copy-paste snippets for adding content
│   └── IMAGES.md               Where photos go and what size they should be
│
├── .editorconfig               Shared indentation / whitespace settings
└── .gitignore
```

---

## Where do I make a change?

| I want to…                                     | Edit                                             |
| ---------------------------------------------- | ------------------------------------------------ |
| Add a student, paper, course, talk, or photo    | The relevant `.html` file — see [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) |
| Change a colour, font, or spacing               | `assets/css/base/tokens.css`                      |
| Change how a card or gallery looks              | The matching file in `assets/css/components/`     |
| Change the header, footer, or page width        | `assets/css/layout/`                              |
| Change the nav links or the name in the header  | Every `.html` file (the header is duplicated — see below) |
| Change site behaviour                           | `assets/js/main.js`                               |

New to this repository? Read [docs/STRUCTURE.md](docs/STRUCTURE.md) first —
it is short, and explains the handful of conventions the whole site follows.

---

## The one thing to know before editing

There is no templating engine, so **the header and footer are copy-pasted into
all five pages**. If you change the navigation, the name in the header, or the
footer, you must make the same change in every `.html` file.

They are identical today. A quick way to spot drift:

```bash
# Prints the nav block of each page — they should all look the same.
grep -A 6 'id="primary-nav"' *.html
```

This is the accepted trade-off for having no build step. See
[docs/STRUCTURE.md](docs/STRUCTURE.md) for the reasoning and the alternatives
if you ever want to change it.

---

## Deploying

The site deploys itself. GitHub Pages serves the `main` branch from the
repository root, so:

```bash
git add .
git commit -m "Describe what changed"
git push
```

The live site updates within a minute or two. There is no build to run and no
artifact to upload.

If Pages is ever switched off, re-enable it under **Settings → Pages →
Build and deployment → Deploy from a branch → `main` / `(root)`**.

---

## Conventions worth keeping

- **No inline `style="..."` attributes.** If a page needs a one-off look, add a
  class in the appropriate CSS file instead.
- **No hard-coded colours or fonts** outside `assets/css/base/tokens.css`.
  Everything else references a `var(--token)`.
- **Every `<img>` has a real `alt`** describing what the photo shows (an empty
  `alt=""` is correct only for purely decorative images).
- **Placeholder text is wrapped in `[square brackets]`** so unfinished content
  is easy to find: `grep -rn "\[" *.html`.
- The dashed yellow "edit note" box at the top of a page is a reminder that the
  page still contains placeholders. Delete the `<div class="edit-note">` line
  once that page holds real content.
