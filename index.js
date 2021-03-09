$(document).ready(function() {  
    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 750) {
            $('.bottomMenu').fadeIn();
        } else {
            $('.bottomMenu').fadeOut();
        }
    });

    $("#top-icon").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-0
            }, 1000);
    });

    // add padding top to show content behind navbar
    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

    // detect scroll top or down
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }

    $(".collapse").on('show.bs.collapse', function() {
        $(this).prev(".panel-heading").find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
      }).on('hide.bs.collapse', function() {
        $(this).prev(".panel-heading").find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
      });
});

