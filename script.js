// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmCharacters;
//var passwordArray= [].concat(lC, uC, nC, sC);

// Write password to the #password input
function writePassword() {
    /*var password = generatePassword();
    var passwordText = document.querySelector("#password"); 

    passwordText.value = password; */
    confirmLength = confirm("Would you like to specify a password length?")
    if (confirmLength === true) {
        while (true) {
            passwordLength = parseInt(prompt("Choose a password Length between 8 and 128 characters"));
            /* .test makes sure the string turned integer gathered above is an actual number */
            if ( /^[0-9]+$/.test(passwordLength) && (passwordLength >= 8) && (passwordLength <= 128)) {
                console.log('pass');
                /* once all 3 criteria are met the loop breaks */
                break;
            } else {
            console.log('fail');
            }
        } alert("You have selected a " + passwordLength +" character password.");
    }
    confirmLowercase = confirm("Would you like lowercase letters in your password?");
    if (confirmLowercase === true) {
        var aa = (String.fromCharCode(...Array(123).keys()).slice(97));
        var lC = aa.split("")
        
    }
    confirmUppercase = confirm("Would you like uppercase letters in your password?");
    if (confirmUppercase === true) {
        var aA = (String.fromCharCode(...Array(123).keys()).slice(65, -32));
        var uC = aA.split(""); 
    }
    confirmNumeric = confirm("Would you like numbers in your password?");
    if (confirmNumeric === true) {
        var aN = (String.fromCharCode(...Array(123).keys()).slice(48, -65));
        var nC = aN.split("");
    }
    confirmCharacters = confirm("Would you like special characters in your password?");
    if (confirmCharacters === true) {
        var aS1 = (String.fromCharCode(...Array(123).keys()).slice(33, -75));
        var aS2 = (String.fromCharCode(...Array(123).keys()).slice(58, -58));
        var aS3 = (String.fromCharCode(...Array(123).keys()).slice(91, -26));
        var sC1 = aS1.split("");
        var sC2 = aS2.split("");
        var sC3 = aS3.split("");


    }
    var passwordArray= [].concat(lC, uC, nC, sC1, sC2, sC3);
    console.log(passwordArray);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

