const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 50,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
