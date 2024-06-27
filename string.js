// First Section

// Declarated Elements In First Section

const btn = document.querySelector("#btn__event");
const input = document.querySelector(".input__number");
const input__string = document.querySelector(".input__string");
const containJs = document.getElementsByClassName("container__js");
const btnClear = document.querySelector(".clear");
const btnCopyAll = document.querySelector(".copy__all");
let input_string = "";
let is_loading = false;

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
  change_state();
}

btn.addEventListener("click", () => {
  change_state();
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

//  Declarated Elements In Tree Section

const load = document.querySelector("#loading");

// Event Loading In Page

// btn.addEventListener("click", () => {
//   load.style.display = "flex"; // Load is visible in page
//   btn.style.visibility = "hidden"; // Button is hidden in page
// });

function change_state() {
  is_loading = !is_loading;
}
