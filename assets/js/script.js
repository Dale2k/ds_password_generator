// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // password questions
  var numberEl = window.confirm("Do you want to include numbers?");

  // getting and checking length of password
  lengthEl = window.prompt(
    "Please choose a password length between 8 and 128 characters. "
  );

  if (lengthEl < 8 || lengthEl > 128) {
    window.alert(
      "Please choose a password length between 8 and 128 characters."
    );
  }
  if (lengthEl) {
    console.log("yes");
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  password = 5;

  return password;
}
// the yellow curly brace is for the fnc
