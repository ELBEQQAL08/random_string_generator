// First Section

const btn = document.querySelector("#btn__event");
const input = document.querySelector(".input__number");
const input__string = document.querySelector(".input__string");
const containJs = document.getElementsByClassName("container__js");

// Second Section

function random__generator(string_length) {
  var characters =
    'ABCDEfgehejfhjdhjdjhdjhfdhjf@"ljxkjjxkjxcjxj122slwkxkjxcjkxjcx0';
  var input_string = "";

  for (var i, i = 0; i < string_length; i++) {
    input_string += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  input__string.innerHTML = input_string;
}

btn.addEventListener("click", () => {
  random__generator(1000);
});
