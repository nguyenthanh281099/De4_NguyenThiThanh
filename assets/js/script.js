$(document).ready(function (params) {
    $('#slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    }); 
    $('.main-title').click(function (){
        let key = $(this).attr('key');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('.multi').each(function (){
            $(this).removeClass('active');
            if ($(this).attr('key-frame')==key) {
                $(this).addClass('active');
            }
        })
    });
    $('.menu-icon').click(function (){
        $('.navbar').addClass('active');
        $('.coat').css('display', 'block');
    });
    $('.coat').click(function (){
        $('.navbar').removeClass('active');
        $('.coat').css('display', 'none');
    })
});