# Personal academic website — setup guide

This is a plain HTML/CSS site (no build tools, no Jekyll) with 5 pages:
`index.html` (Home), `research.html`, `teaching.html`, `conferences.html`,
`reading-group.html`, all sharing `style.css` and `script.js`.

## 1. Edit the content

Every `[bracketed]` placeholder is something to replace with your own
details — name, students, papers, courses, talks. Each page also has a
yellow "edit-note" box at the top; delete that `<div class="edit-note">…`
line once you're done editing that page.

To add a new entry (e.g. a new student or a new paper), copy one
`<div class="entry">...</div>` block and edit the text inside it — no
other code needs to change.

You can edit the files directly on github.com (click the pencil icon on
any file) or on your computer in any text editor (VS Code recommended).

## 2. Put it on GitHub

1. Create a **new, empty** repository on GitHub named exactly:
   `yourusername.github.io` (replace `yourusername` with your actual
   GitHub username — this exact naming is what makes GitHub Pages serve
   it automatically).
2. Upload these files to the repository:
   - Easiest: on the repo's GitHub page, click **Add file → Upload files**,
     drag in all the files from this folder, and commit.
   - Or with git, from inside this folder:
     ```
     git init
     git remote add origin https://github.com/yourusername/yourusername.github.io.git
     git add .
     git commit -m "Initial site"
     git branch -M main
     git push -u origin main
     ```

## 3. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then Save.
4. Wait about a minute — your site will be live at:
   `https://yourusername.github.io`

## 4. Making future edits

Any time you want to update something (new student, new paper, new talk):
edit the relevant `.html` file (on github.com or locally), commit/push the
change, and the live site updates automatically within a minute or two.

## 5. Adding photos

Photos now have slots on every page — Home, Research, Teaching,
Conferences & Workshops, and Reading Group. The full list of filenames
and exactly which folder each goes in is in `images/README.txt` — open
that file first.

**To add a photo:** upload a file with the exact expected name into the
matching subfolder of `images/` (GitHub: **Add file → Upload files**).
No code editing needed — the site already points at those filenames.

**To add a photo somewhere there isn't already a slot:** `images/README.txt`
also has two ready-to-paste snippets — one for a single photo with a
caption, one for a grid of photos — that you can drop into any `.html`
file, anywhere you like. Just point `src` at any image you've uploaded.
This means you're never limited to the slots already built in.

Keep photos under ~500KB each so the site stays fast — resize/compress
first with a free tool like squoosh.app. Square photos (e.g. 600x600px)
work best for profile/student photos; 4:3 photos (e.g. 800x600px) work
best for galleries.

## 6. Other optional next steps

- Add a custom domain later via **Settings → Pages → Custom domain**.
- Add a CV: drop `cv.pdf` into the folder and point the "cv (pdf)" link
  in `index.html` to `cv.pdf`.
