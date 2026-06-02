let price = 25;
let compPrice = price;

console.log(price);
console.log(compPrice);

console.log("=================================================");

price = 20;

console.log(price);
console.log(compPrice);

console.log("=================================================");

compPrice = 15;

console.log(price);
console.log(compPrice);

console.log("=================================================");

const products = [25, 25, 25];
const compProcucts = products;

console.log(products);
console.log(compProcucts);

console.log("=================================================");

products[0] = 15;

console.log(products);
console.log(compProcucts);

console.log("=================================================");

compProcucts[0] = 35;
products[1] = 55;

console.log(products);
console.log(compProcucts);

console.log("=================================================");

const products1 = [10, 10, 10];
const compProcucts1 = [];

for(const product of products1) {
    compProcucts1.push(product);
}

console.log(products1);
console.log(compProcucts1);

console.log("=================================================");

products1[0] = 100;

console.log(products1);
console.log(compProcucts1);

console.log("=================================================");

products1[0] = 1000;
compProcucts1[1] = 10000;

console.log(products1);
console.log(compProcucts1);

console.log("=================================================");

const numbers = [1,2,3,4,5];

const newNumbers = Array.from(numbers);

console.log(numbers);
console.log(newNumbers);

console.log("=================================================");

newNumbers.push(800000);

console.log(numbers);
console.log(newNumbers);

console.log("=================================================");

const newNumbers1 = [].concat(numbers).concat(newNumbers);
console.log(newNumbers1);

console.log("=================================================");

const newNumbers2 = [...newNumbers1];
console.log(newNumbers2);