const moreButton = document.getElementById("see-more-button");

const moreButtonContainer = document.querySelector(".see-more-btn-container");

const hiddenPosts = document.querySelector(".hidden-posts-container");

moreButton.addEventListener("click", () => {

    if (moreButton.innerText === "View More Posts...") {

        hiddenPosts.style.display = "flex";
        moreButton.innerText = "View Less Posts..."

    } else {

        moreButton.innerText = "View More Posts..."
        hiddenPosts.style.display = "none";

    }

});