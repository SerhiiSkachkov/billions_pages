'use strict';

function setWrapperHeight() {
	if($('.intro.auth').length > 0){
		var height = $('.intro.auth').outerHeight();
		$('.wrapper').css('min-height', height + 'px');
	}
}

function checkFieldFilling(label) {

	if (label.closest('.form-group').find('.form-control:first').hasClass('scroll-wrapper')) {
		var inp = label.closest('.form-group').find('.form-control:not(.scroll-wrapper)');
		var inpVal = inp.val();
		var inpWrap = label.closest('.form-group');

		inp.on('focus',function(e) {
			inpWrap.addClass('is-filled');
			$(this).closest('div.form-control').addClass('focus');
		});

		inp.on('blur',function(e) {
			$(this).closest('div.form-control').removeClass('focus');
		});

		if (inpVal) {
			inpWrap.addClass('is-filled');
		} else {
			inpWrap.removeClass('is-filled');
		}
	} else {
		var inpWrap = label.closest('.form-group');
		var inpVal = label.closest('.form-group').find('.form-control').val();

		if (inpVal) {
			inpWrap.addClass('is-filled');
		} else {
			inpWrap.removeClass('is-filled');
		}
	}
}

if($('.js-select').length > 0){
    $('.js-select').select2({
       language: 'ru',
       width: '100%',
       minimumResultsForSearch: Infinity,
    });
};
$('.js-like').click(function(e){
	e.preventDefault();
	$(this).children('.mdi').addClass('liked');
})
$('.select2-selection__arrow').append('<span class="mdi mdi-chevron-down"></span>');
$('b[role="presentation"]').hide();

$('.js-priview-lg').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: false,
  	fade: true,
  	asNavFor: '.js-priview-sm'
});

$('.js-priview-sm').slick({
	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	dots: false,
  	arrows: true,
  	focusOnSelect: true,
  	asNavFor: '.js-priview-lg'
});

(function($) {
	var $win = $(window), $body_m = $('body'), $navbar = $('.navbar');

	// Sticky
	var $is_sticky = $('header');
	if ($is_sticky.length > 0 ) {
		$win.scroll(function(){
			var $scroll = $win.scrollTop();
			if ($win.width() > 991 || $is_sticky.hasClass('mobile-sticky')) {
				if($scroll > 0 ){
					if(!$is_sticky.hasClass('visible-header_js')) {$is_sticky.addClass('visible-header_js');}
				} else {
					if($is_sticky.hasClass('visible-header_js')) {$is_sticky.removeClass('visible-header_js');}
				}
			} else {
				if(!$is_sticky.hasClass('visible-header_js')) {$is_sticky.addClass('visible-header_js');}
			}
		});
	}
	// Get Window Width
	function winwidth () {
		return $win.width();
	}
	var wwCurrent = winwidth();
	$win.on('resize', function () {
		wwCurrent = winwidth();
	});
	// OnePage Scrolling
	$('a.menu-link[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var toHash = $(this.hash), toHashN = (this.hash.slice(1)) ? $('[name=' + this.hash.slice(1) + ']') : false, nbar = $navbar.height();

			toHash = toHash.length ? toHash : toHashN;
			if (toHash.length) {
				$('html, body').animate({
					scrollTop: (toHash.offset().top - nbar)
				}, 1000);
				return false;
			}
		}
	});

	setWrapperHeight();
})(jQuery);

$(window).on('load',function() {
	$('.textarea-scrollbar').scrollbar();

	if ($('label.swim').length > 0) {
		$('label.swim').each(function() {
			checkFieldFilling($(this));
		});
		$('label.swim').closest('.form-group').find('.form-control').blur(function() {
			checkFieldFilling($(this));
		});
	}

	// Global variables
	var userAgent = navigator.userAgent.toLowerCase(),
		initialDate = new Date(),

		$document = $(document),
		$window = $(window),
		$html = $("html"),
		$body = $("body"),

		isDesktop = $html.hasClass("desktop"),
		isRtl = $html.attr("dir") === "rtl",
		isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		windowReady = false,
		isNoviBuilder = false,
		plugins = {
			particles: $('.js_particles')
		},
		plugins2 = {
			particles: $('.js_particles-2')
		},
		plugins3 = {
			particles: $('.js_particles-3')
		};


	/**
	* canvas animation
	*/
	if (plugins.particles.length) {
		for(var i=1; i<=plugins.particles.length; i++) {
			particlesJS("js_particles-" + i, {
				"particles": {
					"number": {
						"value": 2000,
						"density": {
							"enable": true,
							"value_area": 3000
						}
					},
					"color": {
						"value": "#888787"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#000000"
						},
						"polygon": {
							"nb_sides": 5
						},
						"image": {
							"src": "img/github.svg",
							"width": 100,
							"height": 100
						}
					},
					"opacity": {
						"value": 1,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.2,
							"sync": false
						}
					},
					"size": {
						"value": 1.5,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 100,
						"color": "#888787",
						"opacity": 0.3,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 1,
						"direction": "none",
						"random": true,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "grab"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 140,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			});
		}
	}

	if (plugins2.particles.length) {
		for(var i=1; i<=plugins2.particles.length; i++) {
			particlesJS("js_particles-2-" + i, {
				"particles": {
					"number": {
						"value": 3000,
						"density": {
							"enable": true,
							"value_area": 2000
						}
					},
					"color": {
						"value": "#aaaaaa"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#000000"
						},
						"polygon": {
							"nb_sides": 5
						},
						"image": {
							"src": "img/github.svg",
							"width": 100,
							"height": 100
						}
					},
					"opacity": {
						"value": 1,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.2,
							"sync": false
						}
					},
					"size": {
						"value": 1.5,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 50,
						"color": "#888787",
						"opacity": 0.3,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 1,
						"direction": "none",
						"random": true,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "grab"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 140,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			});
		}
	}

	if (plugins3.particles.length) {
		for(var i=1; i<=plugins3.particles.length; i++) {
			particlesJS("js_particles-3-" + i, {
				"particles": {
					"number": {
						"value": 4000,
						"density": {
							"enable": true,
							"value_area": 1500
						}
					},
					"color": {
						"value": "#aaaaaa"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#000000"
						},
						"polygon": {
							"nb_sides": 5
						},
						"image": {
							"src": "img/github.svg",
							"width": 100,
							"height": 100
						}
					},
					"opacity": {
						"value": 1,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.2,
							"sync": false
						}
					},
					"size": {
						"value": 1,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 40,
						"color": "#888787",
						"opacity": 0.3,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 1,
						"direction": "none",
						"random": true,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "grab"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 140,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			});
		}
	}
});
    function qtySelectors() {
      $('.js-qty__adjust').on('click', function (e) {
        e.preventDefault();
        var $el = $(this),
          $qtySelector = $el.closest('.count').find('.js-qty__num'),
          qty = parseInt($qtySelector.val());
        if ($el.hasClass('js-qty__adjust--plus')) {
          qty += 1;
        } else {
          qty -= 1;
          if (qty <= 0) qty = 0;
        }
        $qtySelector.val(qty);
        console.log(qty)
      });
    };
    qtySelectors();

$(window).on('resize',function() {
	setWrapperHeight();
});