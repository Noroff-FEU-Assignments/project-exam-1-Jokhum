const urlPosts = "https://jkmzd.eu/blog-api/wp-json/wp/v2/posts/?per_page=12";

const postsContainer = document.querySelector(".posts-container");
const hiddenContainer = document.querySelector(".hidden-posts-container");
 
// API call for posts page

async function getPosts() {

    const response = await fetch(urlPosts);

    const results = await response.json();

    const json = results;

    console.log(json);
    
    postsContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {

        const myArray = json[i].content.rendered.match(
            /\<p>.*?<\/p>|https.*?\.jpg/g
        );

        console.log(myArray);
        console.log(myArray[6]);

        // Only 5 firsts posts goes into this container.

        if (i <= 4) {

        postsContainer.innerHTML += `
                                    <a href="post-page.html?id=${json[i].id}">
                                    <div class="post-card">
                                    ${json[i].content.rendered}
                                    
                                    <div class="post-card-title">
                                    ${json[i].title.rendered}
                                    </div>
                                    </div
                                    </a>
                                    `;
        } else {

        // Putting results after 5 first into the hidden container.

        hiddenContainer.innerHTML += `
                                    <a href="post-page.html?id=${json[i].id}">
                                    <div class="post-card">
                                    ${json[i].content.rendered}                                   
                                    <div class="post-card-title">
                                    ${json[i].title.rendered}
                                    </div>
                                    </div>
                                    </a>
                                    `;
                                }
    }
}

getPosts();