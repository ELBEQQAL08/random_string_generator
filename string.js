// First Section

const btn = document.querySelector("#btn__event");
const input = document.querySelector(".input__number");
const input_string = document.querySelector(".input__string");

// Second Section

function random__generator(string_length) {
  var characters =
    'ABCDEfgehejfhjdhjdjhdjhfdhjf@"ljxkjjxkjxcjxj122slwkxkjxcjkxjcx0';
  var input__string = "";

  for (var i, i = 0; i < string_length; i++) {
    input__string += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
}

btn.addEventListener("click", () => {
  random__generator(1000);
});
