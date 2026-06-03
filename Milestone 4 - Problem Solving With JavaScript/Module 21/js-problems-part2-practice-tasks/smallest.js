const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallest(names) {
    let smallestName = names[0];

    for(let i = 0; i < names.length; i++) {
        if(smallestName.length > names[i].length) {
            smallestName = names[i];
        }
    }

    return smallestName;
}

console.log(smallest(heights2));