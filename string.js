// First Section

// Declarated Elements In First Section & Second Section & Tree Section

const btn = document.querySelector("#btn__event");
const input = document.querySelector(".input__number");
const input__string = document.querySelector(".input__string");
const containJs = document.getElementsByClassName("container__js");
const btnClear = document.querySelector(".clear");
const btnCopyAll = document.querySelector(".copy__all");
const load = document.querySelector("#loading");
let span_js = document.querySelector(".span-title");
let input_string = "";
let is_loading = false;

// Second Section

function random__generator(string_length) {
  let characters =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate veniam iste non soluta accusamus quam, vitae numquam, neque quae deleniti quos hic ut aliquid recusandae rem blanditiis deserunt! Amet.";

  // Declarated Characters

  for (let i = 0; i < string_length; i++) {
    input_string += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  input__string.innerHTML = input_string;
}

function change_state() {
  is_loading = !is_loading;
}

// Practice Event Loading

span_js.innerHTML = "GENERETED!";

function change_btn_text() {
  if (!is_loading) {
    span_js.innerHTML = "GENERETED!";
  } else {
    span_js.innerHTML = "loading...";
    setTimeout(() => {
      return (span_js.innerHTML = "GENERETED!");
    }, 100);
  }
}

btn.addEventListener("click", () => {
  change_state();
  change_btn_text();
  random__generator(input.value);
});

btnClear.addEventListener("click", () => {
  input__string.value = "";
});

btnCopyAll.addEventListener("click", () => {
  navigator.clipboard.writeText(input__string.value);
  btnCopyAll.innerHTML = "Copied!";
});
