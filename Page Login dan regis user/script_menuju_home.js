function validateLogin() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "email@example.com" && password === "123") {
        function goToPage(url) {
            // Mengarahkan ke halaman yang ditentukan
            window.location.href = url;
        }
    } else {
        alert("Email or password is incorrect.");
    }
}