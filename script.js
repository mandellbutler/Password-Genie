//User presses button
// Welcome the User 
alert("Welcome to Password Genie!");
//give the user a set of instructions, followed by a series of prompts
alert("In order to generate your password, I will need some information from you:")

// Prompt for desired length of password between 8 and 128 characters.
// Confirm number 
// how long do you want the password to be?
var passwordLength = prompt("For password length, please pick a number from 8 - 128");
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

// Generate random password using data.
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
  var lowercaseChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 
  // uppercase letters
  var uppercaseChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  
  // special characters
  var specialChoices = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ";", ":", "'", '"', ",", "<", ".", ">", "/", "?"]
  
  // numbers
  var numberChoices = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",  "91", "92", "93", "94", "95", "96", "97", "98", "99", "100",
  "101", "102", "103", "104", "105", "106", "107", "108", "109", "110",
  "111", "112", "113", "114", "115", "116", "117", "118", "119", "120",
  "121", "122", "123", "124", "125", "126", "127", "128"]

  
// Functions =========================================================



function getUseInput () {
    useInput = prompt("For password length, please pick a number from 8 - 128")
    
}
console.log(getUseInput)

function generatePassword() {
    return "a string"


   


        // store their choice
      // do you want uppercase letters? store the choice
      // do you want lowercase letters? store the choice
      // do you want numbers? store the choice
      // do you want special characters? store the choice
    // combine the chosen arrays into larger array

    
    // randomly choose characters from the combined array and add them to a string called password
    // return a password
  }
  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  