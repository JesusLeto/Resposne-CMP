const img = document.querySelector(".window__header--img");
const imgShadow = document.querySelector(".window__header--imgShadow");
const WindowBlock = document.querySelector(".window--wrapper");

WindowBlock.addEventListener("mouseover", (e) => {
    if(e.target.className == "window--wrapper"){
        imgShadow.style.display = "block";
        img.style.display = "none"
    }
})

WindowBlock.addEventListener("mouseout", () => {
    imgShadow.style.display = "none";
        img.style.display = "block"
})


const Burger = document.querySelector(".Burger--wrapper");
const Menu = document.querySelector (".header__navbar--links");

Burger.addEventListener('click', () => {
    Menu.classList.toggle("active");
})