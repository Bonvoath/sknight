var deviceScroll = function ($element, diviser) {

		$(window).scroll(function() {
			var yOffset =  $element.offset().top - ($(document).scrollTop() + $(window).height()/diviser)

			$element.css({
				top: (yOffset/4) +'px',
			});
		});
	}
$(document).ready(function() {
   $('.inner--device .screen').each(function() {
	 	var divisable = $(this).attr('data-divider');
	 	deviceScroll($(this)
	 		, divisable
		);
	}); 
});