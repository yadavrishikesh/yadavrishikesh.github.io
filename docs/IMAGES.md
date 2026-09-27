# Photos

All images live under `assets/images/`. Nothing else on the site loads an image
from anywhere else.

```
assets/images/
├── profile.png          The portrait on the home page
├── students/            Group member photos
├── courses/             Course thumbnails (teaching.html)
├── talks/               Conference and workshop photos
├── moments/             Home page gallery
└── reading-group/       Reading group photos
```

---

## Current state

**Every image slot on the site currently points at `assets/images/profile.png`.**
It is standing in as a placeholder so that no page shows a broken image.

To fill a slot for real: upload your photo into the right folder, then change
that one `src` in the HTML to point at it. The folders above are empty except
for `students/`, which already holds a few real photos.

---

## Sizes

| Where it appears                        | Shape     | Good size   |
| --------------------------------------- | --------- | ----------- |
| Home page portrait (`.hero-photo`)      | Square    | 600 × 600   |
| Group member card (`.student-photo`)    | Square    | 600 × 600   |
| Round avatar in a list (`.avatar-sm`)   | Square    | 200 × 200   |
| Card thumbnail (`.entry-thumb`)         | Landscape | 400 × 260   |
| Gallery photo (`.gallery img`)          | 4:3       | 800 × 600   |
| Full-width photo (`.photo-frame`)       | 4:3       | 1200 × 900  |

The CSS crops every image to fit its slot (`object-fit: cover`), so photos of
slightly different sizes still line up. Getting the *shape* roughly right
matters more than the exact pixels — a portrait photo in a landscape slot will
be cropped top and bottom.

---

## Keep files small

Aim for **under 500 KB per photo**. There is no image pipeline in this project;
whatever you commit is what visitors download.

<https://squoosh.app> is a free browser tool for resizing and compressing —
drag the photo in, set the width, download the result.

Use `.jpg` for photographs. Use `.png` only when you need transparency (logos,
diagrams); PNG photographs are typically five to ten times larger for no visible
benefit.

> `assets/images/profile.png` is currently around 2.8 MB, which is large for a
> web page. Converting it to a resized JPEG is an easy win whenever you get to
> it — remember to update the `src` in every page that uses it.

---

## Naming

Lowercase, hyphens instead of spaces, no accents or capitals:

```
good:  priya-sharma.jpg   isi-conference-2026.jpg   group-2026.jpg
bad:   Priya Sharma.JPG   IMG_4821.jpeg             photo (1).png
```

Spaces and capitals in filenames are a common source of images that work locally
but 404 on the live site, because GitHub Pages is case-sensitive and spaces have
to be URL-encoded.

---

## Adding a photo to a page

See [CONTENT-GUIDE.md](CONTENT-GUIDE.md#add-a-photo) for the two snippets —
a single captioned photo, and a gallery grid. Both can be pasted anywhere inside
`<main>` on any page.

---

## Alt text

Every `<img>` needs an `alt` describing what the photo shows, for screen readers
and for when an image fails to load:

```html
<img src="assets/images/students/priya-sharma.jpg" alt="Priya Sharma">
<img src="assets/images/moments/retreat.jpg" alt="The group at Prashar Lake">
```

An empty `alt=""` is correct only for images that carry no information — a
decorative divider, for instance. It is not a shortcut for "I could not think of
anything".
