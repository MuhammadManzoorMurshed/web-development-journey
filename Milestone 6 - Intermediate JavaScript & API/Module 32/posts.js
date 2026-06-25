const LoadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayPosts(data);
    })
}

const displayPosts = posts => {
    // console.log(posts)
    // for(let i = 0; i < posts.length; i++) {
    //     console.log(posts[i]);
    // }

    // for(const post of posts) {
    //     console.log(post);
    // }

    // 1. Get the container
    const postContainer = document.getElementById('post-container');
    console.log(postContainer);

    postContainer.innerHTML = '';

    posts.forEach(post => {
        // console.log(post.title);

        // 2. Create HTML element
        const li = document.createElement('li');

        li.innerText = post.title;
        // console.log(li);

        // 3. Add li into container
        postContainer.appendChild(li);
    });
}