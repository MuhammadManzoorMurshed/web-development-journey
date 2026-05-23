for(let i = 0; i < 15; i++) {
    console.log(i);
}

console.log();

for (let i = 0; i < 15; i++) {
    console.log(i);

    if(i >= 5) {
        break;
    }
}

console.log("Life after break up.");

let n = 54;
while(n > 25) {
    console.log(n);
    
    if(n < 50) {
        break;
    }

    n--;
}


let n1 = 100;
while (n1 > 75) {
    if (n1 < 50) {
        break;
    }

    console.log(n1);

    n1--;
}