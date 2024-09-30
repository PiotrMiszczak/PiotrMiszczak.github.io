window.onload=function(){
const hamburgerButton = document.getElementById("hamburgerMenu");
const modalMenu = document.getElementById("modalMenu");
hamburgerButton.addEventListener("click",toggleMenu)


}

function toggleMenu(){
  
    modalMenu.classList.toggle("menu-active");
    this.classList.toggle("button-active");
    document.body.classList.toggle("stop-scroll");
   
}