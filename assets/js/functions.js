$(function() {
	smoothScroll(500);
	adjustBackgroud(575);

});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top }, duration);
    }
	}
});

function adjustBackgroud (breakpoint) {
	$(window).on("load resize", function() {
		//set BG-Img full display-height
		$(".header-wrap").css("height", window.innerHeight);

		//place Headline on the bottom of the front-page
		if (window.innerWidth > breakpoint){
			$("#headline").css("top", window.innerHeight - 215);
		} else {
			$("#headline").css("top", window.innerHeight - 255);
		}
});
