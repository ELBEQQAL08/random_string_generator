// First Section

const btn = document.querySelector("#btn__event");
const input = document.querySelector(".input__number");
const input__string = document.querySelector(".input__string");
const containJs = document.getElementsByClassName("container__js");
const btnClear = document.querySelector(".clear");
const btnCopyAll = document.querySelector(".copy__all");
let input_string = "";

// Second Section

function random__generator(string_length) {
  let characters =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate veniam iste non soluta accusamus quam, vitae numquam, neque quae deleniti quos hic ut aliquid recusandae rem blanditiis deserunt! Amet.";

  for (let i = 0; i < string_length; i++) {
    input_string += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  input__string.innerHTML = input_string;
}

btn.addEventListener("click", () => {
  random__generator(input.value);
});

btnClear.addEventListener("click", () => {
  input__string.value = "";
});

btnCopyAll.addEventListener("click", () => {
  navigator.clipboard.writeText(input__string.value);
  btnCopyAll.innerHTML = "Copied!";
});

// Tree Section

const load = document.querySelector("#loading");

// btn.addEventListener("click", () => {
//   load.style.display = "flex";
//   btn.style.display = "none";
//   if (input__string.innerHTML != value) {
//     load.classList.add("#loading__none");
//     btn.classList.add(".btn__none");
//   }
//   if (input__string.value === value) {
//     load.classList.replace("#loading");
//     btn.classList.remove(".btn__none");
//   }
// });

btn.addEventListener("click", () => {
  load.style.display = "flex";
  btn.style.display = "none";
  if ((input__string.innerHTML = value)) {
    setTimeout((load.style.display = "none"));
    btn.style.display = "block";
  }
});
