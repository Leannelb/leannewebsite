(function($) {
	$(document).ready(function() {

		//Smooth Scroll
		var scrollAnimationTime = 1200,
	        scrollAnimation = 'easeInOutExpo';
	    $('a.scrollto').bind('click.smoothscroll', function (event) {
	        var target = this.hash;
	        if($(target).length){
		        event.preventDefault();
		        $('html, body').stop().animate({
		            'scrollTop': $(target).offset().top
		        }, scrollAnimationTime, scrollAnimation, function () {
		            /*window.location.hash = target;*/
		        });
	        }
	    });

	});

	$(window).resize(function () {
	    waitForFinalEvent(function(){

	    }, 500, "TE7c79NYwz");
	});

	var waitForFinalEvent = (function () {
	  var timers = {};
	  return function (callback, ms, uniqueId) {
	    if (!uniqueId) {
	      uniqueId = "Don't call this twice without a uniqueId";
	    }
	    if (timers[uniqueId]) {
	      clearTimeout (timers[uniqueId]);
	    }
	    timers[uniqueId] = setTimeout(callback, ms);
	  };
	})();

})(jQuery);


function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}

/*
jQuery(document).ready(function() {

	//Navigation
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

    //Background slideshow
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.section-4-container').backstretch("assets/img/backgrounds/1.jpg");

    //Wow
    new WOW().init();

});*/