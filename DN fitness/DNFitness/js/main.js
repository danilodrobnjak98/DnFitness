(function ($) {
  "use strict";
  
  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
   });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });
  
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	/*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
	window.sr = ScrollReveal();
	sr.reveal('.foo', { duration: 1000, delay: 15 });

	/*--/ Carousel owl /--*/
	$('#carousel').owlCarousel({
		loop: true,
		margin: -1,
		items: 1,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});

	/*--/ Animate Carousel /--*/
	$('.intro-carousel').on('translate.owl.carousel', function () {
		$('.intro-content .intro-title').removeClass('zoomIn animated').hide();
		$('.intro-content .intro-price').removeClass('fadeInUp animated').hide();
		$('.intro-content .intro-title-top, .intro-content .spacial').removeClass('fadeIn animated').hide();
	});

	$('.intro-carousel').on('translated.owl.carousel', function () {
		$('.intro-content .intro-title').addClass('zoomIn animated').show();
		$('.intro-content .intro-price').addClass('fadeInUp animated').show();
		$('.intro-content .intro-title-top, .intro-content .spacial').addClass('fadeIn animated').show();
	});

	/*--/ Navbar Collapse /--*/
	$('.navbar-toggle-box-collapse').on('click', function () {
		$('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
	});
	$('.close-box-collapse, .click-closed').on('click', function () {
		$('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
		$('.menu-list ul').slideUp(700);
	});

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).bind('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-default').addClass('navbar-reduce');
			$('.navbar-default').removeClass('navbar-trans');
		} else {
			$('.navbar-default').addClass('navbar-trans');
			$('.navbar-default').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Property owl /--*/
	$('#property-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Property owl owl /--*/
	$('#property-single-carousel').owlCarousel({
		loop: true,
		margin: 0,  
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/*--/ News owl /--*/
	$('#new-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {  
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Testimonials owl /--*/
	$('#testimonial-carousel').owlCarousel({
		margin: 0,
		autoplay: true,
		nav: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeInUp',
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

function citaj() {

	//load();
	promena();
}
function sortiraj(a,b) {
	return parseInt(b.ocena) - parseInt(a.ocena);
}

function promena() {
	
	var niz=[];
	niz[0]={
		ocena: parseInt(localStorage.getItem("ocena")),
		trening: "Astanga joga"
	}
	niz[1]={
		ocena:parseInt(localStorage.getItem("ocena1")),
		trening: "Battle ropes"
	}
	niz[2]={
		ocena:parseInt(localStorage.getItem("ocena2")),
		trening: "Body attack"
	}
	niz[3]={
		ocena:parseInt(localStorage.getItem("ocena3")),
		trening: "Core burn"
	}
	niz[4]={
		ocena:parseInt(localStorage.getItem("ocena4")),
		trening: "DN core"
	}
	niz[5]={
		ocena:parseInt(localStorage.getItem("ocena5")),
		trening: "Dynamic core"
	}
	niz[6]={
		ocena:parseInt(localStorage.getItem("ocena6")),
		trening: "Klasicni pilates"
	}
	niz[7]={
		ocena:parseInt(localStorage.getItem("ocena7")),
		trening: "Reformer pilates"
	}
	niz[8]={
		ocena:parseInt(localStorage.getItem("ocena8")),
		trening: "Scott pilates"
	}
	niz[9]={
		ocena:parseInt(localStorage.getItem("ocena9")),
		trening: "Tradicionalni pilates"
	}
	niz[10]={
		ocena:parseInt(localStorage.getItem("ocena10")),
		trening: "Karma joga"
	}
	niz[11]={
		ocena:parseInt(localStorage.getItem("ocena11")),
		trening: "Kraljevska joga"
	}
	niz[12]={
		ocena:parseInt(localStorage.getItem("ocena12")),
		trening: "Prental joga"
	}
	niz[13]={
		ocena:parseInt(localStorage.getItem("ocena13")),
		trening: "Kik boks"
	}
	niz[14]={
		ocena:parseInt(localStorage.getItem("ocena14")),
		trening: "Tabata cardio"
	}
	niz[15]={
		ocena:parseInt(localStorage.getItem("ocena15")),
		trening: "Zumba"
	}



	for (let i = 0; i < niz.length-1; i++) {
		for(let j=i+1;j<niz.length;j++){
			if(niz[i].ocena<niz[j].ocena){
				//zamena ocena
				let o=niz[i].ocena;
				niz[i].ocena=niz[j].ocena;
				niz[j].ocena=o;

				//zamena trening
				let ime=niz[i].trening;
				niz[i].trening=niz[j].trening;
				niz[j].trening=ime;

			}
		}
		
	}
	let str1="1) ";
	let str2=niz[0].trening;
	str2=str2.bold();
	str1+=str2;

	let str3="2) ";
	let str4=niz[1].trening;
	str4=str4.bold();
	str3+=str4;

	let str5="3) ";
	let str6=niz[2].trening;
	str6=str6.bold();
	str5+=str6;


	
	document.getElementById("top1").innerHTML=str1;
	document.getElementById("top2").innerHTML=str3;
	document.getElementById("top3").innerHTML=str5;





	
	
}