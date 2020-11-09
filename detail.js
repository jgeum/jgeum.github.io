// This is for product detail modal //

// Get Modal //
var cardSelect = document.querySelector('.card');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');



	
cardSelect.addEventListener('click',function(){
		modalBg.classList.add("modal-active");
		//console.log('click card');
});

//close modal 
modalClose.addEventListener('click',function(){
	modalBg.classList.remove('modal-active');
});

// This is for Carousel in the combo section //

const carousel = document.getElementById("carousel"),
	carouselContent = document.getElementById("carousel-content"),
	prev = document.getElementById("prev"),
	next = document.getElementById("next");

next.addEventListener("click", e => {
	// scroll by 900 px when clicked 
	carousel.scrollBy(900, 0);
	//console.log('next clicked');
	if (carousel.scrollWidth !== 0){
		prev.style.display = "flex";
	}
	if (carouselContent.scrollWidth - 900 <= carousel.scrollLeft + 900) {
		next.style.display = "none";
	}

});

prev.addEventListener("click", e => {
	carousel.scrollBy(-900, 0);
	if (carousel.scrollLeft - 900 <= 0){
		prev.style.display = "none";
	}
	if (!carouselContent.scrollWidth - 900 <= carousel.scrollLeft + 900) {
		next.style.display = "flex";
	}
});

