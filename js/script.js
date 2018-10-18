
/*	$(window).scroll(function(){
	var scrollBlock = $(this).scrollTop();
	
	$(".main-banner-inner").css({
		"transform" : "translate(0% , " + scrollBlock / 6 + "%"});
	
}); */
$(document).ready(function(){
	

$(".works-card").hover(
	function(){
		$(this).removeClass("works-card").addClass("works-card-hover");
	},
	function(){
		$(this).removeClass("works-card-hover").addClass("works-card");
});
$(".burger-menu").click(function(){
	var nameBurger = ($(this).attr("id"));
	  if ( nameBurger == "main-menu") {
			$(".main-menu").slideToggle(500).css("display", "block");
			
		}
		else {
			$(".tabs-control-container ul").slideToggle(500).css("display", "block")		 
	}
});

$(".tab-item").not(":first").hide();
$(".tab-control").click(function() {
	$(".tab-control").eq($(this).index());
	$(".tab-item").hide().eq($(this).index()).fadeIn();
	$(".tab-control-active").removeClass("tab-control-active");
	$(this).addClass("tab-control-active");
});
$('.slider').slick({
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear'
});

/* SLIDER-CAROUSEL*/
$('.slider-carousel').slick({
  dots: false,
	arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
	autoplay: true,
	draggable: true,
	touchMove: true,
	
})
	$("[data-fancybox]").fancybox({
		loop: true,
		arrow: true,
		speed: 300,
		keyboard : true,
		    buttons : [
        'slideShow',
        'fullScreen',
        'share',
        'close'
    ],
	});
$(window).load(function(){
	var widthWindow = $(window).width();
	var margTabContent = $('.tab-content').offset().left + 'px';
	

	if (widthWindow >= '1200') {
	$('.slide-item-text').css('margin-left', margTabContent);
	
	}
	
	else {
		
	}
	
})

	/*
	$('.slick-next').click( function(){
		var slideCount = ($('.slide-image').length)
 if (slideCount < slideCount) {
	 $('.slide-text').css('display', 'none');
	 $('.slide-text').next().css('display block')
 }
	else if (slideCount >slideCount) {
	 $('.slide-text').css('display', 'none');
	 $('.slide-text:first-child').css('display', 'block');
	}
	else {
		
	}
	})
*/


})


