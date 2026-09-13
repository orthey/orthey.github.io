(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var preference = window.matchMedia("(prefers-color-scheme: dark)");

  function savedTheme() {
    try {
      var saved = localStorage.getItem("theme");
      return saved === "light" || saved === "dark" ? saved : null;
    } catch (error) {
      return null;
    }
  }

  function systemTheme() {
    return preference.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (!toggle) return;

    var dark = theme === "dark";
    var label = dark ? "Switch to light mode" : "Switch to dark mode";
    toggle.setAttribute("aria-pressed", String(dark));
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
  }

  applyTheme(savedTheme() || systemTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch (error) {
        // The selected theme still applies for the current page.
      }
      applyTheme(next);
    });
  }

  function followSystem(event) {
    if (!savedTheme()) applyTheme(event.matches ? "dark" : "light");
  }

  if (typeof preference.addEventListener === "function") {
    preference.addEventListener("change", followSystem);
  } else if (typeof preference.addListener === "function") {
    preference.addListener(followSystem);
  }
}());
