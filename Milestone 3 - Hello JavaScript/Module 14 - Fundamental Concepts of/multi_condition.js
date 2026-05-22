const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = false;

if(salary > 20000 && height > 66) {
    console.log('Supatro 1');
}
else {
    console.log('Onno patro khuji 1.');
}

if (salary > 20000 || height > 72) {
    console.log('Supatro 2');
}
else {
    console.log('Onno patro khuji 2.');
}

if (salary > 28000 || height > 72 || isBCS == true) {
    console.log('Supatro 3');
}
else {
    console.log('Onno patro khuji 3.');
}

if (salary > 28000 && height > 72 && isBCS == true) {
    console.log('Supatro 3');
}
else {
    console.log('Onno patro khuji 3.');
}

if ((salary > 28000 && hasCar == true) || isBCS == true) {
    console.log('Supatro 4');
}
else {
    console.log('Onno patro khuji 4.');
}

if ((salary > 28000 || hasCar == true) && isBCS == true) {
    console.log('Supatro 5');
}
else {
    console.log('Onno patro khuji 5.');
}