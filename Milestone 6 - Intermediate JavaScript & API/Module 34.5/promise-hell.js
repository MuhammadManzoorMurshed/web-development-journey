// Promise Hell Example
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        console.log("Users:", users[0]);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => {
                console.log("Posts:", posts[0]);

                fetch("https://jsonplaceholder.typicode.com/comments")
                    .then(response => response.json())
                    .then(comments => {
                        console.log("Comments:",comments[0]);
                    })
                    .catch(error => console.error('Error fetching comments:', error));
            })
            .catch(error => console.error('Error fetching posts:', error));
    })
    .catch(error => console.error('Error fetching users:', error));

/**
 * This code demonstrates "Promise Hell" by nesting multiple fetch calls within each other's .then() handlers.
 * Each fetch depends on the successful completion of the previous one, leading to deeply nested code that is hard to read and maintain.
 * Proper error handling is included for each fetch call to catch and log any errors that may occur during the requests.
 * To avoid "Promise Hell", consider using Promise chaining or async/await syntax for better readability and maintainability.
 */