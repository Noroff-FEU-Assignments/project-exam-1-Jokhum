const url = "https://jkmzd.eu/blog-api/wp-json/wp/v2/";

const postContainer = document.querySelector(".post-container");
const buttonPrevious = document.querySelector("#prev-arrow-cont");
const buttonNext = document.querySelector("#next-arrow-cont");

let length = 4;
let offset = 0;
/* let smallMedia = true;
let bigMedia = true;
let width = validateWidth(); */

/* function validateWidth() {

    if (window.innerWidth <= 1024) {

        return 2;

    }

    if (window.innerWidth >= 1025) {

        return 4;

    }
} */



async function getPosts(url) {

    try {

    const response = await fetch(url + `posts?per_page=${length}&offset=${offset}&?_embed`);

    const json = await response.json();


    if (offset === 0) {
        buttonPrevious.style.display = "none";
    } else {
        buttonPrevious.style.display = "block";
    }
    if (json.length < 4) {
        buttonNext.style.display = "none";
    } else {
        buttonNext.style.display = "block";
    }

    postContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
        
        postContainer.innerHTML += `<a href="post-page.html?id=${json[i].id}">
                                    <div class="post-card">                                    
                                    ${json[i].content.rendered}                                  
                                    <div class="post-card-title">
                                    ${json[i].title.rendered}
                                    </div>
                                    </div>
                                    </a>
                                    `;
    }

    } catch (error) {
        console.log(error);
    }
}

getPosts(url);


/* window.addEventListener("resize", () => {

    if (window.innerWidth <= 1024 && smallMedia) {

        smallMedia = false;

        bigMedia = true;

        width = validateWidth();

        getPosts(url);
    }
    
    if (window.innerWidth >= 1025 && bigMedia) {

        smallMedia = true;

        bigMedia = false;

        width = validateWidth();

        getPosts(url);
    }
}); */

buttonPrevious.addEventListener("click", () => {

        offset -= 4;

    getPosts(url);
});

buttonNext.addEventListener("click", () => {

    offset += 4;

    getPosts(url);
});



/* getPosts(url).then(() => {

    postContainer.innerHTML = "";

    postContainer.innerHTML += `
    <figure class="wp-block-image size-large"></figure>`


}) */


