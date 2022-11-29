const elForm = document.querySelector("form");
const elInput = document.querySelector(".number");
const boxLeft = document.querySelector(".boxs");
const boxright = document.querySelector(".boxss");
const elClear = document.querySelector(".clear");

const elBtn0 = document.querySelector(".buttons0");
const elBtn1 = document.querySelector(".buttons1");
const elBtn2 = document.querySelector(".buttons2");
const elBtn3 = document.querySelector(".buttons3");
const elBtn4 = document.querySelector(".buttons4");
const elBtn5 = document.querySelector(".buttons5");
const elBtn6 = document.querySelector(".buttons6");
const elBtn7 = document.querySelector(".buttons7");
const elBtn8 = document.querySelector(".buttons8");
const elBtn9 = document.querySelector(".buttons9");

elBtn0.addEventListener("click", function (e) {
  if (elInput.value < 10) {
    elInput.value += elBtn0.textContent;
  }
});

elBtn1.addEventListener("click", function (e) {
  elInput.value += elBtn1.textContent;
});

elBtn2.addEventListener("click", function (e) {
  elInput.value += elBtn2.textContent;
});

elBtn3.addEventListener("click", function (e) {
  elInput.value += elBtn3.textContent;
});

elBtn4.addEventListener("click", function (e) {
  elInput.value += elBtn4.textContent;
});

elBtn5.addEventListener("click", function (e) {
  elInput.value += elBtn5.textContent;
});

elBtn6.addEventListener("click", function (e) {
  elInput.value += elBtn6.textContent;
});

elBtn7.addEventListener("click", function (e) {
  elInput.value += elBtn7.textContent;
});

elBtn8.addEventListener("click", function (e) {
  elInput.value += elBtn8.textContent;
});

elBtn9.addEventListener("click", function (e) {
  elInput.value += elBtn9.textContent;
});

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputValue = Number(elInput.value);

  if (inputValue < 11) {
    boxLeft.style.border = "3px solid black";
    boxright.style.border = "none";
  } else if (inputValue > 10 && inputValue < 100) {
    boxright.style.border = "3px solid black";
    boxLeft.style.border = "none";
  }
});

elClear.addEventListener("click", function () {
  elInput.value = "";
  boxLeft.style.border = "none";
});
