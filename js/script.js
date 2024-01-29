// slide show

let slideIndex = 1;
let notif = document.getElementById("notif");
let error = document.getElementById("error");

showSlides(slideIndex);
setInterval(autoMoveSlides, 5000);
error.style.display = "none";

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoMoveSlides() {
    plusSlides(1);
}

function sendButtonContact() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let interest = document.getElementById("interest").value;


    if (notif.innerText === "") {
        error.style.display = "none";
    }


    if (fullname === "" || email === "" || interest === "") {
        error.style.display = "";
        notif.innerText = "All fields must be filled!";
        return;
    }

    if (!/^[a-zA-Z ]+$/.test(fullname)) {
        error.style.display = "";
        notif.innerText = "Fullname must be letters only!";
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.style.display = "";
        notif.innerText = "Email must be valid!";
        return;
    }

    if (interest === "") {
        error.style.display = "";
        notif.innerText = "Interest must be selected!";
        return;
    }

    clearInput();
    error.style.display = "none";
    notif.innerText = "";
    alert("Thank you for your interest!");

}

function clearInput() {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("interest").selectedIndex = 0
}

// navbar

function addHashFragment(hashFragment) {
    var currentUrl = window.location.href;
    var hashIndex = currentUrl.indexOf('#');

    if (hashIndex !== -1) {
        var baseUrl = currentUrl.substring(0, hashIndex);
        window.location.href = baseUrl + '#' + hashFragment;
    } else {
        window.location.href = currentUrl + '#' + hashFragment;
    }
}
