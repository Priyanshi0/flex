$(document).ready(function(){

  $('.mob_main_menu').hide();
  $('.mob_sub_menu').hide();

  $('.bar_icon').click(function () {
    $('.mob_main_menu').slideToggle();
  })
  $('.mob_main_menu>li>a').click(function () {
    $(this).next('.mob_sub_menu').slideToggle();
  });

  $('#logo-slid').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});

$('#test').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:1
      }
  }
});

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 60) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

      $('.bottom-top').on("click",function(){
        var percentageToScroll = 100;
        var percentage = percentageToScroll/100;
        var height = $(document).scrollTop();
        var scrollAmount = height * (1 - percentage);
    
        // alert(scrollAmount);
        $('html,body').animate({ scrollTop: scrollAmount }, 'slow', function () {
           });

    });

    $.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 750,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 23,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 200,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 28,duration: 2500});

// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


  $("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
  

  wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          }
          )
          wow.init();



});