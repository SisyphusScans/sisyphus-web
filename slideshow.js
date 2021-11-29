var slides = Array.from(document.getElementsByClassName('slide'));
var slideIndex = 0;

function forwardSlide() {
    slides.forEach(slide => slide.style.maxHeight = "0px");
    slides.forEach(slide => slide.style.opacity = "0.0");

    slides[(slideIndex % (slides.length))].style.maxHeight = "100%";
    slides[(slideIndex % (slides.length))].style.opacity = "1.0";

    slideIndex++;
}

forwardSlide();
let slideUpdate = setInterval(forwardSlide, 4000);