//JavaScript

new Swiper("#swiper2", {
    slidesPerView: 1.25,
    centeredSlides: true,
    spaceBetween: 12,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    lazyLoading: true,
    pagination: {
        el: ("#swiper2 .swiper-custom-pagination"),
        clickable: true,
        renderBullet: function(index, className) {
            return `<div class=${className}>
            <span class="line"></span>
            </div>`
        }
    }
});

const selectElement = (element) => document.querySelector(element);
selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});