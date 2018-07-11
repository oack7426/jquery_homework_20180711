$(document).ready(function() {
    // carousel
    $('.bxslider').bxSlider({
        mode: 'fade',
        speed: 1000,
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        adaptiveHeight: false
    });
    //Lightbox
    $(function() {
        $('.gallery a').lightbox();
    });

    $('nav>ul>li').click(function() {
        $(this).find('.drop').slideToggle();
        $(this).siblings().find('.drop').slideUp();
    });
    $('.goto_top a').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    });
    $('.ad>.close').click(function() {
        $('.ad').css('opacity', '0');
    });
});