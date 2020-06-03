$(document).ready(function(){
	/* Owlcarousel start */
	$('.logo-slider').owlCarousel({
		items: 4,
		smartSpeed: 2000,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		margin: 30,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 4
			},
			1000: {
				items: 4
			},
			1200: {
				items:4
			}
		}
	});

	/* -- out- typed js --*/
	var typed = new Typed('.typing-1', {
		strings: ["Web Developer..",
		"Web Designer...", 
		"UI/UX Designer...",
		"Graphics Designer"],
		loop:true,
		backSpeed:100,
		typeSpeed: 100,
		backDelay: 200
	});


	/*-- fixd-top Headroom --*/
		var myElement = document.querySelector(".headroom");
		// construct an instance of Headroom, passing the element
		var headroom  = new Headroom(myElement);
		// initialise
		headroom.init();


	/* -- magnific-popup js --*/
	$('.play-btn').magnificPopup({
		type:'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>',

			patterns: {
				youtube: {
					index: 'youtube.com/',

					id: 'v=',

					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			},
			srcAction: 'iframe_src',
		}
	});






});