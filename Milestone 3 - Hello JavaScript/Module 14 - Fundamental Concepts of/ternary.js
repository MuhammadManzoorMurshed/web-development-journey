const age = 20;

if(age >= 18) {
    console.log('You can vote 1');
}

else {
    console.log('Ghumai thako 2');
}

//==============================

age >= 18 ? console.log("Vote dio 1.") : console.log("Ghumai thako 2.");

let price = 500;
const isLeader = true;

if(isLeader === true) {
    price = 0;
}

else {
    price = price + 100;
}

console.log(price);

price = isLeader === true ? 0 : price + 100;
console.log(price);

price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 1000;
console.log(price);