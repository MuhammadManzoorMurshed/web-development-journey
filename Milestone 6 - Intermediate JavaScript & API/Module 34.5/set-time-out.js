console.log(1);
console.log(2);

const timeOutId1 = setTimeout(
    () => {
        console.log(3);
    }
    , 3000);

console.log( "Timeout ID 1:", timeOutId1);

const timeOutId2 = setTimeout(
    () => {
        console.log(33);
    }
    , 3000);

console.log( "Timeout ID 2:", timeOutId2 );

const timeOutId3 = setTimeout(
    () => {
        console.log(333);
    }
    , 3000);

console.log( "Timeout ID 3:", timeOutId3 );
clearTimeout(timeOutId2);

console.log(4);
console.log(5);