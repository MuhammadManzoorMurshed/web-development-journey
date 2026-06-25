async function loadData() {
    console.log("One");
    console.log("Two");

    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(users => console.log(users))
    //     .catch(error => console.error('Error fetching users:', error));

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data[0]);

    console.log("Four");
    console.log("Five");
}

// loadData();

const loadData2 = async () => {
    console.log("A");
    console.log("B");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.co/users");
        const data = await response.json();

        console.log(data[1]);
    } catch(error) {
        console.error('Error fetching users:', error);
    } finally {
        console.log("C");
        console.log("D");
    }
}

loadData2();