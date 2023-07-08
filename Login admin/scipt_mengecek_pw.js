function validateLogin() {

    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (user === "admin1" && password === "123") {
        window.location.href = "/Page%20dasboard/dasboard_admin.html";
    } else {
        alert("Email or password is incorrect.");
    }
}