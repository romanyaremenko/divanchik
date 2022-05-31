$(function() {

    // var swiper = new Swiper(".mySwiper", {
    //     navigation: {
    //         nextEl: ".slider-btn__next",
    //         prevEl: ".slider-btn__prev",
    //     },
    // });

    var flipText = new Swiper(".flip-text", {
        wrapperClass:"flip-wrapper-text",
        slideClass:"flip-slide-text",
        navigation: {
            nextEl: ".flip-btn__next",
            prevEl: ".flip-btn__prev",
        },
    });

    var flip  = new Swiper(".flip", {
        effect: "flip",
        // slidesPerView:1,
        // effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["100%", 0, 0],

            },
            next: {
                // shadow: true,
                translate: [0, 0, -800],
                rotate: [-180, 0, 0],
            },
        },
        navigation: {
            nextEl: ".flip-btn__next",
            prevEl: ".flip-btn__prev",
        },
        wrapperClass:"flip-wrapper",
        slideClass:"flip-slider",
    });



    var flip2  = new Swiper(".flip2", {
        effect: "flip",
        // slidesPerView:1,
        // effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["100%", 0, 0],

            },
            next: {
                // shadow: true,
                translate: [0, 0, -800],
                rotate: [-180, 0, 0],
            },
        },
        navigation: {
            nextEl: ".flip-btn__next2",
            prevEl: ".flip-btn__prev2",
        },
        wrapperClass:"flip-wrapper2",
        slideClass:"flip-slider2",
    });

    var flipText2 = new Swiper(".flip-text2", {
        wrapperClass:"flip-wrapper-text2",
        slideClass:"flip-slide-text2",
        navigation: {
            nextEl: ".flip-btn__next2",
            prevEl: ".flip-btn__prev2",
        },
    });


    var flip3  = new Swiper(".flip3", {
        // effect: "flip",
        // slidesPerView:1,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["100%", 0, 0],

            },
            next: {
                // shadow: true,
                translate: [0, 0, -800],
                rotate: [-180, 0, 0],
            },
        },
        navigation: {
            nextEl: ".flip-btn__next3",
            prevEl: ".flip-btn__prev3",
        },
        wrapperClass:"flip-wrapper3",
        slideClass:"flip-slider3",
    });

    console.log("test")
});
