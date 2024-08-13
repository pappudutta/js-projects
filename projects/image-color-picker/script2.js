let fileInput = document.getElementById("file");
let pickColor = document.getElementById("pick-color");

let error = document.getElementById("error");
let result = document.getElementById("result");

let hexValRef = document.getElementById("hex-val-ref");
let rgbValRef = document.getElementById("rgb-val-ref");

let pickedColorRef = document.getElementById("picked-color-ref");
let customAllert = document.getElementById("custom-alert");

let eyeDropper;

fileInput.onchange = () => {
  reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);

  reader.onload = () => {
    image.setAttribute("src", reader.result);
  };
};

let colorSelector = async () => {
  try {
    eyeDropper = new EyeDropper();
    const result = await eyeDropper.open();
    let hexVal;
    if (result.sRGBHex) {
      console.log(result.sRGBHex);
    }
  } catch (e) {
    console.log(e);
  }
};

pickColor.addEventListener("click", colorSelector);
