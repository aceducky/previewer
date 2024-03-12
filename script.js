let codeInput = document.querySelector("#code-input");
let output = document.querySelector("#output");
let wrapper = document.querySelector("#wrapper");
let widthInput = document.querySelector("#width-input");
let newBtn = document.querySelector("#new-btn");
let saveBTn = document.querySelector("#save-btn");
let deleteBtn = document.querySelector("#delete-btn");
let codes = new Map();
let savedList = document.querySelector("#saved-list");
const getcurrentOption = function () {
  return savedList.value;
};
const setCurrentOption = function (opt = "") {
  savedList.value = opt;
};

widthInput.addEventListener("input", () => {
  if (widthInput.value == widthInput.max) {
    wrapper.style.gridTemplateRows = "1fr 1fr";
    wrapper.style.gridTemplateColumns = "none";
    return;
  }
  wrapper.style.gridTemplateColumns = `${widthInput.value}fr ${
    12 - widthInput.value
  }fr`;
  wrapper.style.gridTemplateRows = "none";
});

function run() {
  output.src = "data:text/html;charset=utf-8," + encodeURI(codeInput.value);
}

codeInput.addEventListener("input", () => {
  run();
});

savedList.addEventListener("input", () => {
  console.log(getcurrentOption());
});
