$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'horizontal',
        captions: true,
        slideWidth: 800,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 10
    });

    $('.slider-nav a').click(function(){
        $('.slider-nav a').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function(){
    var slider = $('.slider').bxSlider({
        mode: 'horizontal',
        captions: true,
        slideWidth: 800,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 10
    });

    $('.slider img').on('click', function(){
        $('.slider img').removeClass('active');
        $(this).addClass('active');
        $(this).css({
            'width': '120%',
            'height': 'auto',
            'border-radius': '20px',
            'cursor': 'zoom-out'
        });

        $('.slider img').not(this).css({
            'width': '100%',
            'height': 'auto',
            'border-radius': '10px',
            'cursor': 'pointer'
        });
    });
});

