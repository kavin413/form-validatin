function validateform() {
    var x = document.forms["myform"]["fname"].value
    if (x == "") {
        alert("name must be filled")
        return false
    }
}

