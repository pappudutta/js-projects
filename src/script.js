// This function is an example of "event delegation" concept.

function allBtnLink() {
  let projectSec = document.getElementsByClassName("project-section");

  console.log(projectSec);
  let arrProjectSection = Array.from(projectSec);
  console.log(arrProjectSection);

  arrProjectSection.forEach(section => {
    section.addEventListener("click", openApp);
  });

  // projectSec[0].addEventListener("click", openApp);

  function openApp(e) {
    let domain =
      window.location.href.split("index.html").join("") + "projects/";
    let linkPathText = e.target.parentElement.querySelector("H2").innerHTML;
    console.log(e);

    // Suggested fixes ----
    // Instead of parentElement use closest
    // handle error
    // on image click shows error
    // error: while clicking on the h1 gets opened stopwach - fix it

    let filePath = linkPathText.split(" ").join("-").toLowerCase();
    let finalURL = domain + filePath + "/index.html";

    window.location.href = finalURL;
  }
}

allBtnLink();
