// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLength;

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
   

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

