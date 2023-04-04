// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numericalChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var specialChars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', ':', ';', '<', '>', '?', '@', '[', ']', '~',]

function generatePassword() {
  var password = []
  Math.random()
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
