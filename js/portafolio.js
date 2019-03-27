 jQuery(document).ready(function() {
	// Standard
	jQuery('.tabs.standard .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
});

 // Collapse Navbar
 var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

    

   
  


//Open Gallery
   $(document).ready(function() {
	$('.label-galery a').on('click', function(e)  {
		var project = $(this).attr('href');
    var nfoto = $(this).attr('nFotos');

    let element = []

      for (var i=0;i<nfoto;i++){
        element.push({ 
          "src": '../img/project/project'+project+'/fullsize/'+(i+1)+'.jpg',
          'thumb': '../img/project/project'+project+'/thumbnails/'+(i+1)+'.jpg',
          'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'  
        },)
    }
    var cl=$(this).lightGallery({
        share: false,
        actualSize: false,
        fullScreen: false,
        dynamic: true,
        dynamicEl: element,
    });
    cl.on('onBeforeClose.lg',function(event, index, fromTouch, fromThumb){   
      cl.data('lightGallery').destroy(true);
      }); 

    e.preventDefault();	
	});
});


    // al hacer click, animar el scroll hacia arriba
    $('.arrow-up').click( function( e ) {

      e.preventDefault();
      $('html, body').animate( {scrollTop : 400}, 800 );

    });


      $('[data-toggle="tooltip"]').tooltip()
    
     window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });