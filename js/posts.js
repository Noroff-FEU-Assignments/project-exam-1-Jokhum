const urlPosts = "https://jkmzd.eu/blog-api/wp-json/wp/v2/posts/?per_page=12&_embed";

const postsContainer = document.querySelector(".posts-container");
const hiddenContainer = document.querySelector(".hidden-posts-container");
 
// API call for posts page

async function getPosts() {

    const response = await fetch(urlPosts);

    const json = await response.json();

    console.log(json);
    
    postsContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {


        // Only 5 firsts posts goes into this container.

        if (i <= 5) {

        postsContainer.innerHTML += `
                                    
                                    <div class="post-card">
                                    <img src="${json[i]._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}" alt="${json[i]._embedded["wp:featuredmedia"][0].alt_text}"/>
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
        } else {

        // Putting results after 5 first into the hidden container.

        hiddenContainer.innerHTML += `
                                    <div class="post-card">
                                    <img src="${json[i]._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}" alt="${json[i]._embedded["wp:featuredmedia"][0].alt_text}"/>
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
    }
}

getPosts();