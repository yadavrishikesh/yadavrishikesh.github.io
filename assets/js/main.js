/* ============================================================
   MAIN.JS — the only script on the site
   ------------------------------------------------------------
   Loaded by every page with:

     <script src="assets/js/main.js" defer></script>

   It does three small things, all optional enhancements: if
   JavaScript fails to load, every page still renders and every
   link still works.

     1. Mobile menu   — the "Menu" button opens/closes the nav.
     2. Active link   — marks the current page in the nav.
     3. Subnav        — highlights the "On this page" link in view.

   No dependencies, no build step. Plain ES5-compatible syntax
   so it runs anywhere without transpiling.
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     1. MOBILE MENU
     The nav is hidden by CSS below 960px. Clicking "Menu"
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

  /* ----------------------------------------------------------
     3. SUBNAV HIGHLIGHT
     On pages with a .subnav ("On this page" jump links), marks
     the link whose section is currently at the top of the view.
     ---------------------------------------------------------- */
  function initSubnav() {
    var nav = document.querySelector(".subnav");
    if (!nav) {
      return;
    }
    var links = nav.querySelectorAll('a[href^="#"]');
    var pairs = [];
    for (var i = 0; i < links.length; i++) {
      var sec = document.getElementById(links[i].getAttribute("href").slice(1));
      if (sec) {
        pairs.push({ link: links[i], sec: sec });
      }
    }
    // Keep the bar tucked right under the sticky site header,
    // whose height changes on small screens.
    var header = document.querySelector(".site-header");
    function placeBar() {
      if (header) {
        nav.style.top = header.offsetHeight + "px";
      }
    }
    var last = null;
    function update() {
      var current = null;
      for (var j = 0; j < pairs.length; j++) {
        if (pairs[j].sec.getBoundingClientRect().top <= 150) {
          current = pairs[j];
        }
      }
      // At the very bottom, the last section counts as current.
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4 && pairs.length) {
        current = pairs[pairs.length - 1];
      }
      for (var k = 0; k < pairs.length; k++) {
        pairs[k].link.classList.toggle("is-active", pairs[k] === current);
      }
      // On phones the bar scrolls sideways: keep the active link visible.
      if (current && current !== last && nav.scrollWidth > nav.clientWidth) {
        nav.scrollLeft = current.link.offsetLeft - 16;
      }
      last = current;
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", function () {
      placeBar();
      update();
    });
    placeBar();
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initActiveNavLink();
    initSubnav();
  });
})();
