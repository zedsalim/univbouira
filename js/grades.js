document.addEventListener("DOMContentLoaded", function() {
  var gradesLink = document.querySelector("#footer .grades-link");
  var gradesList = gradesLink.querySelector(".grades-list");
  var gradeItems = gradesList.querySelectorAll("table tr:not(:first-child");

  gradesList.style.display = "none";
  var isMobile = window.innerWidth < 768;

  gradesLink.addEventListener("mouseover", function() {
    if (!isMobile) {
      gradesList.style.display = "table";
    }
  });

  gradesLink.addEventListener("mouseout", function() {
    if (!isMobile) {
      gradesList.style.display = "none";
    }
  });

  gradesLink.addEventListener("click", function(e) {
    if (isMobile) {
      e.preventDefault();
      if (gradesList.style.display === "table") {
        gradesList.style.display = "none";
      } else {
        gradesList.style.display = "table";
      }
    }
  });

  document.addEventListener("click", function(e) {
    if (isMobile && e.target !== gradesLink && !gradesLink.contains(e.target) && !gradesList.contains(e.target)) {
      gradesList.style.display = "none";
    }
  });

  gradeItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
      if (isMobile) {
        e.stopPropagation();
      }
    });
  });

  window.addEventListener("scroll", function() {
    if (isMobile) {
      gradesList.style.display = "none";
    }
  });
});
