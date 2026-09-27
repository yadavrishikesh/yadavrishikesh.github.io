# Adding content

Copy-paste recipes for everything on this site. No CSS knowledge needed — paste
a snippet, change the text, done.

You can edit files directly on github.com (click the pencil icon on any file) or
locally in any text editor.

**Jump to:** [Group member](#add-a-group-member) ·
[Publication](#add-a-publication) · [Package or tool](#add-a-package-or-tool) ·
[Course](#add-a-course) · [Talk or workshop](#add-a-talk-or-workshop) ·
[Reading group session](#add-a-reading-group-session) ·
[News item](#add-a-news-item) · [Photo](#add-a-photo) ·
[Whole new section](#add-a-whole-new-section) · [New page](#add-a-new-page)

---

## Add a group member

**File:** `research.html` — inside the `<div class="student-grid">` of either the
PhD or the Masters & BTech section.

```html
<div class="student-card">
  <img class="student-photo" src="assets/images/students/priya.jpg" alt="Priya Sharma">
  <div class="student-info">
    <div class="entry-id">PHD&middot;07</div>
    <p class="entry-title">Priya Sharma</p>
    <p class="entry-meta">PhD, August 2026&ndash;present</p>
    <p class="entry-desc">Working on extreme rainfall modelling in the Western Himalaya.</p>
  </div>
</div>
```

The grid is two cards wide and reflows on its own, so you can have any number of
cards. Update the `group · 06` count in the section heading if you add or remove
one.

---

## Add a publication

**File:** `research.html` — inside the `<div class="catalog">` of "Manuscripts in
Preparation", "Manuscripts Submitted", or "Published Manuscripts".

```html
<div class="entry entry-with-thumb">
  <img class="entry-thumb" src="assets/images/profile.png" alt="Paper title">
  <div class="entry-id">PUB&middot;2026&middot;02</div>
  <div>
    <p class="entry-title">Spatial extremes of monsoon rainfall over India</p>
    <p class="entry-meta">
      Yadav R., Sharma P. &middot; Journal of Environmetrics, 2026
      <span class="tag tag-published">Published</span>
    </p>
    <p class="entry-links">
      <a href="#">pdf</a><a href="#">doi</a><a href="#">code</a>
    </p>
  </div>
</div>
```

Pick the status pill that matches the section:

| Pill                                                  | Use in                    |
| ----------------------------------------------------- | ------------------------- |
| `<span class="tag tag-progress">In prep</span>`        | Manuscripts in Preparation |
| `<span class="tag tag-submitted">Under review</span>`  | Manuscripts Submitted      |
| `<span class="tag tag-published">Published</span>`     | Published Manuscripts      |

Drop the `<p class="entry-links">` line if there is nothing to link to yet.

---

## Add a package or tool

**File:** `research.html` — inside "Packages and Tools Used". Same shape as a
publication, minus the status pill:

```html
<div class="entry entry-with-thumb">
  <img class="entry-thumb" src="assets/images/profile.png" alt="package name">
  <div class="entry-id">PKG&middot;04</div>
  <div>
    <p class="entry-title">spatialExtremes</p>
    <p class="entry-meta">R package &middot; maintained by the group</p>
    <p class="entry-desc">Fitting max-stable processes to gridded climate data.</p>
    <p class="entry-links"><a href="#">docs</a><a href="#">code</a></p>
  </div>
</div>
```

---

## Add a course

**File:** `teaching.html` — inside the `<div class="catalog">` for that semester.

```html
<div class="entry entry-with-thumb">
  <img class="entry-thumb" src="assets/images/courses/ma511.jpg" alt="MA511 Statistical Inference">
  <div class="entry-id">CRS&middot;04</div>
  <div>
    <p class="entry-title">MA511 &mdash; Statistical Inference</p>
    <p class="entry-meta">PG &middot; 3 credits</p>
    <p class="entry-desc">Estimation, hypothesis testing, and asymptotics.</p>
    <p class="entry-links"><a href="#">syllabus</a><a href="#">slides</a></p>
  </div>
</div>
```

**For a new semester**, copy an entire `<section class="block">` and change its
`<h2>`. Keep semesters newest-first.

---

## Add a talk or workshop

**File:** `conferences.html` — inside the `<div class="catalog">` of the right
section (talks given / workshops organized / workshops attended).

```html
<div class="entry entry-with-thumb">
  <img class="entry-thumb" src="assets/images/talks/isi-2026.jpg" alt="Talk title">
  <div class="entry-id">TLK&middot;03</div>
  <div>
    <p class="entry-title">Bayesian hierarchical models for rainfall extremes</p>
    <p class="entry-meta">ISI Annual Conference &middot; Kolkata &middot; March 2026</p>
    <p class="entry-links"><a href="#">slides</a></p>
  </div>
</div>
```

---

## Add a reading group session

**File:** `reading-group.html` — inside the "Sessions" catalog, newest first.

```html
<div class="entry entry-with-thumb">
  <img class="entry-thumb" src="assets/images/profile.png" alt="Paper title">
  <div class="entry-id">RDG&middot;03</div>
  <div>
    <p class="entry-title">Coles (2001), Chapter 3 — Extremes of Stationary Sequences</p>
    <p class="entry-meta">12 March 2026 &middot; Presented by Priya</p>
    <p class="entry-links"><a href="#">paper</a><a href="#">notes</a></p>
  </div>
</div>
```

---

## Add a news item

**File:** `index.html` — top of the "Recent updates" catalog (newest first).
This is the plain `.entry` with no photo:

```html
<div class="entry">
  <div class="entry-id">2026&middot;09</div>
  <div>
    <p class="entry-title">New preprint on spatial extremes</p>
    <p class="entry-desc">Joint work with the climate group at IIT Bombay.</p>
  </div>
</div>
```

---

## Add a photo

Full details on filenames and sizes: [IMAGES.md](IMAGES.md).

**One photo with a caption** — paste anywhere inside `<main>`:

```html
<figure class="photo-frame">
  <img src="assets/images/group-2026.jpg" alt="The research group outside the department">
  <figcaption>The group, Winter 2026</figcaption>
</figure>
```

Add `class="photo-frame small"` instead for a narrower version.

**A grid of photos:**

```html
<div class="gallery">
  <figure>
    <img src="assets/images/moments/retreat.jpg" alt="Group retreat at Prashar Lake">
    <figcaption>Group retreat, Prashar Lake</figcaption>
  </figure>
  <figure>
    <img src="assets/images/moments/seminar.jpg" alt="Seminar in the department">
    <figcaption>Department seminar, March 2026</figcaption>
  </figure>
</div>
```

Add as many `<figure>` blocks as you like — the grid works out its own columns.

---

## Add a whole new section

Every titled section of every page is a `.block`. The skeleton:

```html
<section class="block">
  <div class="block-head">
    <h2>Section title</h2>
    <span class="block-count">optional small label</span>
  </div>

  <p class="block-intro">Optional paragraph under the title.</p>

  <div class="catalog">
    <!-- .entry blocks go here -->
  </div>
</section>
```

The `<span class="block-count">` and `<p class="block-intro">` are both optional.
For a section that is just prose, replace the `.catalog` with:

```html
<p class="block-text">Your paragraph.</p>
```

---

## Add a new page

1. Copy an existing inner page (`teaching.html` is the shortest) to
   `newpage.html`.
2. Update the `<title>` and `<meta name="description">`.
3. Replace everything between `<main>` and `</main>`.
4. Add the page to the nav **in all six HTML files** (the five pages plus
   `404.html`):

   ```html
   <a href="newpage.html">New Page</a>
   ```

5. On the new page only, give its own nav link `aria-current="page"`.

---

## Things to avoid

- **Don't add `style="..."` to an element.** Add a class in the matching CSS file
  instead — see [STRUCTURE.md](STRUCTURE.md).
- **Don't hard-code a colour** in a component. Use a `var(--token)` from
  `assets/css/base/tokens.css`, or add a new token there first.
- **Don't leave an `<img>` without a meaningful `alt`.**
- **Don't forget the other four pages** when you edit the header or footer.
