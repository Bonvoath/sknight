$(document).ready(function() {
	$().UItoTop({ easingType: 'easeOutQuart' });

	resize_menu();
	$(window).resize(function(){
		resize_menu();
	});

	function resize_menu(){
		var screen_size = $(window).innerHeight();
		var targets = $('.dropdown-menu');
		$.each(targets, function(index, element) {
			target_height = $(element).height() + 60;
			if(target_height >= screen_size){
			var screen_space = screen_size - 60;
				$(element).css({ height:screen_space});
			}else{
				$(element).css({ height:'auto'});
			}
		});
	}

	/* --------------- camara slider ------------------ */
	$('.camaraslide').camera({
				height: '48%',
				playPause: false
	});
});
