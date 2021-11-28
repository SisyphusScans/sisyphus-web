var slide = 1;
ss(slide);

function fw(n) {
    ss(slide += n);
}

function cs(n) {
    ss(slide = n);
}

function ss(n) {
    var i;
    var slides = document.getElementsByClassName("i_ss");
    var dots = document.getElementsByClassName("i_ss_dt");

    if (n > slides.length) {
        slide = 1
    }

    if (n < 1) {
        slide = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slide++;

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slide - 1].style.display = "block";
    dots[slide - 1].className += " active";

    setTimeout(ss, 4000);
}
