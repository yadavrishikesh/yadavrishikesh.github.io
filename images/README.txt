============================================================
 WHERE EVERY PHOTO GOES (exact filenames the site expects)
============================================================

HOME PAGE (index.html)
  images/profile.jpg                    your photo, top of page
  images/moments/moment-01.jpg          gallery photo 1
  images/moments/moment-02.jpg          gallery photo 2
  images/moments/moment-03.jpg          gallery photo 3
  images/moments/moment-04.jpg          gallery photo 4

RESEARCH PAGE (research.html)
  images/group-photo.jpg                optional group photo, top of page
  images/students/phd-01.jpg            PHD·01 card photo
  images/students/phd-02.jpg            PHD·02 card photo
  images/students/msc-01.jpg            MSC·01 card photo
  images/students/btp-01.jpg            BTP·01 card photo
  images/students/btp-02.jpg            BTP·02 card photo
  images/students/alumni-01.jpg         Alumni row 1 (small circle)
  images/students/alumni-02.jpg         Alumni row 2
  images/students/alumni-03.jpg         Alumni row 3

TEACHING PAGE (teaching.html)
  images/classroom.jpg                  optional photo near the top
  images/courses/crs-01.jpg             CRS·01 card thumbnail
  images/courses/crs-02.jpg             CRS·02 card thumbnail
  images/courses/crs-03.jpg             CRS·03 card thumbnail

CONFERENCES & WORKSHOPS PAGE (conferences.html)
  images/talks/talk-01.jpg              gallery photo 1
  images/talks/talk-02.jpg              gallery photo 2
  images/talks/talk-03.jpg              gallery photo 3

READING GROUP PAGE (reading-group.html)
  images/reading-group/cover.jpg              optional photo near the top
  images/reading-group/session-01.jpg         gallery photo 1
  images/reading-group/session-02.jpg         gallery photo 2
  images/reading-group/session-03.jpg         gallery photo 3

To fill any slot: just upload a photo with that exact name into that
exact folder (GitHub: Add file -> Upload files). No code editing needed.
If a slot has no photo yet, the browser just shows a blank grey box —
harmless, and it fixes itself the moment you upload the file.

============================================================
 ADDING A PHOTO SOMEWHERE THERE ISN'T A SLOT YET
============================================================

You are NOT limited to the slots above. To put a photo literally
anywhere on any page, paste one of these two snippets directly into
the .html file, anywhere between <main> and </main>, and point it at
any image you've uploaded:

  1) A SINGLE PHOTO with a caption:

     <figure class="photo-frame">
       <img src="images/your-photo.jpg" alt="Description">
       <figcaption>Your caption here</figcaption>
     </figure>

     (Add class="photo-frame small" instead if you want it narrower
     rather than full-width.)

  2) A GRID OF PHOTOS (as many <figure> blocks as you like):

     <div class="gallery">
       <figure>
         <img src="images/your-photo-1.jpg" alt="Description">
         <figcaption>Caption 1</figcaption>
       </figure>
       <figure>
         <img src="images/your-photo-2.jpg" alt="Description">
         <figcaption>Caption 2</figcaption>
       </figure>
     </div>

Both snippets already have all their styling defined in style.css —
just change the src, alt, and figcaption text. You can use any image
filename/folder you like as long as the src path matches where you
uploaded it.

============================================================
 GENERAL TIPS
============================================================
- Keep each photo under ~500KB (squoosh.app is a free tool to compress).
- Square photos (~600x600px) for profile/student/avatar spots.
- Landscape (~400x260px) for course thumbnails.
- 4:3 (~800x600px) for galleries and full-width photo-frames.
- .jpg for photos; .png only if you need transparency.
