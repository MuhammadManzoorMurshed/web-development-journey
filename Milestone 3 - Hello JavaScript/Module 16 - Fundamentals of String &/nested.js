const college = {
    name: "VNCC",
    class: ['10', '11', '12'],
    events: ['Science Fair', 'Victory Day', "21 February"],
    unique: {
        color: 'Blue',
        result: {
            gpa: 5,
            merit: 'Top',
        }
    }
}

console.log(college.name);
console.log(college.unique);
console.log(college.unique.color);

console.log("===========================");

console.log(college);
console.log(college.unique);
console.log(college.unique.result);
console.log(college.unique.result.merit);

console.log("===========================");

college.unique.result.merit = 'Top Top Top Most';
console.log(college.unique.result.merit);

console.log("===========================");

console.log(college.events[1]);
college.events[1] = '16 December';
console.log(college.events[1]);

console.log("===========================");

console.log(college['unique'].result.merit);

console.log("===========================");

console.log(college);
delete college.class;
console.log(college);