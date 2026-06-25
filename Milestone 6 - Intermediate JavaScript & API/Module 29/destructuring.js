const product = {
    name: 'Shirt',
    price: 20,
    quantity: 7,
};

const discount = product.price * 20 / 100;
const finalPrice = product.price - discount;
const vatAmount = product.price * 7 / 100;
const totalPrice = finalPrice + vatAmount;

console.log('Product Name:', product.name);
console.log('Price:', product.price);
console.log('Quantity:', product.quantity);
console.log('Discount (20%):', discount);
console.log('Final Price after Discount:', finalPrice);
console.log('VAT Amount (7%):', vatAmount);
console.log('Total Price:', totalPrice);

console.log('==========================');

// Destructuring Assignment
const { price } = {name: 'Shirt', price: 20, quantity: 7}; // Extracting price property
console.log('Price:', price); // 20

const { name, quantity } = {name: 'Shirt', price: 20, quantity: 7}; // Extracting name and quantity properties
console.log('Name:', name); // Shirt
console.log('Quantity:', quantity); // 7

console.log('==========================');

const device = {
    type: 'Laptop',
    brand: 'Dell',
    price: 800,
};

const { type, brand, price: devicePrice } = device; // Destructuring with renaming
console.log('Type:', type);
console.log('Brand:', brand);
console.log('Price:', devicePrice);

console.log('==========================');

// Nested Object Destructuring
const employee = {
    id: 101,
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA',
    },
};

const { name: employeeName, address: { city, country } } = employee;
console.log('Employee Name:', employeeName);
console.log('City:', city);
console.log('Country:', country);

console.log('==========================');

// Destructuring with arrays
const colors = ['Red', 'Green', 'Blue', 'Yellow'];
const [firstColor, secondColor, , fourthColor] = colors; // Skipping the third element
console.log('First Color:', firstColor); // Red
console.log('Second Color:', secondColor); // Green
console.log('Fourth Color:', fourthColor); // Yellow

console.log('==========================');

const [math, physics, , chemistry] = [90, 85, 88, 92];
console.log('Math:', math); // 90
console.log('Physics:', physics); // 85
console.log('Chemistry:', chemistry); // 92

console.log('==========================');

// Destructuring with default values
const { model = 'Unknown', year = 2020 } = { model: 'Civic' };
console.log('Model:', model); // Civic
console.log('Year:', year); // 2020

console.log('==========================');


