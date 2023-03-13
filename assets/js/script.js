// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables

var lowerEl = "abcdefghijklmnopqrstuvwxyz";
var upperEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialEl = "$%&()*+<=>?@";
var numberEl = "0123456789";
var allEl = " ";

function generatePassword() {
  // password = 5;
  // return password;
  // getting and checking length of password
  lengthEl = window.prompt(
    "Please choose a password length between 8 and 128 characters. "
  );

  if (lengthEl < 8 || lengthEl > 128) {
    window.alert(
      "Please choose a password length between 8 and 128 characters."
    );
  }

  // password questions
  var lower = confirm("Do you want to include lower case letters?");
  if (lower && lengthEl) {
    allEl += lowerEl;
    console.log(`lower value is ${lower}`);
    console.log(`lowerEl value is ${lowerEl}`);
    console.log(`lengthEl value is ${lengthEl}`);
    console.log(`all value is ${allEl}`);
  }
  var upper = confirm("Do you want to include upper case letters?");
  if (upper && lengthEl) {
    allEl += upperEl;
    console.log(`upper value is ${upper}`);
    console.log(`upperEl value is ${upperEl}`);
    console.log(`lengthEl value is ${lengthEl}`);
    console.log(`all value is ${allEl}`);
  }

  var special = confirm("Do you want to include special characters?");
  if (special && lengthEl) {
    allEl += specialEl;
  }

  var number = confirm("Do you want to include upper numbers?");
  if (number && lengthEl) {
    allEl += numberEl;
    console.log(`number value is ${number}`);
    console.log(`numberEl value is ${numberEl}`);
    console.log(`lengthEl value is ${lengthEl}`);
    console.log(`all value is ${allEl}`);
  }

  if (!lower && !upper && !special && !number) {
    alert("Please choose at least one type");
  }

  // function end
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
