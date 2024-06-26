// First Section

const btn = document.querySelector("#btn__event");
const input = document.querySelector(".input__number");

btn.addEventListener("click", () => {
  console.log(input.value);
});

// Second Section

function random(event) {
  event.preventDefault();

  const random = Math.random.toString(value);
  input.random;
}

btn.addEventListener("click", () => {
  random();
});
