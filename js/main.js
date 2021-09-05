$(function () {

	$('[data-fancybox]').fancybox({
		youtube: {
			controls: 0,
			showinfo: 0
		},
		vimeo: {
			color: 'f00'
		}
	});
	$('.awards-slider').slick({

		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		fade: true





	})
	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
			  breakpoint: 480,
			  settings: {
				 arrows: false,
				 dots: true
			  }
			}
		 ]




	})





});