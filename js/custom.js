$(function () {
    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteracton: false,
        },

        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',

        }
    })

    const MAINEVENTSLIDE = new Swiper('.main_event_slide', {
        slidesPerView: 4,
        spaceBetween: 30,

        navigation: {
            nextEl: '.main_event .arrows .next',
            prevEl: '.main_event .arrows .prev',

        }
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $('.familySite>a').on('click', function (e) {
        e.preventDefault();
        $('.familySite ul').slideToggle()
    })

});