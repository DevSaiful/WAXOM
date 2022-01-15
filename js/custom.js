$(function () {
    // sticky header 
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.navbar').addClass('sticky_header');
        } else {
            $('.navbar').removeClass('sticky_header');
        }
    });

    //  slick.js Plugin

    $('.banner-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    });

// service slick
    
    $('.service-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,

        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
 
          ]



    });

// blog slick
    $('.blog-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,

        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
 
          ]
        
    });

// product slick

    $('.product-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,

        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
 
          ]
    });

    // mixit up /queryy work 

    var containerEl = document.querySelector('.project-mixitup');

    var mixer = mixitup(containerEl);


    // venobox my video link
    new VenoBox({
        selector: '.my-video-links',
    });

    // CountQueuingStrategy.js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // backtotop
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 800){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    //==== Animate the scroll back to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

});