// Function to get the password length
function isValidLength(length) {
  return length >= 8 && length <= 128;
}

// Function to generate the password
function generatePassword() {
  // Gather, store, and validate the password length from prompt
  var length = parseInt(window.prompt("What is the length of the password you would like? (Between 8 and 128)"));

  if (!isValidLength(length)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return ""; // Return an empty string as the password
  }

  // Gather all of the password criteria 
  var uppercase = window.prompt("Will the password contain uppercase letters? Please type yes or no.");
  var lowercase = window.prompt("Will the password contain lowercase letters? Please type yes or no.");
  var specialCharacters = window.prompt("Will the password contain special characters? Please type yes or no.");

  var randomCharacterResource = "";
  if (uppercase.toLowerCase() === "yes") {
    randomCharacterResource += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase.toLowerCase() === "yes") {
    randomCharacterResource += "abcdefghijklmnopqrstuvwxyz";
  }
  if (specialCharacters.toLowerCase() === "yes") {
    randomCharacterResource += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomness = Math.floor(Math.random() * randomCharacterResource.length);
    password += randomCharacterResource[randomness];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to write the password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
