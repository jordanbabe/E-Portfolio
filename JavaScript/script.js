


/******************External JavaScript for Contact Page *************/



/* Declaring a function named checkForm(form) that takes form tag as parameter */

function checkForm(form) {
    /* If condition for thorwing an alert if surname textfield is left empty*/
    if (form.Surname.value == "") {
        alert("Error: Surname cannot be left blank!"); /* Throwing an alert message */
        form.Surname.focus(); /* focus() method provides focus to that element as soon as the alert is thrown.*/
        return false;
    }
    re = /^\w+$/; /* Assigning a variable re with some characters.*/

    /* Throwing an alert if the surname is entered with any of the charcters from re variable.  */
    if (!re.test(form.Surname.value)) {
        alert("Error: Surname cannot contain any numbers and characters!");
        form.Surname.focus();
        return false;
    }

     /* Checking the value of Name */
    if (form.Name.value == "") {
        alert("Error: Name cannot be blank!");
        form.Name.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(form.Name.value)) {
        alert("Error: Name cannot contain any numbers and characters!");
        form.Name.focus();
        return false;
    }
    if (form.email.value == "") {
        alert("Please enter your email");
        form.email.focus();
        return false;
    } /* Creating a varibale re with all the characters that can be entered in email box. */
    else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var result = re.test(String(this.email.value).toLowerCase());
        if (result == 0) {
            alert('Please enter a valid email');
            form.email.focus();
            return false;
        }
    }


    var phone = form.phone.value;
    var phoneno = /^\d{8}$/;
    if (!phone.match(phoneno)) {
        alert("Please enter a valid phone number.");
        form.phone.focus();
        return false
    }

    /* Message is a compulsory field and hence cant be blank. */
    if (form.message.value == "") {
        alert("Message cannot be blank!");
        form.message.focus();
        return false;
    }
}




