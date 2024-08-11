// This function is an example of "event delegation" concept.

function allBtnLink() {
  document.body.addEventListener("click", openApp);

  function openApp(e) {
    let domain = window.location.href.split("index.html") + "projects/";

    const from = e.target.parentElement.querySelector("H2");

    // Suggested fixes ----
    // Instead of parentElement use closest
    // handle error
    // on image click shows error

    let filePath = from.innerHTML.split(" ").join("-").toLowerCase();

    let finalURL =
      domain.toString().split(",").join("") + filePath + "/index.html";

    window.location.href = finalURL;
  }
}

allBtnLink();
