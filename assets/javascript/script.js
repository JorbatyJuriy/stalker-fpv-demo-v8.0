var modal = document.getElementById('ah-8_modal_section');
var second_modal = document.getElementById('ah-10_modal_section');
var button = document.getElementById('openModal_AH8');
var second_button = document.getElementById('openModal_AH10');
var modal_button_first = document.getElementById('modal_button_first');
var modal_button_second = document.getElementById('modal_button_second');
const anchors = document.querySelectorAll('[id^="section"]');

var first_exit_button = document.getElementById('first_left_button');
var second_exit_button = document.getElementById('second_left_button');

var first_cross = document.getElementById('first_cross');
var second_cross = document.getElementById('second_cross');
var third_cross = document.getElementById('third_cross');

var third_modal = document.getElementById('burger');
var open_burger_menu = document.getElementById('burger_menu');

third_cross.addEventListener('click', closeMenuModal)
open_burger_menu.onclick = function (event){
    third_modal.style.display = 'flex';
    third_modal.classList.add('slide-in'); // Добавляем класс с анимацией при открытии
}

function closeMenuModal(){
    third_modal.style.display = "none";
    third_modal.classList.remove('slide-in'); // Убираем класс с анимацией при закрытии
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('hide-scrollbar');

    }

    else if(event.target == second_modal){
        second_modal.style.display = "none";
        document.body.classList.remove('hide-scrollbar');
    }
}

function closeModal() {
    modal.style.display = "none";
    second_modal.style.display = "none";
    document.body.classList.remove('hide-scrollbar');
}

second_button.onclick = function (){
    second_modal.style.display = "block";
    document.body.classList.add('hide-scrollbar');
}

modal_button_first.addEventListener('click', closeModal);
modal_button_second.addEventListener('click', closeModal);
first_exit_button.addEventListener('click', closeModal);
second_exit_button.addEventListener('click', closeModal);
first_cross.addEventListener('click', closeModal);
second_cross.addEventListener('click', closeModal);

button.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add('hide-scrollbar');
};

function setupNavbarScroll(containerClass) {
    const container = document.querySelector(containerClass); // Находим блок с навигационным меню

    if (container) {
        const links = container.querySelectorAll('a[href^="#"]'); // Находим все ссылки внутри навигационного меню

        links.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                closeMenuModal();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offset = 100; // Устанавливаем смещение от верха страницы
                    const targetOffset = targetElement.offsetTop - offset;

                    window.scrollTo({
                        top: targetOffset,
                        behavior: "smooth"
                    });

                }
            });
        });
    }
}

setupNavbarScroll('.logo_navbar');
setupNavbarScroll('.footer_navbar');
setupNavbarScroll('.modular_menu_list');

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.buy_button'); // Находим все кнопки с классом buy_button

    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = 'section9'; // Указываем id целевой секции
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 100; // Устанавливаем смещение от верха страницы
                const targetOffset = targetElement.offsetTop - offset;



                window.scrollTo({
                    top: targetOffset,
                    behavior: "smooth"
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const imageElement = document.querySelector('.carousel-image');
    const imagePaths = [
        'assets/images/ah-8.png',
        'assets/images/ah-10.png',
        'assets/images/ah-8-v2.png',
        'assets/images/ah-10-v2.png',
        'assets/images/another-v1.png',
        'assets/images/another-v2.png',

        // Добавьте пути к будущим изображениям
    ];

    let currentImageIndex = 0;

    function changeImage() {
        imageElement.style.opacity = 0;
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
            imageElement.src = imagePaths[currentImageIndex];
            imageElement.style.opacity = 1;
        }, 500);
    }

    setInterval(changeImage, 6000); // Меняем изображение каждые 5 секунд
});