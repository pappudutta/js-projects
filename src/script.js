// This function is an example of "event delegation" concept.

function allBtnLink() {
  let projectSec = document.getElementsByClassName("project-section");

  projectSec[0].addEventListener("click", openApp);

  function openApp(e) {
    let domain = window.location.href.split("index.html") + "projects/";

    let linkPathText = e.target.parentElement.querySelector("H2").innerHTML;

    // Suggested fixes ----
    // Instead of parentElement use closest
    // handle error
    // on image click shows error
    // error: while clicking on the h1 gets opened stopwach - fix it

    let filePath = linkPathText.split(" ").join("-").toLowerCase();

    let finalURL = domain + filePath + "/index.html";
    console.log(finalURL);

    // window.location.href = finalURL;
  }
}

allBtnLink();
