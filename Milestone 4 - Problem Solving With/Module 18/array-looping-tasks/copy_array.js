const originialArray = [1, 2, 3];

const copiedArray = [];
for(const item of originialArray) {
    copiedArray.push(item);
}

copiedArray[0] = 99;

console.log("Original: ", originialArray);
console.log("Copy:", copiedArray);