/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


gsap.registerPlugin(ScrollTrigger);
 

gsap.from(".icons-row1", {
  scrollTrigger: {
	trigger: ".icons-row1",
	toggleActions: "play none restart none"
  },
  duration:1, opacity:0, y: "-400", stagger: ".3"
})

gsap.from(".icons-row2", {
  scrollTrigger: {
	trigger: ".icons-row2",
	toggleActions: "play none restart none"
  },
  duration:1, opacity:0, y: "-400", stagger: ".4"
})

gsap.from(".icons-row3", {
  scrollTrigger: {
	trigger: ".icons-row3",
	toggleActions: "play none restart none"
  },
  duration:1, opacity:0, y: "-400", stagger: '.5'
})

gsap.from(".portfolio1", {
    scrollTrigger: {
      trigger: ".portfolio1",
      toggleActions: "play none restart none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })

  gsap.from(".portfolio2", {
    scrollTrigger: {
      trigger: ".portfolio2",
      toggleActions: "play none restart none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease:"circ"
  })

  gsap.from(".portfolio3", {
    scrollTrigger: {
      trigger: ".portfolio3",
      toggleActions: "play none restart none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })

  gsap.from(".portfolio4", {
    scrollTrigger: {
      trigger: ".portfolio4",
      toggleActions: "play none restart none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })

  gsap.from(".portfolio5", {
    scrollTrigger: {
      trigger: ".portfolio5",
      toggleActions: "play none restart none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })

  gsap.from(".portfolio6", {
    scrollTrigger: {
      trigger: ".portfolio6",
      toggleActions: "play none restart none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })




(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);