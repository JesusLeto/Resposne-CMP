const tiles = document.querySelector(".tiles")
const block = document.querySelectorAll(".tiles__block")
const Img = document.querySelectorAll(".tiles__block--img")
const Shadow = document.querySelectorAll(".tiles__block--imgShadow");

const Hide = () => {
    Shadow.forEach(Element => {
        Element.style.display = "none"
    })
    Img.forEach(Element => {
        Element.style.display = "block"
    })
}

const Show = id => {
    Img[id - 1].style.display = "none";
    Shadow[id - 1].style.display = "block"
}

tiles.addEventListener('mouseover', (e) => {
    const target = e.target;
    if(target.className == "tiles__block" || target.parentNode.className == "tiles__block"){
        let id = 0;
        target.id == "" ? id = target.parentNode.id: id = target.id
        Hide();
        Show(id)
    }
})


tiles.addEventListener('mouseout', (e) => {
    if(e.target.className == "tiles__block" || e.target.parentNode.className == "tiles__block"){
        Hide()
    }
})