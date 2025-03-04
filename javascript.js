function validateform() {
    var x = document.forms["myform"]["fname"].value
    if (x =< 18) {
        alert("you must be 18 plus to enter")
        return false
    }
}

