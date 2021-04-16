
//==========================DEPENDENCIES===================================

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
 


//======================STARTING DATA=====================================

var lowercaseChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChoices = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ";", ":", "'", '"', ",", "<", ".", ">", "/", "?"]
var numberChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "1"]



//========================FUNCTIONS=======================================

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  passwordText.value = generatePassword();
}

//Confirm number 
//how long do you want the password to be?


//========================USER INTERACTIONS==============================
//User presses button
//Prompt for desired length of password between 8 and 128 characters.

function generatePassword() {
  var passwordLength = parseInt(prompt("For password length, please pick a number from 8 - 128"));

var passwordLength = 
console.log("Password Length:", passwordLength);
// if passwordLength is < 8 
//-OR-
// if passwordlength is > 128
// display alert "Password must be 8 - 128 characters in length"
//prompt("For password length, please pick a number from 8 - 128";

//Prompt for character type:
// and confirm result:
var lowercase = confirm("Would you like your password to use lowercase characters?")
console.log("Use Lowercase?:", lowercase)

//Prompt for character type and confirm result:
// and confirm result:
var uppercase = confirm("Would you like your password to include uppercase characters?")
console.log("Use Uppercase?", uppercase)

//Prompt for character type and confirm result:
// and confirm result:
var numbers = confirm("Would you like your password to include numbers?")
console.log("Use Numbers?", numbers)

//Prompt for character type and confirm results:
// and confirm result:
var symbols = confirm("Would you like your password to include special characters, or symbols?")
console.log("Use Symbols?", symbols);

//Generate random password using data.
//     // Define LOWERCASE letters
//     var lowergitcaseOptions =
//     // Define UPPERCASE letters
//     var uppercaseOptions =
//     // Define choice of numbers
//     var numberOptions = arrayNumbers 
//     // Define choice of symbols
//     var symbolOPtions 

// Display password to user 






//============================================BEN'S EXAMPLE===========

// Starting Data =====================================================
//generate array of options using ASII Character code Table
// lowercase letters



// Functions =========================================================



function getUseInput() {
  useInput = prompt("For password length, please pick a number from 8 - 128");
  return
}
function validateUseInput() {
  if (useInput < 8) {
    alert("Password must be 8 - 128 characters in length.")
  } else if (useInput > 128) {
    alert("Password must be 8 - 128 characters in length.")
    getUseInput
  }
}





function pickRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}


  // store their choice
  // do you want uppercase letters? store the choice
  // do you want lowercase letters? store the choice
  // do you want numbers? store the choice
  // do you want special characters? store the choice
  // combine the chosen arrays into larger array


  // randomly choose characters from the combined array and add them to a string called password
  // return a password
}







