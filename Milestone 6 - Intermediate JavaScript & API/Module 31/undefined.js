/**
 * undefined: means a variable has been declared but has not yet been assigned a value.
 * It is one of the primitive data types in JavaScript.
 * Set by JS itself (automatic)
 * 
 * null: Primitive type, but considered a special object
 * this is a historical bug in JS
 * typeof null === "object"
 * Explicitly assigned 'no value' or 'empty'
 * Set by developers (intentional)
 */

let money;
console.log(typeof money); // Output: "undefined"

console.log("-------------------------------");

function checkUndefined(value1, value2) {
    if (typeof value1 === "undefined" && typeof value2 === "undefined") {
        console.log("The values are undefined.");
    }
    else if (typeof value1 === "undefined" && typeof value2 !== "undefined") {
        console.log("The first value is undefined.");
        console.log("The second value is defined.");
    }
    else if (typeof value2 === "undefined" && typeof value1 !== "undefined") {
        console.log("The second value is undefined.");
        console.log("The first value is defined.");
    }
    else {
        console.log("The values are defined.");
    }

    const total = value1 + value2;
}

checkUndefined(money); // Output: "The value is undefined."

console.log("-------------------------------");

checkUndefined(10);    // Output: "The value is defined."

console.log("-------------------------------");

checkUndefined(money, 20); // Output: "The first value is undefined." "The second value is defined."

console.log("-------------------------------");

checkUndefined(30, money); // Output: "The second value is undefined." "The first value is defined."

console.log("-------------------------------");

checkUndefined(money, money); // Output: "The values are undefined."

console.log("-------------------------------");

checkUndefined(10, 20); // Output: "The values are defined."

console.log("-------------------------------");

console.log("Function called: ", checkUndefined(10, 20)); // Output: undefined (since the function does not return anything)

console.log("================================");

const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: undefined
};

console.log(phone.price); // Output: undefined
console.log(phone.color); // Output: undefined
console.log(typeof phone.price); // Output: "undefined"

console.log("-------------------------------");

if (typeof phone.price === "undefined") {
    console.log("Price is not defined.");
}
else {
    console.log("Price is defined.");
}

console.log("-------------------------------");

phone.price = 799;

if (typeof phone.price === "undefined") {
    console.log("Price is not defined.");
}
else {
    console.log("Price is defined."); // Output: "Price is defined."
}

console.log("-------------------------------");

const banks = ["Sonali", "Rupali", "Jamuna", "Meghna"];

console.log(banks[0]); // Output: Sonali
console.log(banks[10]); // Output: undefined

console.log("-------------------------------");

delete banks[1];
console.log(banks[1]); // Output: undefined

console.log("-------------------------------");

console.log("Type of undefined: ", typeof undefined);
console.log("Type of null: ", typeof null);
