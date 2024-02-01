function send() {
    // console.log(this)
    // document.getElementById("snd").style.backgroundImage = "linear-gradient(45deg , #FF5771, #F96153,#FF683F)"
    let emailInputed = document.getElementById("email").value;

    if (isValidEmail(emailInputed)) {
        document.getElementById("isError").classList.remove("error")
        document.getElementById("email").classList.remove("error")
        document.querySelector(".container").style.display = "none"
        document.querySelector(".email-inputed").innerHTML = emailInputed
        document.querySelector(".container-success").style.display = "flex"
    } else {
        document.getElementById("isError").classList.add("error")
        document.getElementById("email").classList.add("error")
        document.getElementById("email").style.borderColor = "hsl(4, 100%, 67%)"
    }
}

function isValidEmail(email) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
