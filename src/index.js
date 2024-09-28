window.onload=function(){
const hamburgerButton = document.getElementById("hamburgerMenu");
const modalMenu = document.getElementById("modalMenu");
console.log("jestem");
hamburgerButton.addEventListener("click",toggleMenu)


}

function toggleMenu(){
    console.log("tu, ludzi tlum");
    modalMenu.classList.toggle("menu-active");
    this.classList.toggle("button-active")
}