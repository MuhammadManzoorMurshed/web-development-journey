const biriyaniKhor = ['Abul', 'Babul', 'Kabul', 'Cabul', 'Abul', 'Babul', 'Dabul', 'Kabul', 'Cabul'];
const numbers = [1, 5, 61, 87, 5, 81, 61];

function noDuplicate(array) {
    // console.log(array);
    const unique = [];
    for(const item of array) {
        if(unique.includes(item) == false) {
            unique.push(item);
        }
    }

    return unique;
}

let uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);

console.log("---------------------------")

uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);