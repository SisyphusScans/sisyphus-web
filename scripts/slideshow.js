var slideIndex = 0;

function updateSlides() {
	let shows = Array.from(document.getElementsByClassName('slideshow'));

	shows.forEach(show => {
		let slides = Array.from(show.getElementsByClassName('slide'));
		let realIndex = (slideIndex % slides.length)

		slides.forEach(slide => slide.style.maxHeight = "0px");
		slides.forEach(slide => slide.style.opacity = "0.0");

		slides[realIndex].style.maxHeight = "100%";
		slides[realIndex].style.opacity = "1.0";

		slideIndex++;
	})
}
updateSlides()
let slideUpdate = setInterval(updateSlides, 3000);