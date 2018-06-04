$(document).ready(function(){
	
		$('.slider-product').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-product-small'
		});
		$('.slider-product-small').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-product',
		  dots: true,
		  centerMode: true,
		  focusOnSelect: true
		});
});