loginPopup = document.getElementById("login-popup");

function showLogin() {
    loginPopup.classList.add("active");
}

passwordInput = document.getElementById("password");
visibilityIcon = document.getElementById("show-password");

function togglePassVisible() {

    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        visibilityIcon.innerHTML = "<span class=\"material-symbols-outlined\">visibility_off</span>";
    } else {
        passwordInput.type = "password";
        visibilityIcon.innerHTML = "<span class=\"material-symbols-outlined\">visibility</span>";
    }
}

// function closeLogin() {
//     loginPopup.classList.remove("active");
// };

// window.addEventListener("click", function(event) {
//     if (event.target == loginPopup) {
//         loginPopup.classList.remove("active");
//     }
// });