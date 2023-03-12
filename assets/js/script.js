// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//  window.alert(`Your password is xxx`);

// display password on screen.
// password.innerHTML = `Your password is here`;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // getting and checking length of password
  lengthEl = window.prompt(
    "Please choose a password length between 8 and 128 characters. "
  );

  if (lengthEl < 8 || lengthEl > 128) {
    window.alert(
      "Please choose a password length between 8 and 128 characters."
    );
  }

  // if (!lengthEl) {
  //   return;
  // }
}
// the yellow curly brace is for the fnc
