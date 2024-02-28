'use strict';

const menuButton = document.getElementById("menuButton");
const slideNav = document.getElementById("slideNav");

slideNav.style.width = "0px";

menuButton.addEventListener("click", function() {
    if (menuButton.src === 'file:///C:/Users/Testop%20camioes/Documents/dev/projects/frontendMentor/news-homepage/assets/images/icon-menu.svg') {
        menuButton.src = "./assets/images/icon-menu-close.svg";
    } else {
      menuButton.src = "./assets/images/icon-menu.svg";
    }

    if(slideNav.style.width === "0px") {
        slideNav.style.width = "60%";
    } else {
        slideNav.style.width = "0px";
    }
});