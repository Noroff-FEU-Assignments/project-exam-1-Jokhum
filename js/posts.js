const url = "https://jkmzd.eu/blog-api/wp-json/wp/v2/posts/?per_page=12";

const postsContainer = document.querySelector(".posts-container");
const hiddenContainer = document.querySelector(".hidden-posts-container");
 

async function getPosts() {

    const response = await fetch(url);

    const results = await response.json();

    const json = results;

    console.log(json);
    
    postsContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {

        if (i <= 9) {
        postsContainer.innerHTML += `
                                    <div class="post-card">
                                    ${json[i].content.rendered}
                                    <div class="post-card-title">
                                    ${json[i].title.rendered}
                                    </div>
                                    </div
                                    `;
        } else {
        hiddenContainer.innerHTML += `
                                    <div class="post-card">
                                    ${json[i].content.rendered}
                                    <div class="post-card-title">
                                    ${json[i].title.rendered}
                                    </div>
                                    </div>
                                    `;
                                }
    }
}

getPosts();