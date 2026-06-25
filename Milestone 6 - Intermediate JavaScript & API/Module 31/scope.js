const name = "Manzoor";

if(true) {
    const data = 58;

    console.log(data);

    console.log(name); // No error

    doMath(4, 5); // No error
    doubleIt(4); // Error
}

// Error
// console.log(data);

console.log("-------------------------------");

/*
while(true) {

}
*/

console.log("-------------------------------");

for(const num of [1, 2, 3, 4, 5]) {
    console.log(name); // No error

    doMath(4, 5); // No error
    doubleIt(4); // Error
}

console.log("-------------------------------");

function doMath(a, b) {
    console.log(a, b);

    const sum = a + b;

    console.log(name); // No error

    function doubleIt(x) {
        return x * 2;
    }

    doubleIt(2); // No error
}

// Error
// console.log(a, b);
// console.log(sum);