// First Section

// Declarated Elements In First Section & Second Section & Tree Section

const btn = document.querySelector("#btn__event");
const input = document.querySelector(".input__number");
const input__string = document.querySelector(".input__string");
const containJs = document.getElementsByClassName("container__js");
const btnClear = document.querySelector(".clear");
const btnCopyAll = document.querySelector(".copy__all");
const load = document.querySelector("#loading");
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

  setTimeout(() => {
    change_state();
  }, 5000);
}

function change_state() {
  is_loading = !is_loading;
}

btn.innerHTML = "GENERETED!";
const img = document.createElement("img");
const containerImg = document.querySelector(".container_img");
img.src = "settings.png";
btn.appendChild(img);

// Practice Event Loading

function change_btn_text() {
  if (!is_loading) {
    img.src = "settings.png";
    btn.innerHTML = "GENERETED!";
    btn.appendChild(img);
    is_loading = false;
  } else {
    btn.innerHTML = "loading...";
    setTimeout(() => {
      return (
        (btn.innerHTML = "GENERETED!"),
        (img.src = "settings.png"),
        btn.appendChild(img)
      );
    }, 1000);
  }
}

// Add Icon In Button

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
