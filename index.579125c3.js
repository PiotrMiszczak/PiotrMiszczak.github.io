window.onload = function() {
    const hamburgerButton = document.getElementById("hamburgerMenu");
    const modalMenu = document.getElementById("modalMenu");
    const links = document.querySelectorAll("#modalMenu li");
    hamburgerButton.addEventListener("click", toggleMenu);
    links.forEach((link)=>link.addEventListener("click", toggleMenu));
    function toggleMenu() {
        modalMenu.classList.toggle("menu-active");
        hamburgerButton.classList.toggle("button-active");
        document.body.classList.toggle("stop-scroll");
    }
};

//# sourceMappingURL=index.579125c3.js.map
