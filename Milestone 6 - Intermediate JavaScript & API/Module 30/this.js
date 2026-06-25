class Vehicle {
    constructor(type, brand, year, price) {
        this.type = type || "Car";
        this.brand = brand || "Toyota";
        this.year = year || 2020;
        this.price = price || 20000;

        console.log("Vehicle class constructor called");
    }

    getThis() {
        console.log(this);
    }

    getPrice() {
        console.log(`The price of the vehicle is $${this.price}`);
    }
}

const vehicle1 = new Vehicle();

console.log("----------------------------");

vehicle1.getThis();

console.log("----------------------------");

const vehicle2 = new Vehicle("Bike", "Honda", 2021, 15000);

console.log("----------------------------");

vehicle2.getThis();

console.log("----------------------------");

const vehicle3 = new Vehicle("Truck", "Ford", 2019, 30000);

console.log("----------------------------");

vehicle1.getPrice();
vehicle2.getPrice();
vehicle3.getPrice();

console.log("----------------------------");

const student = {
    name: "Alice",
    score: 1000,
    getScore: function() {
        console.log(this);
    },
    getScoreArrow: () => {
        console.log(this);
    }
};

student.getScore();
student.getScoreArrow();

console.log("----------------------------");

console.log("Ultimate this: ", this);

