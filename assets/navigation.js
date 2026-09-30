(function () {
  "use strict";

  document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {
    var trigger = dropdown.querySelector("summary");

    // Native details provides click, touch, Enter, and Space support.
    dropdown.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && dropdown.open) {
        event.preventDefault();
        dropdown.open = false;
        trigger.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) dropdown.open = false;
    });

    dropdown.addEventListener("focusout", function (event) {
      if (!dropdown.contains(event.relatedTarget)) dropdown.open = false;
    });
  });
}());
