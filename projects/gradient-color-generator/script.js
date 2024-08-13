let displayColorCode = document.getElementById("code-text");
let displayGradient = document.getElementById("gradient");
let gradientDirection = document.getElementsByName("toDirection")[0];

let firstInputColor = document.getElementsByClassName("color-box1");
let secondInputColor = document.getElementsByClassName("color-box2");

function currentSetting() {
  let cssProp = window
    .getComputedStyle(displayGradient, null)
    .getPropertyValue("background-image");
  displayColorCode.textContent = cssProp;
}

function returnColor() {
  displayGradient.style.background =
    "linear-gradient(" +
    gradientDirection.value +
    "," +
    firstInputColor.value +
    "," +
    secondInputColor.value;

  //   console.log(gradientDirection.value);
  // "linear-gradient(to right, #fffaaa, #734c8f)";
  currentSetting();
}
document.querySelector("select[name='toDirection']").onchange = returnColor;
// firstInputColor.addEventListener("input", returnColor);
// secondInputColor.addEventListener("input", returnColor);
console.log(firstInputColor);
