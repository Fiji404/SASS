const menuBtn = document.querySelector('.navigation__menu');
const menuNav = document.querySelector('.aside-nav');
const hiddenMenu = document.querySelector('.aside-nav__list_expand');
const menuHeader = document.querySelector('.aside-nav__header-btn');

menuBtn.addEventListener('click', () => {
    menuNav.classList.toggle('active');
});

menuHeader.addEventListener('click', () => {
    menuHeader.classList.toggle('active');
    hiddenMenu.classList.toggle('show');
});