$(document).ready(function() {
	// Slider-bg
	$('.slider-bg').slick({
		 slidesToShow: 1,
		 slidesToScroll: 1,
		 autoplay: true,
		 autoplaySpeed: 5000,
		 dots: true,
		 arrows: false
	});

	$('.screen-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.works-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});
