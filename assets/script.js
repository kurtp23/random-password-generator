// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var numbers = "0123456789";
var specChar = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var choices;

function generatePass() {
  passLength = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );

  if (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    var passCharLower = confirm(
      "Would you like this password to include lowercase letters?"
    );
    var passCharUpper = confirm(
      "Would you like this password to include uppercase letters?"
    );
    var passCharNumeric = confirm(
      "Would you like this password to include numbers?"
    );
    var passCharSpecial = confirm(
      "Would you like this password to include special characters?"
    );
  }
  console.log(passCharLower);

  var parameters = "";

  if (passCharLower) {
    parameters += lower;
  }
  if (passCharUpper) {
    parameters += upper;
  }
  if (passCharNumeric) {
    parameters += numbers;
  }
  if (passCharSpecial) {
    parameters += specChar;
  }
  if (!parameters) {
    alert("restart");
    return "";
  }
  console.log(parameters);

  var finalPass = "";
  for (var i = 0; i < passLength; i++) {
    finalPass += parameters[Math.floor(Math.random() * parameters.length)];
  }
  return finalPass;
}
