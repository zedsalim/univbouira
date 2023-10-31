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

  gradesLink.addEventListener("click", function(e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      gradesList.style.display = (gradesList.style.display === "table") ? "none" : "table";
    }
  });
});

  