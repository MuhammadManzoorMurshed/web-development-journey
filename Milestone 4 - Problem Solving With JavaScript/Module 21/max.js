const disha = 56;
const salman = 85;

if(disha > salman) {
    console.log('Disha will get the straberry.');
}
else {
    console.log('Salman will get the straberry.');
}

function getMax(num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(56, 79);
console.log(max1);

const max2 = getMax(98, 79);
console.log(max2);

const max3 = getMax(max1, max2);
console.log(max3);