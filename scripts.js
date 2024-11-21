// карусельки
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

// бурег меню
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.header__list');
const menuLink = document.querySelectorAll('.header__link');
const Btn = document.querySelector('.btn');
const bannerContent = document.querySelector('.banner__content');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('open');
    menuBtn.classList.toggle('open');
});


bannerContent.addEventListener('click', ()=> {
    menuList.classList.remove('open')
    menuBtn.classList.remove('open')
});






// Показать форму при нажатии на кнопку
// const showFormButton = document.getElementById('showFormButton');
// const contactForm = document.getElementById('contactForm');
// showFormButton.addEventListener('click', () => {
//     contactForm.style.display = 'block';
//     showFormButton.style.display = 'none';
// });

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("JavaScript загружен");

//   const contactForm = document.getElementById("contactForm");
//   if (contactForm) {
//     console.log("Форма найдена");
//     contactForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       console.log("Кнопка нажата, отправка данных");

//       const name = document.querySelector("#name").value;
//       const email = document.querySelector("#email").value;
//       const phoneNumber = document.querySelector("#phoneNumber").value;

//       console.log({ name, email, phoneNumber }); // Проверяем данные

//       fetch("https://script.google.com/macros/s/AKfycbwJgB1C8eQCF9XiSm0nWvZ1VBwmow1WL_Shid3oId_Y1uYt4wzNlsiNY0M-v6R4tJrj/exec", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, phoneNumber }),
//       })
//         .then((response) => {
//           if (!response.ok) throw new Error("Ошибка сервера");
//           return response.json();
//         })
//         .then((data) => {
//           console.log("Данные отправлены", data);
//           alert("Данные успешно отправлены!");
//           contactForm.reset();
//         })
//         .catch((error) => {
//           console.error("Ошибка:", error);
//         });
//     });
//   } else {
//     console.log("Форма не найдена");
//   }
// });
