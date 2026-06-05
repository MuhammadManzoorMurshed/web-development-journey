const hero = {
    name: 'Sakib Khan', 
    id: 121,
    address: 'Movie Cinema',
    isSingle: true,
    friend: ['Apu', 'Raza', 'Salman', 'Aamir'],
    movies: [{name: 'No. 1', year: 2015}, {name: 'King Khan', year: 2018}],
    act: function () {
        console.log('Acting like Sakib Khan')
    },
    car: {
        brand: 'Tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

// console.log(student.friend);
// console.log(student.car);

hero.act();