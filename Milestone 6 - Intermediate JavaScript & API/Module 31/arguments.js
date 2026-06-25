function add(a, b) {
    console.log("Parameters value: ",  a, b);
    console.log("argument's: ",  arguments);

    // Error
    // console.log("argument's: ",  arguments.map());

    const params = [...arguments];
    console.log(params);
    console.log(params.map(param => param + 1));
}

add(88, 77);

console.log("-------------------------------");

add(88, 77, 99, 66, 55);