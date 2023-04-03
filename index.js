const input = document.getElementById("email");
const input2 = document.getElementById('email2');
const button1 = document.getElementById("btn__submit");
const button2 = document.getElementById("btn__submit2");
const errorRed = document.getElementById("red");
const errorWhite = document.getElementById("white");

const validation = function () {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    input.value = "";
    errorRed.style.display = "none";
    input.style.border = "1px solid black";
    input.style.borderRadius = "3px";
  } else {
    errorRed.style.display = "block";
    input.style.border = "1px solid red";
  }
};

const validation2 = function () {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input2.value.match(validRegex)) {
    input2.value = "";
    errorWhite.style.display = "none";
    input2.style.border = "none";
    input2.style.borderRadius = "3px";
  } else {
    errorWhite.style.display = "block";
    input2.style.border = "1px solid red";
  }
};

button1.addEventListener("click", validation);
button2.addEventListener("click", validation2);
