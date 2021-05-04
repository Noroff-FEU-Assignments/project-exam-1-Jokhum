const hamburger = document.getElementById("hamburger");

const closeBurger = document.getElementById("close-burger");

const navBar = document.getElementById("nav-bar");

const fadeContent = document.getElementById("fade-out");

const windowSize = matchMedia("max-width: 1024px");

const moreButton = document.getElementById("see-more-button");

const moreButtonContainer = document.querySelector(".see-more-btn-container");

const hiddenPosts = document.querySelector(".hidden-posts-container");

const toTopButton = document.getElementById("btt-btn");

// Clicks

// Burger / Nav

// Opening Burger Menu

hamburger.addEventListener("click", () => {

    navBar.classList.toggle("show");

    if (navBar.classList.contains("show")) {
        hamburger.style.display = "none";
        closeBurger.style.display = "block";
        fadeContent.style.display = "block";
        
    } 

}); 

// Adding a closing functionality to the "X" in burger menu.

closeBurger.addEventListener("click", () => {

    navBar.classList.remove("show");
    hamburger.style.display = "block";
    closeBurger.style.display = "none";
    fadeContent.style.display = "none";


});

// Clicking Outside of Burger Closes the menu

window.addEventListener('mouseup',(event) => {

if(event.target != navBar && event.target.parentNode != navBar && windowSize.matches){

    navBar.classList.remove("show");
    hamburger.style.display = "block";
    closeBurger.style.display = "none";
    fadeContent.style.display = "none";
}
});  

moreButton.addEventListener("click", () => {

    hiddenPosts.style.display = "flex";
    moreButtonContainer.style.display = "none";


});

// Adding a back to top button when you scrolled 250 px down.

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// Scroll to top

toTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});