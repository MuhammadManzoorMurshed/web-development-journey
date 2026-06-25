/*
=> Class: This is a template or blueprint for creating objects with specific properties and methods.
=> Object: An instance of a class that contains actual values for the properties defined in the class.

=> Properties: These are the attributes or characteristics of a class that define its state.
=> Methods: These are functions defined within a class that describe the behaviors or actions that objects of the class can perform

*/

class Player {
    constructor(name, age) {
        this.name = name || "Default Player";
        this.age = age || 25;
        this.location = "Bangladesh";
        console.log("Player class constructor called with name:", name);
    }

    goal() {
        console.log("Goal scored!");
    }

    getTeamName() {
        return "Dream FC";
    }
}

const player1 = new Player();

console.log("----------------------------");

player1.goal();
console.log("Team Name:", player1.getTeamName());

console.log("----------------------------");

const player2 = new Player("John Doe");

console.log("----------------------------");

const player3 = new Player("Jane Smith");

console.log("----------------------------");

const player4 = new Player("Manzoor Murshed", 30);

console.log("----------------------------");

console.log("Player1:", player1);
console.log("Player2:", player2);
console.log("Player3:", player3);
console.log("Player4:", player4);

console.log("----------------------------");

console.log("Player1 Name:", player1.name);
console.log("Player2 Age:", player2.age);
console.log("Player4 Location:", player4.location);

console.log("----------------------------");

console.log(player1 instanceof Player); // true
console.log(player2 instanceof Player); // true
console.log(player3 instanceof Player); // true
console.log(player4 instanceof Player); // true 