var experience = 3;
var startingSalary = 15000;

var currentSalary = startingSalary;

for(let i = 0; i < experience; i++)
{
    currentSalary = currentSalary + ((currentSalary / 100) * 5);
}
console.log(currentSalary.toFixed(2));