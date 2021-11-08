function validate() {
    const num_element = document.querySelector("#num");
    const email_element = document.querySelector("#email");
    const num = num_element.value;
    const email = email_element.value;

    let num_error = true, email_error = true;
    const pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");

    if (num.trim() === "") {
        setColor("invalid", num_element);
        num_element.classList.add("invalid"); 
        num_error = false;
        console.log("invalid number");
    } else {
        setColor("valid", num_element);
        num_element.classList.remove("invalid"); 
        console.log("valid number");
    }

    if ((email.trim() === "") || (!pattern.test(String(email).toLowerCase()))) {
        setColor("invalid", email_element);
        email_element.classList.add("invalid");
        email_error = false;
        console.log("invalid email");
    } else { 
        setColor("valid", email_element);
        email_element.classList.remove("invalid");        
        console.log("valid email");
    }
    console.log(num_error && email_error);
    return num_error && email_error;
}

function setColor(validity, el) {
    if (validity === "valid") {
        el.style["background-color"] = "green";      
    } else if (validity === "invalid") {
        el.style["background-color"] = "red";    
    }
}