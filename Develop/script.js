// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// function passPrompts(){
//   var passwordLength = prompt('length of password 8-128 characters')
//   var passCharLower = confirm('Would you like this password to include lowercase letters?')
//   var passCharUpper = confirm('Would you like this password to include uppercase letters?')
//   var passCharNumeric = confirm('Would you like this password to include numbers?')
//   var passCharSpecial = confirm('Would you like this password to include special characters?')
//   var passConditions = 


// }

// generateBtn.addEventListener("click", passPrompts);

// if(){

// }


//set it up in an object//
var password = {
  passwordLength: false,
  passCharLower: false,
  passCharUpper: false,
  passCharNumeric: false,
  passCharSpecial: false,
  
  // confirm('Would you like this password to include special characters?'),

  
  pass: function() {

    passCharLower = confirm('Would you like this password to include lowercase letters?');
    passCharUpper = confirm('Would you like this password to include uppercase letters?');
    passCharNumeric = confirm('Would you like this password to include numbers?');
    passCharSpecial = confirm('Would you like this password to include special characters?');
    alert(passCharLower);
    alert(passCharUpper);
    alert(passCharNumeric);
    alert(passCharSpecial);
  }
}


generateBtn.addEventListener("click", password.pass);
