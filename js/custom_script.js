$(document).ready(function(){
	new WOW().init();
  	$(window).on("resize", function (e) {
        checkScreenSize();
    });

    
	$('#client_testimonial').owlCarousel({
	     margin:30,
	     loop:true,
		 slideSpeed : 300,
		paginationSpeed : 400,
		center:true,
		autoplay:true,
		nav:true,
		pagination:true,  dots: false,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:1
	        },
	        700:{
	            items:1
	        },
	        1000:{
	            items:3
	        },
	        1100:{
	            items:3
	        }
	    }
	}); 

  
    jQuery(".accordion-heading").click(function(e){
      if(!$(this).closest(".accordion-box").hasClass("open"))
    {
      $(".accordion-box .accordion_body").slideUp();
      $(".accordion-box").removeClass("open");
      $(this).closest(".accordion-box").find(".accordion_body").slideToggle();
      $(this).closest(".accordion-box").toggleClass("open");
    }
    else
    {
      $(".accordion-box .accordion_body").slideUp();
      $(".accordion-box").removeClass("open");
    }
  });

	 
});
