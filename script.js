const menuActive = document.querySelector('.menu-active');
const burger = document.querySelector('.svg-margin');
const menuClose = document.querySelector('.menu-close');
function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);