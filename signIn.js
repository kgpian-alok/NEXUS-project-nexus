function validity() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    if (username === "" || pass === "") {
        alert("All fields are mandatory");
        return false;
    }
    else {
        return true;
    }
}