// // Assignment Code

function generatePassword() {
// ask user for password length

var lowercaseChars = ['abcdefghijklmnopqrstuvwxyz'];
var uppercaseChars = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ',];
var numericalChars = ['0123456789'];
var specialChars = ['!#$%&()*+:;<>?@[]~'];

var password = "";
var passwordLength = parseInt(prompt("How many characters would you like your password to be? (Please enter a number between 8 and 128)"));
var includeLowercaseChars = confirm("Include lower case characters?")
var includeUppercaseChars = confirm("Include upper case characters?")
var includeNumericalChars = confirm("Include numbers?")
var includeSpecialChars = confirm("Include special characters?")

var charSet = "";
if (includeLowercaseChars){
  charSet += lowercaseChars;
}
if (includeUppercaseChars){
  charSet += uppercaseChars;
}
if (includeNumericalChars){
  charSet += includeNumericalChars;
}
if (includeSpecialChars){
  charSet += specialChars;  
}

for (i=0; i<passwordLength; i++){
password += charSet.charAt(Math.floor(Math.random()*charSet.length));  
}
return password;


}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
