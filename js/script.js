const hamburger = document.getElementById("hamburger");

const closeBurger = document.getElementById("close-burger");

const navBar = document.getElementById("nav-bar");

const fadeContent = document.getElementById("fade-out");

// Clicks

// Burger / Nav

hamburger.addEventListener("click", () => {

    navBar.classList.toggle("show");

    if (navBar.classList.contains("show")) {
        hamburger.style.display = "none";
        closeBurger.style.display = "block";
        fadeContent.style.display = "block";
        
    } 

}); 

closeBurger.addEventListener("click", () => {

    navBar.classList.remove("show");
    hamburger.style.display = "block";
    closeBurger.style.display = "none";
    fadeContent.style.display = "none";

});

