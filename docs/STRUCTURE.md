# How this site is put together

Read this once and you will know where everything lives. It takes five minutes.

---

## 1. The big picture

Five HTML pages, one stylesheet entry point, one script, one images folder.
No build step: the files in this repository are byte-for-byte what a visitor's
browser downloads.

```
index.html  research.html  teaching.html  conferences.html  reading-group.html
        │
        │  each page links exactly two assets
        ▼
assets/css/main.css  ──@import──▶  base/ → layout/ → components/ → pages/
assets/js/main.js
```

Every page has the same three parts:

```html
<header class="site-header"> ... </header>   <!-- identical everywhere -->
<main>                       ... </main>     <!-- the only part that differs -->
<footer class="site-footer"> ... </footer>   <!-- identical everywhere -->
```

---

## 2. The CSS

`assets/css/main.css` contains no styles of its own. It is a table of contents
that `@import`s the real files in a deliberate order:

| Folder        | Holds                                        | Examples                       |
| ------------- | -------------------------------------------- | ------------------------------ |
| `base/`       | Variables, reset, default type               | `tokens.css`, `reset.css`      |
| `layout/`     | The page frame                               | `site-header.css`, `block.css` |
| `components/` | Reusable pieces that appear on several pages | `entry.css`, `gallery.css`     |
| `pages/`      | Rules that only apply to one kind of page    | `page-head.css`                |

**Order matters.** Later files can override earlier ones. Keep new imports in
the right group, and keep every `@import` at the very top of `main.css` (the CSS
spec requires it — imports after a rule are silently ignored).

### The one rule that keeps this tidy

`assets/css/base/tokens.css` is the single source of truth for every colour,
font, spacing step and radius on the site. Component files never hard-code a
colour; they reference `var(--pine)`, `var(--space-md)`, and so on.

So: to restyle the site, edit `tokens.css`. To restyle one component, edit that
component's file. You should never need to hunt through several files to change
one colour.

### Adding a new stylesheet

1. Create the file in the folder it belongs to (usually `components/`).
2. Add one `@import` line to `main.css`, in the matching group.

That is the whole process. Nothing else references it.

### Why `@import` and not a bundler?

`@import` makes the browser fetch the files one after another, which is slightly
slower than one combined file. For a site of this size that costs a few
milliseconds, and it buys a repository anyone can edit on github.com without
installing Node. If the site ever grows enough to matter, concatenate the files
at deploy time — no HTML would need to change.

---

## 3. The JavaScript

`assets/js/main.js` is the only script, loaded with `defer` on every page. It
does two small things, both of which are enhancements: **if the script fails to
load, every page still renders correctly and every link still works.**

1. **Mobile menu** — the "Menu" button toggles `.open` on the nav below 720px.
2. **Active nav link** — re-derives `aria-current="page"` from the URL, as a
   safety net in case someone copies a page and forgets to move the attribute.

If you add behaviour, add a named `init...()` function and call it from the
`DOMContentLoaded` listener at the bottom, following the existing pattern.

---

## 4. The building blocks

Almost every piece of content on the site is one of four things. Each has its
own CSS file with copy-paste markup in the comment at the top.

| Block           | CSS file                            | Used for                              |
| --------------- | ----------------------------------- | ------------------------------------- |
| `.block`        | `layout/block.css`                  | One titled section of a page          |
| `.entry`        | `components/entry.css`              | A paper, course, talk, tool, news item |
| `.student-card` | `components/student-card.css`       | A group member, in a 2-column grid    |
| `.gallery`      | `components/gallery.css`            | A grid of captioned photos            |

`.entry` has two variants: `.entry-with-thumb` (landscape thumbnail, used for
things) and `.entry-with-photo` (round portrait, used for people).

Ready-to-paste snippets for all of these are in
[CONTENT-GUIDE.md](CONTENT-GUIDE.md).

---

## 5. Shared header and footer

Because there is no templating engine, the header and footer are **duplicated in
all five HTML files**. Change one, change all five.

Each page's copy differs in exactly one way: its own nav link carries
`aria-current="page"`. That attribute — not a CSS class — is what draws the gold
underline, so the styling and the accessibility hint can never disagree.

To check the copies have not drifted:

```bash
grep -A 6 'id="primary-nav"' *.html
```

**If this ever becomes annoying**, the options, cheapest first:

1. Live with it — five files, changed maybe twice a year.
2. Add a tiny build step (`make`, a shell script, or Eleventy) that assembles
   pages from partials. This adds a toolchain, and github.com's web editor stops
   being enough to make an edit.
3. Inject the header with JavaScript. Not recommended: the nav would be missing
   for search engines and for anyone whose script fails to load.

Option 1 is the current, deliberate choice.

---

## 6. Conventions

- **No inline `style="..."`.** Anything visual belongs in a CSS file.
- **No hard-coded colours or fonts** outside `base/tokens.css`.
- **Placeholders are `[in square brackets]`**, so unfinished content is easy to
  find with `grep -rn "\[" *.html`.
- **Every `<img>` gets a meaningful `alt`.** Empty `alt=""` only for decoration.
- **Comment blocks mark each section** of a page and each CSS file, in the same
  banner style. Keep them updated when you move things around.
- **Indentation is two spaces** in HTML, CSS and JS (enforced by `.editorconfig`).

---

## 7. Before you push

There is no test suite. This quick pass catches almost everything:

```bash
python3 -m http.server 8000     # then click through all five pages
```

Check that:

- The nav highlights the page you are on, on every page.
- The browser console is empty (no 404s for images, CSS or JS).
- The layout survives a narrow window — the nav collapses to a "Menu" button
  under 720px, and cards stack rather than squash.
