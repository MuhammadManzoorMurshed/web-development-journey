const numbers = [1, 2, 3, 4, 5, 6];
const tournamentRuns = [[], [], []];
const examMarks = [
    [98, 87, 45, 12, 63],
    [54, 89, 23, 11, 75],
    [45, 87, 12, 56, 45],
    [78, 65, 32, 87, 54]
]

console.log(numbers[0]);

console.log("=================================================");

console.log(examMarks[0]);

console.log("=================================================");

console.log(examMarks[0][0]);

console.log("=================================================");

const firstClassMarks = examMarks[0];
console.log(firstClassMarks[0]);

console.log("=================================================");

console.log(firstClassMarks);

console.log("=================================================");

examMarks[0][1] = 1000;
console.log(examMarks);

console.log("=================================================");
examMarks[1].pop();
console.log(examMarks);

console.log("=================================================");
examMarks[1].push(200);
console.log(examMarks);

console.log("=================================================");

for(const marks of examMarks) {
    console.log(marks);
}