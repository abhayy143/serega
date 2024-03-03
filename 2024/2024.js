$(document).ready(function(){
	var timer; // variable to store timer
	
	$('.carousel').carousel({
		padding: 200
	});
	
	autoplay();
	
	function autoplay() {
		$('.carousel').carousel('next');
		timer = setTimeout(autoplay, 2000);
	}
	
	
	
	// Pause autoplay on hover
	$('.carousel').hover(
		function() {
			clearTimeout(timer); // Clear the timer when hovered
		},
		function() {
			autoplay(); // Restart autoplay when not hovered
		}
	);
	});

