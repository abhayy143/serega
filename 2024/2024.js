$(document).ready(function(){
	var timer; // variable to store timer
	
	$('.carousel').carousel({
		padding: 200
	});
	
	autoplay();
	
	function autoplay() {
		$('.carousel').carousel('next');
		timer = setTimeout(autoplay, 1750);
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

	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
  
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	  } else {
		navbar.classList.remove("sticky");
	  }
	}