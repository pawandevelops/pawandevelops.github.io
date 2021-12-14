window.addEventListener('load', function() {
    console.log("window loading...");
    let nameField = undefined;
    let nameError = undefined;
    let passwordField = undefined;
    let passwordError = undefined;
    let confirmPassField = undefined;
    let confirmPassError = undefined;
    let emailField = undefined;
    let emailError = undefined;
    let loginPage = undefined;
    let inputForm = document.querySelector("form");
    // inputForm.reset();

    nameField = document.getElementById("name-input");
    nameError = document.querySelector(".name-error");
    passwordField = document.getElementById("password-input");
    passwordError = document.querySelector(".password-error");
    confirmPassField = document.getElementById("confirm-password-input");
    confirmPassError = document.querySelector(".confirm-password-error");
    emailField = document.getElementById("email-input");
    emailError = document.querySelector(".email-error");
    loginPage = document.querySelector("#login-id");

    console.log("login Page true? ", loginPage.className);

    // basic validations only
    inputForm.addEventListener("submit", function(e) {

        // check for two consecutive blank spaces 
        const checkBlankSpaces = function(inputString) {
            var index;
            var noSpaceFlag = true;
            for (index = 0; index < inputString.length; index++) {
                if (inputString[index] == ' ') {
                    if (inputString[index + 1] == ' ') {
                        noSpaceFlag = false;
                        break;
                    }
                }
            } // for loop ends here
            return noSpaceFlag;
        }

        var nameOkFlag = true;
        nameField.value = nameField.value.trim(); // trim spaces on both edges of a user name
        if (nameField.value === '' || nameField.value == null) {
            nameError.innerText = 'Username cannot be space(s) or empty.';
            e.preventDefault();
            nameOkFlag = false;

        } else if (nameField.value.length < 3) {
            nameError.innerText = 'Username must be atleast 3 characters long.';
            e.preventDefault();
            nameOkFlag = false;

        } else if (checkBlankSpaces(nameField.value) == false) {
            nameError.innerText = 'Username contains multiple consecutive spaces inside.';
            e.preventDefault();
            nameOkFlag = false;

        } else if (nameField.value.length >= 3) {
            nameError.innerText = '';
            nameOkFlag = true;
        }

        var passOkFlag = true;
        if (passwordField.value == null || passwordField.value === '') {
            passwordError.innerText = 'Password cannot be empty.';
            e.preventDefault();
            passOkFlag = false;

        } else if (passwordField.value.length > 0) {
            passwordError.innerText = '';
            passOkFlag = true;
        }

        var confirmPassOkFlag = true;
        if (loginPage.className == "false") {
            if (confirmPassField.value == null || confirmPassField.value === '') {
                confirmPassError.innerText = 'Confirm Password cannot be empty.';
                e.preventDefault()
                confirmPassOkFlag = false;

            }
            if (confirmPassField.value != passwordField.value) {
                confirmPassError.innerText = 'Passwords do not match. Retype.';
                e.preventDefault();
                confirmPassOkFlag = false;

            } else if (confirmPassField.value === passwordField.value) {
                confirmPassError.innerText = '';
                confirmpassOkFlag = true;
            }
        }

        var emailOkFlag = true;
        if (emailField.value == null || emailField.value === '') {
            emailError.innerText = 'Email cannot be empty.';
            e.preventDefault();
            emailOkFlag = false;
        } else if (emailField.value.indexOf('@') < 0) {
            emailError.innerText = `Email should contain '@' character.`;
            e.preventDefault();
            emailOkFlag = false;
        } else if (emailField.value.length <= 4) {
            emailError.innerText = `Email must be more than 4 characters long.`;
            e.preventDefault();
            emailOkFlag = false;
        } else if (emailField.value.length > 4) {
            emailError.innerText = '';
            emailOkFlag = true;
        }

        if (loginPage.className == "false") {
            if (!(nameOkFlag && passOkFlag && emailOkFlag && confirmPassOkFlag))
                e.preventDefault();

        } else {
            if (!(nameOkFlag && passOkFlag && emailOkFlag))
                e.preventDefault();
        }

    })

    // to hide and show passwords on all desired fields
    const passwordEye = document.querySelectorAll(".password-eye");
    passwordEye.forEach(item => {

        item.addEventListener("click", function() {
            if (item.parentElement.children[2].type == "password") {

                item.parentElement.children[2].type = "text";
                item.classList.remove("fa-eye-slash");
                item.classList.add("fa-eye");
            } else {
                item.parentElement.children[2].type = "password";
                item.classList.remove("fa-eye");
                item.classList.add("fa-eye-slash");
            }
        })

    })
}); // window on load function ends here