const swiper1 = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});


const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.header__list');
const menuLink = document.querySelectorAll('.header__link');
const Btn = document.querySelector('.btn');
const headerContent = document.querySelector('.header__content');


menuBtn.addEventListener('click', ()=> {
    menuList.classList.toggle('open')
    menuBtn.classList.toggle('open')

});

headerContent.addEventListener('click', ()=> {
    menuList.classList.remove('open')
    menuBtn.classList.remove('open')
});





