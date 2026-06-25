// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => console.log(users))
//     .catch(error => console.error('Error fetching users:', error));

const getData1 = new Promise((resolve, reject) => {
    const num1 = Math.random() * 10;

    console.log("Generated number:", num1);

    if (num1 > 5) {
        resolve("Number is greater than 5: " + num1);
    } else {
        reject("Number is 5 or less: " + num1);
    }
})

// getData1
//     .then(message => console.log("Success:", message))
//     .catch(error => console.error("Failure:", error));

const getData2 = new Promise((resolve, reject) => {
    const num2 = Math.random() * 15;

    console.log("Generated number:", num2);

    if (num2 > 7) {
        resolve("Number is greater than 7: " + num2);
    } else {
        reject("Number is 7 or less: " + num2);
    }
})

// getData2
//     .then(message => console.log("Success: ", message))
//     .catch(error => console.error("Failure: ", error));


const getData3 = new Promise((resolve, reject) => {
    const num3 = Math.random() * 20;

    console.log("Generated number:", num3);

    if (num3 > 10) {
        resolve("Number is greater than 10: " + num3);
    } else {
        reject("Number is 10 or less: " + num3);
    }
})

// getData3
//     .then(message => console.log("Success: ", message))
//     .catch(error => console.error("Failure: ", error));

Promise.all([getData1, getData2, getData3])
    .then(message => console.log("All promises resolved:", message))
    .catch(error => console.error("At least one promise rejected:", error));