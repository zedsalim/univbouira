document.addEventListener("DOMContentLoaded", function() {
  var gradesLink = document.querySelector("#footer .grades-link");
  var gradesList = gradesLink.querySelector(".grades-list");
  var gradeItems = gradesList.querySelectorAll("table tr:not(:first-child");

  gradesList.style.display = "none";

  gradesLink.addEventListener("mouseover", function() {
    if (window.innerWidth >= 768) {
      gradesList.style.display = "table";
    }
  });

  gradesLink.addEventListener("mouseout", function() {
    if (window.innerWidth >= 768) {
      gradesList.style.display = "none";
    }
  });

  gradesLink.addEventListener("click", function(e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      if (gradesList.style.display === "table") {
        gradesList.style.display = "none";
      } else {
        gradesList.style.display = "table";
      }
    }
  });

  document.addEventListener("click", function(e) {
    if (window.innerWidth < 768 && e.target !== gradesLink && !gradesLink.contains(e.target) && !gradesList.contains(e.target)) {
      gradesList.style.display = "none";
    }
  });

  gradeItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  });
});
