const url = "https://jkmzd.eu/blog-api/wp-json/wp/v2/";

const postContainer = document.querySelector(".post-container");
const buttonPrevious = document.querySelector("#prev-arrow-cont");
const buttonNext = document.querySelector("#next-arrow-cont");
const noResults = document.querySelector(".empty-results");

let length = 4;
let offset = 0;


async function getPosts(url) {

    if (windowSize.matches) {

    try {

    const response = await fetch(url + `posts?per_page=2&offset=${offset}&?_embed`);

    const json = await response.json();


    if (offset === 0) {

        buttonPrevious.style.display = "none";

    } else {

        buttonPrevious.style.display = "block";

    }

    if (json.length < 2) {

        noResults.style.display = "block";

        buttonNext.style.display = "none";

    } else {
        
        noResults.style.display = "none";

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

    } else {

    try {

        const response = await fetch(url + `posts?per_page=${length}&offset=${offset}&?_embed`);
    
        const json = await response.json();
    
    
        if (offset === 0) {

            buttonPrevious.style.display = "none";

        } else {

            buttonPrevious.style.display = "block";

        }
        if (json.length < 4) {

            noResults.style.display = "block";

            buttonNext.style.display = "none";

        } else {

            noResults.style.display = "none";

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
}

getPosts(url);


buttonPrevious.addEventListener("click", () => {

    if (windowSize.matches) {

        offset -= 2;

    } else {
        offset -=4;
    }

    getPosts(url);
});

buttonNext.addEventListener("click", () => {

    if (windowSize.matches) {

        offset += 2;

    } else {
        offset +=4;
    }

    getPosts(url);
});




