let fileInput = document.getElementById("file");
let pickColor = document.getElementById("pick-color");

let error = document.getElementById("error");
let result = document.getElementById("result");

let hexValRef = document.getElementById("hex-val-ref");
let rgbValRef = document.getElementById("rgb-val-ref");

let pickedColorRef = document.getElementById("picked-color-ref");
let customAlert = document.getElementById("custom-alert");

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
    const color = await eyeDropper.open();

    let hexVal = color.sRGBHex;

    let rgbArr = [];

    for (let i = 1; i < hexVal.length; i += 2) {
      rgbArr.push(parseInt(hexVal[i] + hexVal[i + 1], 16));
    }

    let rbgVal = "rgb(" + rgbArr + ")";

    result.classList.remove("hide");
    hexValRef.value = hexVal;
    rgbValRef.value = rbgVal;
    pickedColorRef.style.backgroundColor = hexVal;
  } catch (err) {
    error.classList.remove("hide");
    error.innerText = err;
  }
};

pickColor.addEventListener("click", colorSelector);

let copy = textId => {
  let textToCopy = document.getElementById(textId).value;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      error.classList.remove("hide");
      error.innerText = textToCopy + "copied!";
      setTimeout(() => {
        error.classList.add("hide");
      }, 1000);
    })
    .catch(err => {
      error.classList.remove("hide");
      error.innerText = "not able to copy";
      setTimeout(() => {
        error.classList.add("hide");
      }, 1000);
    });
  console.log(textToCopy);
};
