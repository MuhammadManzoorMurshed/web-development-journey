function totalFine(fare) {
    if(fare <= 0 || typeof fare != 'number') {
        return 'Invalid';
    }

    const totalF = fare + fare * (20 / 100) + 30;

    return totalF;
}

let total = totalFine(200);
console.log(total);

total = totalFine(0);
console.log(total);

total = totalFine(50);
console.log(total);

total = totalFine(552);
console.log(total);

total = totalFine(-35);
console.log(total);

total = totalFine("65");
console.log(total);

total = totalFine("Gorib, tai ticket katini");
console.log(total);