$(document).ready(function(){

    $('.js-login').on('click', function(){
        $('.header_btns').slideToggle(400);
    });

    $('.js-burger').on('click', function() {
        $(this).toggleClass('nav-active');
        $('.header_nav').slideToggle(400);
    });

    $('.js_tabs-link').on('click', function(e){
        e.preventDefault();
        var tabNum = $(this).attr('href');
        $(this).addClass('tab-active');
        $(this).parent().siblings().find('.js_tabs-link').removeClass('tab-active');
        $(tabNum).show(400);
        $(tabNum).addClass('.tab-active');
        $(tabNum).siblings().hide(400);
        $(tabNum).siblings().removeClass('.tab-active');
    });
});

$('.container_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    pauseOnHover: true,
    dots: true,
    arrows: true,
    appendArrows: $('.trending_products-nav'),
    prevArrow: '<button class="testimonials_arrow testimonials_prev"><i class="icon-angle-down"></i></button>',
    nextArrow: '<button class="testimonials_arrow testimonials_next"><i class="icon-angle-down"></i></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3                
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2                                
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,                
                dots: false,
                centerMode: true,
                variableWidth: true                                                                                     
            }
        }
    ]    
  });

if($('.js_range').length > 0) {
  $(".js_range").ionRangeSlider({
      type:"double",
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$",
      skin: "round"
  });
}

if($('.js_card').length > 0  && $('.js_list').length > 0) {
    $('.js_card').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.content_row').removeClass('content_list').addClass('content_card');
    });

    $('.js_list').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.content_row').removeClass('content_card').addClass('content_list');
    });
}

if($(window).width() < 768) {
    $('.sidebar_title').on('click', function(){
        $(this).next().slideToggle(400);
        $(this).parent().siblings().find('.sidebar_main').slideUp(400);
    });
}
