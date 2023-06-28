document.addEventListener("DOMContentLoaded", function() {
    var gradesLink = document.querySelector("#footer .grades-link");
    var gradesList = gradesLink.querySelector(".grades-list");
    var gradeItems = gradesList.querySelectorAll("table tr:not(:first-child)");
  
    gradesList.style.display = "none";
  
    gradesLink.addEventListener("mouseover", function() {
      gradesList.style.display = "table";
    });
  
    gradesLink.addEventListener("mouseout", function() {
      gradesList.style.display = "none";
    });
  });
  