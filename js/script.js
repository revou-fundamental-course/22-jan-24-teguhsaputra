// slide show

let slideIndex = 1;
showSlides(slideIndex);
setInterval(autoMoveSlides, 5000);

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
