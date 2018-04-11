$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item: 2,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 15,
        speed: 400, //ms'
        auto: true,
        loop: true,
        freeMove:true,
        pause:5000,
        responsive : [
          {
              breakpoint:768,
              settings: {
                  item:1,
                  slideMove:1,
                  slideMargin:6,
                }
          }
      ]
    });
});

$(document).ready(function() {
    $("#lightSlider-comments").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 15,
        speed: 400, //ms'
        auto: true,
        loop: true,
        freeMove:true,
        pause:5000,
        controls: false,
    });
});

$('.mobile-menu-trigger').click(function(){

    var check = $( "#nav-links" ).hasClass( "collapse-in")
    if(check)
    {
        
        $('#nav-links-items').removeClass('d-block');
        $('#nav-links-items').addClass('d-flex');
        $("#nav-links").removeClass('collapse-in');
        $("#nav-links").addClass('collapse-out');
        $('#nav-links').height('-16px');
    }
    else{       
        $("#nav-links").removeClass('collapse-out');
        $("#nav-links").addClass('collapse-in');
        $('#nav-links-items').removeClass('d-flex');
        $('#nav-links-items').addClass('d-block');
        $('#nav-links').height('254px');
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

$("#to-comments-section").click(function() {
    $('html, body').animate({
        scrollTop: $("#comments-section").offset().top
    }, 1300);
});

$(".user-reply").click(function() {
    $('html, body').animate({
        scrollTop: $("#user-comment-row").offset().top
    }, 1300);

    $('#comment').focus();
});