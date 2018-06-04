
// var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1} 
//     x[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 3000); // Change image every 3 seconds
// }


$(document).ready(function(){
	$('.slideShow').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true
	});
});



// $(document).ready(function(){
//   $('#login-trigger').click(function(){
//     $(this).next('#login-content').slideToggle();
//     $(this).toggleClass('active');          

//     if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
//       else $(this).find('span').html('&#x25BC;')
//     })
// });