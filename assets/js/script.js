// Assignment Code
var generateBtn = document.querySelector("#generate");

// question possibilities
var lowerEl = "abcdefghijklmnopqrstuvwxyz";
var upperEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialEl = "$%&()*+<=>?@";
var numberEl = "0123456789";
// allEl to hold hold selections
var allEl = " ";
// return value to hold clip of allEl.
var pass = " ";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  console.log(`this is password value ${password}`);
}

function generatePassword() {
  // getting and checking length of password
  lengthEl = window.prompt(
    "Please choose a password length between 8 and 128 characters. "
  );

  if (lengthEl < 8 || lengthEl > 128) {
    window.alert(
      "Please choose a password length between 8 and 128 characters."
    );
    return generatePassword();
  }

  // password questions
  // ++ only for increasing by number and += for increasing by anything.
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

  if ((!lower && !upper && !special && !number) || !lengthEl) {
    alert(
      "Please choose at least one type and/or a password length between 8 and 128 characters"
    );
  }
  // loop starts at 0 so "<" will include the proper length.
  for (i = 0; i < lengthEl; i++) {
    pass += allEl.charAt(Math.floor(Math.random() * allEl.length));
    console.log(pass[i]);
  }

  return pass;

  // function end
}
