console.log("Is this thing on?")

// User presses the button on the generator
// Welcome the User 
alert("Welcome to Password Genie!");

//give the user a set of instructions, followed by a series of prompts

alert("In order to make your password wish come true, I will need some information from you:")

// Prompt for desired length of password between 8 and 128 characters.
// Confirm number 
var passwordLength = prompt("For password length, please pick a number from 8 - 128");
console.log("Password Length:", passwordLength);

        // if chosen character is >=8
        // and =< 128, console log "great, now how bout special characters?"
        // else "Password must be 8 - 128 characters in length"

//Prompt for character type:
// and confirm result:
var lowercaseOptions = confirm("Would you like your password to use lowercase characters?")
console.log("Use Lowercase?:", lowercaseOptions)

//Prompt for character type and confirm result:
// and confirm result:
var uppercaseOptions = confirm("Would you like your password to include uppercase characters?")
console.log("Use Uppercase?", uppercaseOptions)

//Prompt for character type and confirm result:
// and confirm result:
var numberOptions = confirm("Would you like your password to include numbers?")
console.log("Use Numbers?", numberOptions)

//Prompt for character type and confirm results:
// and confirm result:
var symbolOPtions = confirm("Would you like your password to include special characters, or symbols?")
console.log("Use Symbols?", symbolOPtions);

//Generate random password using data.
    // Define LOWERCASE letters
    
    // // Define UPPERCASE letters
    // var uppercaseOptions =
    // // Define choice of numbers
    // var numberOptions = arrayNumbers 
    // // Define choice of symbols
    // var symbolOPtions =

// Display password to user 
