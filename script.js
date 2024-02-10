

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = prompt("Please enter a password length between 8 and 128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  var hasUppercase = confirm("Do you want uppercase letters in your password?");
  var hasLowercase = confirm("Do you want lowercase letters in your password?");
  var hasNumbers = confirm("Do you want numbers in your password?");
  var hasSymbols = confirm("Do you want symbols in your password?");

  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+-=[]{}|;':,.<>?/~`";
  var characterSet = "";

  if (hasUppercase) {
    characterSet += upperCaseLetters;
  }

  if (hasLowercase) {
    characterSet += lowerCaseLetters;
  }

  if (hasNumbers) {
    characterSet += numbers;
  }

  if (hasSymbols) {
    characterSet += symbols;
  }

  if (characterSet.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);