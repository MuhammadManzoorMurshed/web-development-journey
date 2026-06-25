class Bird {
    #name;
    #species;
    #age;

    constructor(name, species, age) {
        this.#name = name || "Default Bird";
        this.#species = species || "Unknown Species";
        this.#age = age || 1;

        console.log("Bird class constructor called with name:", name);
    }

    chirp() {
        console.log(`${this.#name} is chirping!`);
    }

    getName() {
        return this.#name;
    }

    getSpecies() {
        return this.#species;
    }

    getAge() {
        return this.#age;
    }
}

const bird1 = new Bird();

console.log("----------------------------");

const bird2 = new Bird("Parrot", "Psittaciformes", 3);

console.log("----------------------------");

console.log(bird2.name);
console.log(bird2.species);
console.log(bird2.age);

console.log("----------------------------");

console.log("Bird2 Name:", bird2.getName());
console.log("Bird2 Species:", bird2.getSpecies());
console.log("Bird2 Age:", bird2.getAge());