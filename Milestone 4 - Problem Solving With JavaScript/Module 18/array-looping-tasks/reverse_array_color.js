const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const reversedColors = [];

for(const color of colors) {
    reversedColors.unshift(color);
}

console.log(reversedColors);