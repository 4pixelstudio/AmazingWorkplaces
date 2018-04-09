$('.mobile-menu-trigger').click(function(){

    var check = $( "#nav-links" ).hasClass( "collapse-in")
    if(check)
    {
        
        $('#nav-links-items').removeClass('d-block');
        $('#nav-links-items').addClass('d-flex');
        $("#nav-links").removeClass('collapse-in');
        $("#nav-links").addClass('collapse-out');
    }
    else{       
        $("#nav-links").removeClass('collapse-out');
        $("#nav-links").addClass('collapse-in');
        $('#nav-links-items').removeClass('d-flex');
        $('#nav-links-items').addClass('d-block');
    }
});

$( window ).resize(function() {
    if($(window).width() >= 576)
    {
        $('#nav-links-items').removeClass('d-block');
        $('#nav-links-items').addClass('d-flex');
    }     
    else
    {
        $("#nav-links").removeClass('collapse-in');
        $('#nav-links-items').removeClass('d-flex');
        $('#nav-links-items').addClass('d-block');
    }
});

jQuery(window).on('scroll', function(){
    if (jQuery(this).scrollTop() > 100) {
        jQuery('#toTop').fadeIn();
    } else {
        jQuery('#toTop').fadeOut();
    }

    if ($(window).scrollTop() > 120.91) {
        $('#nav-links').addClass('navbar-fixed-top');
    }
  
    if ($(window).scrollTop() < 120.91) {
        $('#nav-links').removeClass('navbar-fixed-top');
    }
}); 

jQuery('#toTop').on('click', function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 700);
    return false; 
});