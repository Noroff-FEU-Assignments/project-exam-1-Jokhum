const url = "https://jkmzd.eu/blog-api/wp-json/wp/v2/posts";

const postContainer = document.querySelector(".post-container");
const buttonPrevious = document.querySelector("#prev-arrow-cont");
const buttonNext = document.querySelector("#next-arrow-cont");

let length = 2;
let offset = 0;
 


async function getPosts() {

    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    postContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {

        postContainer.innerHTML += `
                                    <div class="post-card">
                                    ${json[i].content.rendered}
                                    <div class="post-card-title">
                                    ${json[i].title.rendered}
                                    </div>
                                    </div
                                    `;
    }
}

buttonPrevious.addEventListener("click", () => {
    if (offset >= 2) {
        offset -= 2;
    }
    getPosts();
});
buttonNext.addEventListener("click", () => {
    offset += 2;
    getPosts();
});


getPosts();




/* const apiUrl =
    "https://jkmzd.eu/blog-api/wp-json/wp/v2/";

let length = 2;
let offset = 0;

const buttonPrevious = document.querySelector("#prev-arrow-cont");
const buttonNext = document.querySelector("#next-arrow-cont");
const postContainer = document.querySelector(".post-container");

async function fetchApi(url) {


    try {
        const data = await fetch(
            url + `posts?per_page=${length}&offset=${offset}&?_embed`
        );
        const json = await data.json();

        postContainer.innerHTML = "";

        for (let i = 0; i < json.length; i++) {

            postContainer.innerHTML += `
                                        <div class="post-card">
                                        <div class="post-card-title">
                                        ${json[i].title.rendered}
                                        </div>
                                        ${json[i].content.rendered}
                                        </div
                                        `;
        }
    

            


    } catch (error) {
        console.log(error);
    }
    
}

buttonPrevious.addEventListener("click", () => {
    if (offset >= 2) {
        offset -= 2;
    }
    fetchApi(apiUrl);
});
buttonNext.addEventListener("click", () => {
    offset += 2;
    fetchApi(apiUrl);
});


fetchApi(apiUrl); */