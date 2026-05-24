const mobile = {
    brand: 'Samsung', 
    price: 25000,
    color: 'Black',
    camera: '12MP',
    isNew: true,
}

for(const key in mobile) {
    console.log(key);

    console.log(mobile[key]);
}

console.log("===========================c");

const keys1 = Object.keys(mobile);
console.log(keys1);

for(const key of keys1) {
    console.log(key, mobile[key]);
}