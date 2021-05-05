const postPage = document.querySelector(".single-post");
const pageHeading = document.querySelector(".site-title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const pageUrl = "https://jkmzd.eu/blog-api/wp-json/wp/v2/posts/" + id;

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
    const postDate = postInfo.date;
    const postContent = postInfo.content.rendered;
    document.title = postTitle;

    try {

    postPage.innerHTML = `  <div class="page-container">
                             ${postContent}
                             ${postDate}
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
