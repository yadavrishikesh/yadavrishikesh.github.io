/* ============================================================
   MAIN.JS — the only script on the site
   ------------------------------------------------------------
   Loaded by every page with:

     <script src="assets/js/main.js" defer></script>

   It does two small things, both optional enhancements: if
   JavaScript fails to load, every page still renders and every
   link still works.

     1. Mobile menu   — the "Menu" button opens/closes the nav.
     2. Active link   — marks the current page in the nav.

   No dependencies, no build step. Plain ES5-compatible syntax
   so it runs anywhere without transpiling.
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     1. MOBILE MENU
     The nav is hidden by CSS below 720px. Clicking "Menu"
     toggles the .open class, which reveals it. aria-expanded is
     kept in sync so screen readers announce the state.
     ---------------------------------------------------------- */
  function initMobileMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");

    if (!toggle || !nav) {
      return; // Page has no nav — nothing to do.
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ----------------------------------------------------------
     2. ACTIVE NAV LINK
     Each page's HTML already hard-codes aria-current="page" on
     its own nav link, so the highlight works without JS.

     This function re-derives it from the URL as a safety net:
     if someone copies a page and forgets to move the attribute,
     the nav still highlights the right link instead of lying.
     ---------------------------------------------------------- */
  function initActiveNavLink() {
    var nav = document.getElementById("primary-nav");
    if (!nav) {
      return;
    }

    // "/research.html" -> "research.html"; "/" -> "index.html"
    var current = window.location.pathname.split("/").pop() || "index.html";

    var links = nav.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (href === current) {
        links[i].setAttribute("aria-current", "page");
      } else {
        links[i].removeAttribute("aria-current");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initActiveNavLink();
  });
})();
