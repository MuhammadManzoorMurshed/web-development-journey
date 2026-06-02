const students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]

for (const student in students) {
    // console.log(student);
    console.log(students[student].name + " scored " + students[student].marks);
}