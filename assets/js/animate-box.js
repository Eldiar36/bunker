var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 150,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')
swiperPrev.addEventListener('click', () => {
    mySwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
    mySwiper.slideNext();
})