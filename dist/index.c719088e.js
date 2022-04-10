const menuBtn = document.querySelector('.navigation__menu');
const menuNav = document.querySelector('.aside-nav');
const menuHeaders = document.querySelectorAll('.aside-nav__header-btn');
const hiddenMenu = document.querySelector('.aside-nav__list_expand');
const workspaceControls = document.querySelectorAll('.code-workspace__controls');
const codeBlocks = document.querySelectorAll('.code-workspace__list-item');
menuBtn.addEventListener('click', ()=>{
    menuNav.classList.toggle('active');
});
menuHeaders.forEach((element)=>{
    element.addEventListener('click', ()=>{
        element.classList.toggle('active');
        element.nextElementSibling.classList.toggle('show');
    });
});

//# sourceMappingURL=index.c719088e.js.map
