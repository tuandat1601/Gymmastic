const header = document.querySelector(".header");
const overPlay = document.querySelector(".header__overplay");
const menu = document.querySelector(".header__menu");
menu.addEventListener("click", ()=>{
    menu.classList.toggle("open");
    header.classList.toggle("open");
    overPlay.classList.toggle("open");
})