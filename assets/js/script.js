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

  // numberEl = window.confirm("Do you want to include numbers?");

  // specialEl = window.confirm("Do yo want to include special characters?");

  // lowerEl = window.confirm("Do you want to include lower case letters?");

  // upperEl = window.confirm("Do you want to include upper case letters?");

  // window.alert(`numbers included ${numberEl}`);

  // var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // // var special = ["!","#","$","%","(",")"];

  // // var letters = ["a","b","c","d","e","f","g","h"]

  // var index = Math.floor(Math.random() * number.length);

  // var choice = number[index];

  // console.log(`var choice = ${choice}`);
  // console.log(` var index = ${index}`);

  function random_item(items) {
    return items[Math.floor(Math.random() * lengthEl)];
  }

  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(random_item(items));

  return_items();
}
// the yellow curly brace is for the fnc
