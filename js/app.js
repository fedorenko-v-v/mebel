$(document).ready(function() {

	$('.topSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});

	$('.bottomSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		responsive: [
    {
      breakpoint: 768,
      settings: {
        fade: false,
				arrows: true
      }
    }
  ]
	});

	$('.slider-nav').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.bottomSlider',
	  focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4
			}
		}
	]
	});

	$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();
		var sc = $(this).attr("href"),
				dn = $(sc).offset().top - 36;
		$('html, body').animate({scrollTop: dn}, 1000);
		$('.btnMobM').toggleClass('open');
		$('.mainMenu').toggleClass('open');
	});

	$('.btnMobM').on('click', function(event){
		  $('.btnMobM').toggleClass('open');
		  $('.mainMenu').toggleClass('open');
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			}
			else {
				$('#toTop').fadeOut();
			}
		});

});
