const addNumberToLs = () => {
    const number = Math.ceil(Math.random() * 100);

    console.log(number);

    localStorage.setItem('number', number);
}

const getNumberFromLs = () => {
    const number = localStorage.getItem('number');

    console.log("From saved local storage: ", number);
}

const setObjectToLs = () => {
    const customer = {name: 'Rahim', products: 3, price: 75};
    const customerJSON = JSON.stringify(customer)
    localStorage.setItem('customer', customerJSON);
}

const getObjectFromLs = () => {
    const customerJSON = localStorage.getItem('customer');
    const customer = JSON.parse(customerJSON);

    console.log(customer.name);
}