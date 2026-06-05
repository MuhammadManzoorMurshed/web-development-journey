const numbers = [45, 65, 23, 98, 19];

for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    console.log(number);
}

console.log('===========================');

for(const number of numbers) {
    console.log(number);
}

console.log('===========================');

const products = [
    {id: 1, name: 'Walton Phone', price: 19000},
    {id: 2, name: 'Xiaomi Phone', price: 19000},
    {id: 3, name: 'IPhone', price: 19000},
    {id: 4, name: 'Lenovo Yoga Laptop', price: 19000},
    {id: 5, name: 'Dell Inspiron', price: 19000},
    {id: 6, name: 'Samsung Note7', price: 19000},
    {id: 7, name: 'Nokia Old Aged Phone Gone', price: 19000},
    {id: 8, name: 'One Phone', price: 19000}
]

for(const product of products) {
    console.log(product);
}

console.log('===========================');

function matchedProducts(products, search) {
    const matched = [];

    for (const product of products) {
        // console.log(product.name.includes(search));
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }

    return matched;
}

let result = matchedProducts(products, 'Phone')
console.log(result);

result = matchedProducts(products, 'Laptop')
console.log(result);