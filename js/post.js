const postPage = document.querySelector(".single-post");
const pageHeading = document.querySelector(".site-title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const pageUrl = "https://jkmzd.eu/blog-api/wp-json/wp/v2/posts/" + id + `?_embed`;

console.log(id);



// API call for individual posts.

async function getPostInfo() {

    try {

    const response = await fetch(pageUrl);
    const postInfo = await response.json();
    
    

    createHtml(postInfo);

    console.log(postInfo);

    }
    catch(error) {
        console.log(error);
        postPage.innerHTML = "An error has occurred.";
    }
}


getPostInfo();



// Create HTML for the Post Individual Page.


function createHtml(postInfo) {
    

    const postTitle = postInfo.title.rendered;
    const postDate = postInfo.date.split("T")[0];
    const postImage = postInfo._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
    const postImageAlt = postInfo._embedded["wp:featuredmedia"][0].alt_text;
    const postAuthor = postInfo._embedded["author"][0].name;
    const postContent = postInfo.content.rendered;
    document.title = postTitle;
    const siteHeader = document.querySelector(".site-title")

    try {

    siteHeader.innerHTML = ` <div class="post-title">${postTitle}</div>`;


    postPage.innerHTML = `  <div class="page-container">
                            <div class="image-text-container">
                            <img class="featured-image" src="${postImage}" alt="${postImageAlt}">
                            <div class="date-author-text"><span class="info" id="author">Article by: ${postAuthor}</span> <span class="info" id="date">Posted: ${postDate}</span></div>
                            </div>
                            <div class="post-content">
                             ${postContent}
                             </div>
                            </div>
                            <div class="back-btn-container">
                            <button class="go-back" id="go-back-btn">Go back</button>
                            </div`;

    }

    catch(error) {

        console.log(error);
        postPage.innerHTML = "An error has occurred."

    }
}

// Go back button

getPostInfo().then(() => {

    const goBack = document.querySelector("#go-back-btn");

    goBack.addEventListener("click", function() {
    
        window.history.back();

    })

})


