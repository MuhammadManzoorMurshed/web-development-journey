// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => console.log(users))
//     .catch(error => console.error('Error fetching users:', error));

const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;

    console.log("Generated number:", num);

    if (num > 5) {
        resolve("Number is greater than 5: " + num);
    } else {
        reject("Number is 5 or less: " + num);
    }
})

getData
    .then(message => console.log("Success:", message))
    .catch(error => console.error("Failure:", error));