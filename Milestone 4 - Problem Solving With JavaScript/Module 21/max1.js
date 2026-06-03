const jim = 56; 
const tim = 89;
const kim = 68;

function max(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

console.log(max(jim, tim, kim));

console.log("============================");

const maxNum = Math.max(12, 1, 56, 5, 65, 8, 1, 99, 2);
console.log(maxNum);
