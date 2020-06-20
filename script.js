
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
var validLowercaseCollection = "abcdefghijklmnopqrstuvwxyz";
var validUppercaseCollection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var validNumericCollection = "0123456789";
var validSpecialcharactersCollection = "!@#$%^&*_-+=";
var confirmedPick = " ";
//var validCharacters="";
var validChar = " ";
// THEN I select which criteria to include in the password
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Write password to the #password input
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // WHEN prompted for the length of the password
  var passwordLength = prompt("Please choose a number bewteen 8 characters and no more than 128 characters for your password length .");
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // check the input number is <8 and >128
  while (Number(passwordLength) < 8 || Number(passwordLength) > 128 || Number(passwordLength) === NaN) {
    alert("Error, Your input isn't between 8 and 128 or a number");
    passwordLength = prompt("Please choose your password length bewteen 8 characters and no more than 128 characters.");
  }
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  var lowercaseYes = confirm("Would you like to include lowercases?");
  var uppercaseYes = confirm("Would you like to include uppercases?");
  var numericYes = confirm("Would you like to include numbers?");
  var specialCharactersYes = confirm("Would you like to include special characters?");
  // This creates a local variable for the password instead of getting the DOM object with id="password"
  let password = '';
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  while (lowercaseYes === false && uppercaseYes === false && numericYes === false && specialCharactersYes === false) {
    alert("Please at least pick one character type!")
    var lowercaseYes = confirm("Would you like to include lowercases?");
    var uppercaseYes = confirm("Would you like to include uppercases?");
    var numericYes = confirm("Would you like to include numbers?");
    var specialCharactersYes = confirm("Would you like to include special characters?");
  }
  //if confirmed all selections
  if (lowercaseYes === true && uppercaseYes === true && numericYes === true && specialCharactersYes === true) {
    validChar = validLowercaseCollection + validUppercaseCollection + validNumericCollection + validSpecialcharactersCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed no Special Characters
  else if (lowercaseYes === true && uppercaseYes === true && numericYes === true && specialCharactersYes != true) {
    validChar = validLowercaseCollection + validUppercaseCollection + validNumericCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed no Numbers
  else if (lowercaseYes === true && uppercaseYes === true && numericYes != true && specialCharactersYes === true) {
    validChar = validLowercaseCollection + validUppercaseCollection + validSpecialcharactersCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed Uppper and Lower
  else if (lowercaseYes === true && uppercaseYes === true && numericYes != true && specialCharactersYes != true) {
    validChar = validLowercaseCollection + validUppercaseCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed Upper and Number
  else if (lowercaseYes != true && uppercaseYes === true && numericYes === true && specialCharactersYes != true) {
    validChar = validUppercaseCollection + validNumericCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed Upper and Special Char
  else if (lowercaseYes != true && uppercaseYes === true && numericYes != true && specialCharactersYes === true) {
    validChar = validUppercaseCollection + validSpecialcharactersCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed Lower and Number
  else if (lowercaseYes === true && uppercaseYes != true && numericYes === true && specialCharactersYes != true) {
    validChar = validLowercaseCollection + validNumericCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed Lower and Special Chars
  else if (lowercaseYes === true && uppercaseYes === true && numericYes != true && specialCharactersYes === true) {
    validChar = validLowercaseCollection + specialCharactersYes;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed Number and Special Chars
  else if (lowercaseYes != true && uppercaseYes != true && numericYes === true && specialCharactersYes === true) {
    validChar = validNumericCollection + validSpecialcharactersCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed only Lower
  else if (lowercaseYes === true && uppercaseYes != true && numericYes != true && specialCharactersYes != true) {
    validChar = validLowercaseCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed only upper
  else if (lowercaseYes != true && uppercaseYes === true && numericYes != true && specialCharactersYes != true) {
    validChar = validUppercaseCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed only number
  else if (lowercaseYes != true && uppercaseYes != true && numericYes === true && specialCharactersYes != true) {
    validChar = validNumericCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  //confirmed only special chars
  else if (lowercaseYes != true && uppercaseYes != true && numericYes != true && specialCharactersYes === true) {
    validChar = validSpecialcharactersCollection;
    for (var i = 0; i < passwordLength; i++) {
      confirmedPick = validChar.charAt(Math.floor(Math.random() * validChar.length));
      password = password.toString() + confirmedPick.toString();
      console.log(passwordLength);
    }
  }
  return password;
}