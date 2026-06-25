const LoadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((Response) => Response.json())
        .then((jsonData) => {
            displayPosts(jsonData);
        })
}

const displayPosts = (posts) => {
    // 1. Get the container
    const postContainer = document.getElementById('post-container');

    postContainer.innerHTML = '';

    posts.forEach(post => {
        // console.log(post);

        // 2. Create element
        const postCard = document.createElement('div');

        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `

        // 3. Add to the container
        postContainer.appendChild(postCard);
    });
}

// {
//     "userId": 10,
//         "id": 94,
//             "title": "qui qui voluptates illo iste minima",
//                 "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
// }

LoadPost();