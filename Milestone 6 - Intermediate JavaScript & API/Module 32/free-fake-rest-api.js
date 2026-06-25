const loadData = () => {
    const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => console.log("Data: ", data));
}

const LodaPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        displayPost(data);
    });
}

const displayPost = posts => {
    // console.log(posts);
    posts.forEach(post => {
        console.log(post);
    })
}