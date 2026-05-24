let str = "X-ray Yak ex";

if(str.includes('x')) {
    str = str.replace(/x/g, 'X');
    console.log(str);
}

if (str.includes('X')) {
    str = str.replaceAll('X', 'x');
    console.log(str);
}

console.log(str);