const mobiles = [
    {name: 'Samsung', price: 20000, camera: '12MP', color: 'Black'},
    {name: 'Xaomi', price: 18000, camera: '12MP', color: 'Black'},
    {name: 'OPPO', price: 30000, camera: '12MP', color: 'Black'},
    {name: 'IPhone', price: 100000, camera: '12MP', color: 'Black'},
    {name: 'Walton', price: 31000, camera: '12MP', color: 'Black'},
    {name: 'HTc', price: 27000, camera: '12MP', color: 'Black'},
]

function getCheapest(phones) {
    let min = mobiles[0].price;
    let minIndex = 0;
    console.log(min);

    for(let i = 0; i < mobiles.length; i++) {
        if(min > mobiles[i].price) {
            minIndex = i;
        }
    }

    return minIndex;
}

const cheap = getCheapest(mobiles);

console.log('Cheapest phone is:');
console.log('Name: ', mobiles[cheap].name);
console.log('Price: ', mobiles[cheap].price);
console.log('Camera: ', mobiles[cheap].camera);
console.log('Color: ', mobiles[cheap].color);