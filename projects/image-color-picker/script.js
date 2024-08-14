// Initial references to DOM elements
let pickColor = document.getElementById("pick-color");
let error = document.getElementById("error");
let fileInput = document.getElementById("file");
let image = document.getElementById("image");

let hexValRef = document.getElementById("hex-val-ref");
let rgbValRef = document.getElementById("rgb-val-ref");

let customAlert = document.getElementById("custom-alert");
let pickedColorRef = document.getElementById("picked-color-ref");

let eyeDropper;

window.onload = () => {
  if ("EyeDropper" in window) {
    pickColor.classList.remove("hide");
    eyeDropper = new EyeDropper();
  } else {
    error.classList.remove("hide");
    error.innerHTML = "Your Browser doesn't support Eyedropper API";
    pickColor.classList.add("hide");
  }
};

const colorSelector = async () => {
  const color = await eyeDropper
    .open()
    .then(colorValue => {
      error.classList.add("hide"); // hide error message if any
      // get the hex color code
      let hexValue = colorValue.sRGBHex;

      // Convert Hex Value To RGB
      let rgbArr = [];
      for (let i = 1; i < hexValue.length; i += 2) {
        rgbArr.push(parseInt(hexValue[i] + hexValue[i] + hexValue[i + 1], 16));
      }
      let rgbValue = "rgb(" + rgbArr + ")";

      // Display color information
      result.style.display = "grid";
      hexValRef.value = hexValue;
      rgbValRef.value = rgbValue;
      pickedColorRef.style.backgroundColor = hexValue;
    })
    .catch(err => {
      error.classList.remove("hide");
      // If user closes the eye dropper using escape key
      if (err.toString().includes("AbortError")) {
        error.innerText = "";
      } else {
        error.innerText = err;
      }
    });
};

// Event listener for pickColor button click
pickColor.addEventListener("click", colorSelector);

// Allow user to chose image of there own choice

fileInput.onchange = () => {
  result.style.display = "none"; //Hide previous result
  let reader = new FileReader(); // Create a file reader object
  reader.readAsDataURL(fileInput.files[0]); //Read the concepts of the file

  reader.onload = () => {
    image.setAttribute("src", reader.result);
  };
};

// function to copy the color code
let copy = textId => {
  document.getElementById(textId).select();
  document.execCommand("copy"); // depricated

  //   display alert
  customAlert.style.transform = "scale(1)";
  setTimeout(() => {
    customAlert.style.transform = "scale(0)";
  }, 1000);
};
