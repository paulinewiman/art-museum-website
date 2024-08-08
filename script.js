//Javascript för den globala menyn

//Variabler 
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".menu-bar");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

//Eventlistener när användaren klickar på menyknappen
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
})