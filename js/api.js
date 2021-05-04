const url = "https://jkmzd.eu/blog-api/wp-json/wp/v2/";

const postContainer = document.querySelector(".post-container");
const buttonPrevious = document.querySelector("#prev-arrow-cont");
const buttonNext = document.querySelector("#next-arrow-cont");

let length = 5;
let offset = 0;

async function getPosts(url) {

    try {

    const response = await fetch(url + `posts?per_page=${length}&offset=${offset}&?_embed`);

    const json = await response.json();

    if (offset === 0) {
        buttonPrevious.style.display = "none";
    } else {
        buttonPrevious.style.display = "block";
    }
    if (json.length < 5) {
        buttonNext.style.display = "none";
    } else {
        buttonNext.style.display = "block";
    }

    postContainer.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        
        postContainer.innerHTML += `
                                    <div class="post-card">
                                    ${json[i].content.rendered}
                                    <div class="post-card-title">
                                    ${json[i].title.rendered}
                                    </div>
                                    </div
                                    `;
    }

    } catch (error) {
        console.log(error);
    }
}

buttonPrevious.addEventListener("click", () => {

        offset -= 4;

    getPosts(url);
});

buttonNext.addEventListener("click", () => {

    offset += 4;

    getPosts(url);
});


getPosts(url);


