
const data = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    console.log("Hello!");

    const jsonData = await response.json();
    console.log(jsonData);
    
    console.log(true);
};

data();