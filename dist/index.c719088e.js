const menuBtn = document.querySelector('.navigation__menu');
const menuNav = document.querySelector('.aside-nav');
const hiddenMenu = document.querySelector('.aside-nav__list_expand');
const menuHeader = document.querySelector('.aside-nav__link_title');
const contentsTitle = document.querySelectorAll('.aside-nav__link_title');
menuBtn.addEventListener('click', ()=>{
    menuNav.classList.toggle('active');
}); // menuHeader.addEventListener('click', () => {
 //     menuHeader.classList.toggle('active');
 //     hiddenMenu.classList.toggle('show');
 // });
 // contentsTitle.addEventListener('click', e => {
 //     e.forEach((element) => {
 //         element.addEventListener('click', listExpand());
 //     });
 // })

//# sourceMappingURL=index.c719088e.js.map
