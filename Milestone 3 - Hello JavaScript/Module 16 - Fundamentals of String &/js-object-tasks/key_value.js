let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

for(const property in myObject) {
    console.log(property+":" + myObject[property] + " | type: "+ typeof myObject[property]);
}