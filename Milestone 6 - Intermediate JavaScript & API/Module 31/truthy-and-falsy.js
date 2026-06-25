let data;

function truthyOrFalsy(data) {
    if (data) {
        console.log("Value of data is truthy.");
    }
    else {
        console.log("Value of data is falsy.");
    }
}

console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = 0;
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = 1;
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = -1;
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = '';
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = ' ';
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = '0';
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = false;
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = true;
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = null;
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = [];
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = {};
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");

data = NaN;
console.log("Value of data: ", data);
truthyOrFalsy(data);

console.log("-------------------------------");