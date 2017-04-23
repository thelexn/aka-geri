$(function() {
	smoothScroll(500);

	// $(window).on("load",function(){
	// });
});


function smoothScroll (duration) {

	$('a[href^="#"]').on('click',function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate( {scrollTop: target.offset().top}, duration );
    }

	});

}
