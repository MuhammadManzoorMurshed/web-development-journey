class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    constructor(name, bread, age) {
        super(name, age);

        this.bread = bread;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

class Cat extends Animal {
    constructor(name, color, age) {
        super(name, age);

        this.color = color;
    }

    meow() {
        console.log(`${this.name} is meowing.`);
    }
}

class Bird extends Animal {
    constructor(name, species, age) {
        super(name, age);

        this.species = species;
    }

    chirp() {
        console.log(`${this.name} is chirping.`);
    }

    fly() {
        console.log(`${this.name} is flying.`);
    }
}

const dog1 = new Dog("Buddy", "Golden Retriever", 4);

console.log("Dog1 Name: ", dog1.name);
console.log("Dog1 Bread: ", dog1.bread);

dog1.eat();
dog1.bark();

console.log("----------------------------");

const cat1 = new Cat("Whiskers", "Gray", 3);

console.log("Cat1 Name: ", cat1.name);
console.log("Cat1 Color: ", cat1.color);

cat1.meow();
cat1.eat();

console.log("----------------------------");

const bird1 = new Bird("Tweety", "Canary", 1);
console.log("Bird1 Name: ", bird1.name);
console.log("Bird1 Species: ", bird1.species);
console.log("Bird1 Age: ", bird1.age);

bird1.chirp();
bird1.eat();
bird1.fly();

console.log("----------------------------");

console.log(dog1);
console.log(cat1);
console.log(bird1);