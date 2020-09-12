// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmCharacters;

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    function generatePassword() {
        confirmLength = confirm("Would you like to specify a password length?")
        if (confirmLength === true) {
            while (true) {
                passwordLength = parseInt(prompt("Choose a password Length between 8 and 128 characters."));
                /* .test makes sure the string turned integer gathered above is an actual number */
                if (/^[0-9]+$/.test(passwordLength) && (passwordLength >= 8) && (passwordLength <= 128)) {
                    /* once all 3 criteria are met the loop breaks */
                    break;
                }
            } alert("You have selected a " + passwordLength + " character password.");
        } else {
            passwordLength= 24; //If the user doesn't want a specific length they receive this.
            alert("You will receive a 24 character password.")
        }; //using confirm to make sure the user understands what they are selecting plus boolean
        confirmLowercase = confirm("Would you like lowercase letters in your password?");
        if (confirmLowercase === true) {
            var aa = (String.fromCharCode(...Array(123).keys()).slice(97)); //only lower case letters fromCharCode
            var lC = aa.split("");
        } else {
            var lC = [];
        };
        confirmUppercase = confirm("Would you like uppercase letters in your password?");
        if (confirmUppercase === true) {
            var aA = (String.fromCharCode(...Array(123).keys()).slice(65, -32)); //uppercase fromCharCode
            var uC = aA.split("");
        } else {
            var uC = [];
        };
        confirmNumeric = confirm("Would you like numbers in your password?");
        if (confirmNumeric === true) {
            var aN = (String.fromCharCode(...Array(123).keys()).slice(48, -65)); //numbers fromCharCode
            var nC = aN.split("");
        } else {
            var nC = [];
        };
        confirmCharacters = confirm("Would you like special characters in your password?");
        if (confirmCharacters === true) {
            var aS1 = (String.fromCharCode(...Array(123).keys()).slice(33, -75)); //symbols are split up, 
            var aS2 = (String.fromCharCode(...Array(123).keys()).slice(58, -58)); //so they are selected 
            var aS3 = (String.fromCharCode(...Array(123).keys()).slice(91, -26)); //using 3 variables
            var sC1 = aS1.split("");
            var sC2 = aS2.split("");
            var sC3 = aS3.split("");
        } else {
            var sC1 = []; //leave the arrays blank so they don't interfere with the selected arrays
            var sC2 = [];
            var sC3 = [];
        };
        if (confirmLowercase === true || confirmUppercase === true || confirmNumeric === true || confirmCharacters === true){
            var passwordArray = [].concat(lC, uC, nC, sC1, sC2, sC3);
            console.log(passwordArray);
            actualPassword = "";
    
            for (i = 1; i <= passwordLength; i++) { //takes the given password length and adds a randomly selected integer from the array
                var max = passwordArray.length;     //to the string that will be pushed out to the user
                var randInt = Math.floor(Math.random() * max); //i starts at 1 because the password length cannot be 0
                actualPassword += (passwordArray[randInt]);
            }
            return actualPassword;
        } else {
            alert("Please select a character set to use for your password. The prompt will now restart.") //resets the prompt if no characters are selected
        }
    };
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

