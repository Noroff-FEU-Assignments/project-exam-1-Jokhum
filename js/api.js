const url = "https://jkmzd.eu/blog-api/wp-json/wp/v2/";

const postContainer = document.querySelector(".post-container");
const buttonPrevious = document.querySelector("#prev-arrow-cont");
const buttonNext = document.querySelector("#next-arrow-cont");
const noResults = document.querySelector(".empty-results");

let length = 5;
let offset = 0;

// API call

async function getPosts(url) {

    // Smaller Screens

    if (windowSize.matches) {

    try {

    const response = await fetch(url + `posts?per_page=2&offset=${offset}&_embed`);

    const json = await response.json();

    console.log(json);

    // Button Visibility Criteria

    if (offset === 0) {

        buttonPrevious.style.display = "none";

    } else {

        buttonPrevious.style.display = "block";

    }

    if (json.length < 2) {

        buttonNext.style.display = "none";
        
    if (json.length < 1) {

       noResults.style.display = "block";

    }

    } else {
        
        noResults.style.display = "none";

        buttonNext.style.display = "block";

    }

    // Remove Loader etc.

    postContainer.innerHTML = "";

    // Add HTML to each post.

    for (let i = 0; i < json.length; i++) {
        
        postContainer.innerHTML += `
                                    <div class="post-card">
                                    <img src="${json[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="${json[i]._embedded["wp:featuredmedia"][0].alt_text}"/>
                                    <a href="post-page.html?id=${json[i].id}">
                                    <div class="post-card-title">
                                    <h2>${json[i].title.rendered}</h2>
                                    </div>
                                    <div class="card-content">
                                    ${json[i].content.rendered}
                                    </div>
                                    </a>
                                    <div class="bottom-gradient-card">
                                    </div>
                                    </div>
                                    `;
    }

    } catch (error) {
        console.log(error);
    }

    // Same procedure but for screens above 1024px

    } else {

    try {

        const response = await fetch(url + `posts?per_page=${length}&offset=${offset}&_embed`);
    
        const json = await response.json();
    
    
        if (offset === 0) {

            buttonPrevious.style.display = "none";

        } else {

            buttonPrevious.style.display = "block";

        }
        if (json.length < 5) {

            buttonNext.style.display = "none";

        if (json.length < 1) {

            noResults.style.display = "block";

        }

        } else {

            noResults.style.display = "none";

            buttonNext.style.display = "block";

        }
    
        postContainer.innerHTML = "";
    
        for (let i = 0; i < json.length; i++) {
            
            postContainer.innerHTML += `
                                    <div class="post-card">
                                    <img src="${json[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}" alt="${json[i]._embedded["wp:featuredmedia"][0].alt_text}"/>
                                    <a href="post-page.html?id=${json[i].id}">
                                    <div class="post-card-title">
                                    <h2>${json[i].title.rendered}</h2>
                                    </div>
                                    <div class="card-content">
                                    ${json[i].content.rendered}
                                    </div>
                                    </a>
                                    <div class="bottom-gradient-card">
                                    </div>
                                    </div>
                                    `;
        }
    
        } catch (error) {

            console.log(error);

        }
}
}

getPosts(url);

// Eventlisteners for my carousel arrows.

buttonPrevious.addEventListener("click", () => {

    if (windowSize.matches) {

        offset -= 2;

    } else {
        offset -=5;
    }

    getPosts(url);
});

buttonNext.addEventListener("click", () => {

    if (windowSize.matches) {

        offset += 2;

    } else {
        offset +=5;
    }

    getPosts(url);
});




