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
    var nProjecto = $(this).attr('nProject');
    var pTitulo = $(this).attr('pTitle');
    var pDescr = $(this).attr('pDescripcion');
    let element = []

      for (var i=0;i<nfoto;i++){
        element.push({ 
          "src": '../img/project/'+nProjecto+'/project'+project+'/fullsize/'+(i+1)+'.jpg',
          'thumb': '../img/project/'+nProjecto+'/project'+project+'/fullsize/'+(i+1)+'.jpg',
          'subHtml': '<h4>'+pTitulo+'</h4><p>'+pDescr+'</p>'  
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

// Al hacer click, animar el scroll hacia arriba
    $('.arrow-up').click( function( e ) {

      e.preventDefault();
      $('html, body').animate( {scrollTop : 400}, 800 );

    });   
   
window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });


  function isMobile() {
    try{ 
        document.createEvent("TouchEvent"); 
        return true; 
    }
    catch(e){ 
        return false;
    }
}


//Detectar si la pagina se visualiza desde un movil
//Si es movil se muestra tooltip y luego se desabilita
//Si no es movil se muestra tooltip y se mantiene

var flag = 0;
$(window).ready(function() {
  var mobile = isMobile();
  if (mobile) {
    $(window).scroll(function() {
      var pos = window.scrollY;
      if (pos > 400 && flag == 0) {
        $('[data-toggle="tooltip"]').tooltip();
        $("#element").tooltip("show");
        setTimeout(
          function() {
            $("#element").tooltip("hide");
            $('[data-toggle="tooltip"]').tooltip("disable");
          },
          3000,
          "JavaScript"
        );
        flag++;
      }
    });
  } else {
    $('[data-toggle="tooltip"]').tooltip();
    $(window).scroll(function() {
      var pos = window.scrollY;
      if (pos > 400 && flag == 0) {
        $("#element").tooltip("show");
        setTimeout(
          function() {
            $("#element").tooltip("hide");
          },
          3000,
          "JavaScript"
        );
        flag++;
      }
    });
  }
});