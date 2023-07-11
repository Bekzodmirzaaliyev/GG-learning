import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Autoplay continues even when user interacts with slides
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const verticalSwiper__top__wrapper = new Swiper('.vertical-swiper-top', {
        direction: 'vertical',
        loop: true,
        
        autoplay: {
            delay: 3500, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Autoplay continues even when user interacts with slides
        },
    });

    const verticalSwiper__bottom__wrapper = new Swiper('.vertical-swiper-bottom', {
        direction: 'vertical',
        loop: true,
        
        autoplay: {
            delay: 4000, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Autoplay continues even when user interacts with slides
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    

})