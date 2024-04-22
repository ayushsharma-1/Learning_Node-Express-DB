var passwordField = document.getElementById("password");
var confirmPasswordField = document.getElementById("confirmPassword");

function checkPasswordMatch() {
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity("Passwords do not match");
    } 
    else {
        confirmPasswordField.setCustomValidity("");
        }
    }

confirmPasswordField.addEventListener("input", checkPasswordMatch);