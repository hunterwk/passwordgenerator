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
                passwordLength = parseInt(prompt("Choose a password Length between 8 and 128 characters. Select Cancel if you wish for a random length password."));
                /* .test makes sure the string turned integer gathered above is an actual number */
                if (/^[0-9]+$/.test(passwordLength) && (passwordLength >= 8) && (passwordLength <= 128)) {
                    console.log('pass');
                    console.log(passwordLength);
                    /* once all 3 criteria are met the loop breaks */
                    break;
                }
            } alert("You have selected a " + passwordLength + " character password.");
        };
        confirmLowercase = confirm("Would you like lowercase letters in your password?");
        if (confirmLowercase === true) {
            var aa = (String.fromCharCode(...Array(123).keys()).slice(97));
            var lC = aa.split("");
        } else {
            var lC = [];
        };
        confirmUppercase = confirm("Would you like uppercase letters in your password?");
        if (confirmUppercase === true) {
            var aA = (String.fromCharCode(...Array(123).keys()).slice(65, -32));
            var uC = aA.split("");
        } else {
            var uC = [];
        };
        confirmNumeric = confirm("Would you like numbers in your password?");
        if (confirmNumeric === true) {
            var aN = (String.fromCharCode(...Array(123).keys()).slice(48, -65));
            var nC = aN.split("");
        } else {
            var nC = [];
        };
        confirmCharacters = confirm("Would you like special characters in your password?");
        if (confirmCharacters === true) {
            var aS1 = (String.fromCharCode(...Array(123).keys()).slice(33, -75));
            var aS2 = (String.fromCharCode(...Array(123).keys()).slice(58, -58));
            var aS3 = (String.fromCharCode(...Array(123).keys()).slice(91, -26));
            var sC1 = aS1.split("");
            var sC2 = aS2.split("");
            var sC3 = aS3.split("");
        } else {
            var sC1 = [];
            var sC2 = [];
            var sC3 = [];
        };

        var passwordArray = [].concat(lC, uC, nC, sC1, sC2, sC3);
        console.log(passwordArray);
        actualPassword ="";

        for (i = 0; i <= passwordLength; i++) {
            var max = passwordArray.length;
            var randInt = Math.floor(Math.random() * max);
            actualPassword += (passwordArray[randInt]);
        }
        return actualPassword ;
    };


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

