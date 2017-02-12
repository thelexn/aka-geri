$(function() {
	smoothScroll(500);

	$(window).on("load resize", function() {
		// console.log(window.innerHeight + "-" + window.innerWidth);
		$(".header-wrap").css("height", window.innerHeight);
		if (window.innerWidth > 653){
			$("#headline").css("top", window.innerHeight - 220);
		} else {
			$("#headline").css("top", window.innerHeight - 255);
		}
	});

});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});

}
