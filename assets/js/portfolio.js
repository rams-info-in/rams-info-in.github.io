(function () {
  "use strict";

  var dialog = document.getElementById("site-dialog");

  if (dialog) {
    var dialogTitle = document.getElementById("dialog-title");
    var dialogKicker = document.getElementById("dialog-kicker");
    var dialogCopy = document.getElementById("dialog-copy");
    var dialogLink = document.getElementById("dialog-link");

    document.querySelectorAll("[data-open-dialog]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        dialogTitle.textContent = trigger.dataset.dialogTitle || "Research note";
        dialogKicker.textContent = trigger.dataset.dialogKicker || "Research note";
        dialogCopy.textContent = trigger.dataset.dialogCopy || "";
        dialogLink.href = trigger.dataset.dialogHref || dialogLink.href;
        dialog.showModal();
      });
    });

    dialogLink.addEventListener("click", function () { dialog.close(); });
    document.querySelectorAll("[data-dialog-close]").forEach(function (button) {
      button.addEventListener("click", function () {
        dialog.close();
      });
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  var filterButtons = Array.prototype.slice.call(
    document.querySelectorAll("[data-project-filter]")
  );
  var projectCards = Array.prototype.slice.call(
    document.querySelectorAll("[data-project-card]")
  );

  if (filterButtons.length && projectCards.length) {
    var count = document.getElementById("project-count");
    var emptyState = document.querySelector(".empty-state");

    function applyFilter(filter) {
      var visible = 0;

      projectCards.forEach(function (card) {
        var show = filter === "all" || card.dataset.category === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });

      filterButtons.forEach(function (button) {
        var selected = button.dataset.projectFilter === filter;
        button.setAttribute("aria-pressed", String(selected));
        button.classList.toggle("is-active", selected);
      });

      if (count) count.textContent = String(visible);
      if (emptyState) emptyState.hidden = visible !== 0;
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        applyFilter(button.dataset.projectFilter);
      });
    });

    var requestedFilter = new URLSearchParams(window.location.search).get("filter");
    var validFilter = filterButtons.some(function (button) {
      return button.dataset.projectFilter === requestedFilter;
    });
    applyFilter(validFilter ? requestedFilter : "all");
  }
}());