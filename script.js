// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIFGHIJKLMNOPQRSTUVWXYZ";
var numericalChars = "0123456789";
var specialChars = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

function generatePassword() {
  console.log("You've clicked the button!");
// 1. prompt user for password guidelines.
//   a. password length 8 < 128
//   b. Uppercase, Lowercase, and special characters     
// 2. Verify the input(s).
// 3. Generate accepted password.



// 4. Display password on page.
  return "Generated password will go here.";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
