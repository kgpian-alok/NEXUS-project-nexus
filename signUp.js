function validity() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    var cnfPass = document.getElementById("cnfPass").value;
    if (username === "" || pass === "" || name === "" || cnfPass === "") {
        alert("All fields are mandatory");
        return false;
    }
    if (pass !== cnfPass) {
        alert("Password is not matching");
        return false;
    }
    return true;
}