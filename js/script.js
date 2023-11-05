loginPopup = document.getElementById("loginPopup");

function showLogin() {
    loginPopup.classList.add("active");
}

function closeLogin() {
    loginPopup.classList.remove("active");
};

window.addEventListener("click", function(event) {
    if (event.target == loginPopup) {
        loginPopup.classList.remove("active");
    }
});