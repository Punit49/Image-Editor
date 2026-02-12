const filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
    initialValue: 100
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
    initialValue: 100
  },
  saturate: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
    initialValue: 100
  },
  "hue-rotate": {
    value: 0, // initalvalue
    min: 0,
    max: 360,
    unit: "deg",
    initialValue: 0
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
    initialValue: 0
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
    initialValue: 0
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
    initialValue: 0
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
    initialValue: 100
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
    initialValue: 0
  },
};

const filtersContainer = document.querySelector(".filters");
const resetBtn = document.querySelector("#resetBtn");
const downloadBtn = document.querySelector("#downloadBtn");
let image = null;
let file = null;

function createFIlters(name, value, min, max, unit = "%") {

    const div = document.createElement("div");
    const p = document.createElement("p");
    const input = document.createElement("input");

    div.classList.add("filter");
    p.textContent = name;
    input.type = "range";
    input.min = min;
    input.max = max;
    input.value = value;
    input.classList.add("inputFilter");
    input.dataset.name = name;

    input.addEventListener("input", (event) => {
        filters[name].value = input.value;
        applyFilter();
    })

    div.append(p, input);
    filtersContainer.appendChild(div);
}

for (const key in filters) {
  createFIlters(
    key,
    filters[key].value,
    filters[key].min,
    filters[key].max,
    filters[key].unit,
  );
}

const imageInput = document.querySelector("#image-input");
const imageView = document.querySelector(".image-view");
const imageCanvas = document.querySelector("#canvas");
const canvasCtx = imageCanvas.getContext("2d");

imageInput.addEventListener("change", (event) => {
    file = event.target.files[0];

    let img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = () => {
        if(!(imageView.classList.contains("hidden"))){
            imageView.classList.add("hidden");
            imageCanvas.classList.remove("hidden");
        }
        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img, 0, 0);
    }
})

function applyFilter(name, value, unit){
    if(image){
        canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
        canvasCtx.filter = `
            brightness(${filters.brightness.value}${filters.brightness.unit})
            contrast(${filters.contrast.value}${filters.contrast.unit})
            saturate(${filters.saturate.value}${filters.saturate.unit})
            hue-rotate(${filters["hue-rotate"].value}${filters["hue-rotate"].unit})
            blur(${filters.blur.value}${filters.blur.unit})
            grayscale(${filters.grayscale.value}${filters.grayscale.unit})
            sepia(${filters.sepia.value}${filters.sepia.unit})
            opacity(${filters.opacity.value}${filters.opacity.unit})
            invert(${filters.invert.value}${filters.invert.unit}
        `;
        canvasCtx.drawImage(image, 0, 0);
    } else {
        alert("Select a image before applying filter");
    }
}

resetBtn.addEventListener("click", () => {
    if(image){
        for (const key in filters) {
            filters[key].value = filters[key].initialValue;
        }
        applyFilter();

        document.querySelectorAll(".inputFilter").forEach(element => {
            element.value = filters[element.dataset.name].value;
        })
    }
});

downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = imageCanvas.toDataURL();
    link.click();
})

const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturate: 100,
    "hue-rotate": 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  vintage: {
    brightness: 110,
    contrast: 90,
    saturate: 80,
    "hue-rotate": 350,
    blur: 0,
    grayscale: 10,
    sepia: 40,
    opacity: 100,
    invert: 0
  },

  blackWhite: {
    brightness: 105,
    contrast: 120,
    saturate: 0,
    "hue-rotate": 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  warm: {
    brightness: 110,
    contrast: 105,
    saturate: 120,
    "hue-rotate": 10,
    blur: 0,
    grayscale: 0,
    sepia: 25,
    opacity: 100,
    invert: 0
  },

  cool: {
    brightness: 100,
    contrast: 105,
    saturate: 110,
    "hue-rotate": 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  dramatic: {
    brightness: 95,
    contrast: 140,
    saturate: 120,
    "hue-rotate": 0,
    blur: 0,
    grayscale: 20,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  softFade: {
    brightness: 115,
    contrast: 85,
    saturate: 95,
    "hue-rotate": 0,
    blur: 2,
    grayscale: 5,
    sepia: 15,
    opacity: 100,
    invert: 0
  },

  pop: {
    brightness: 105,
    contrast: 110,
    saturate: 150,
    "hue-rotate": 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  retro: {
    brightness: 105,
    contrast: 95,
    saturate: 85,
    "hue-rotate": 340,
    blur: 0,
    grayscale: 15,
    sepia: 35,
    opacity: 100,
    invert: 0
  },

  negative: {
    brightness: 100,
    contrast: 100,
    saturate: 100,
    "hue-rotate": 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 100
  }
};

const presetBtnsBox = document.querySelector(".preset-btns");

function makePresetBtn(name){
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.dataset.name = name;
  btn.textContent = name;

  btn.addEventListener("click", (event) => {
      if(image){
        Object.keys(presets[event.target.dataset.name]).forEach(key => {
          filters[key].value = presets[event.target.dataset.name][key];
        })
        applyFilter();
        document.querySelectorAll(".inputFilter").forEach(element => {
          element.value = filters[element.dataset.name].value;
        })
      }
  })

  presetBtnsBox.appendChild(btn);
}

for (let key in presets) {
  makePresetBtn(key);
}