function onlyCharacter(str) {
    if(typeof str !== 'string') {
        return 'Invalid';
    }

    str = str.split(' ');
    let str1 = "";

    for(const s of str) {
        str1 += s.trim();
    }

    return str1.toUpperCase();
}

let str = "  h e llo wor   ld";
console.log(onlyCharacter(str));

str = "Cy   bar- At  tac k  ";
console.log(onlyCharacter(str));

str = " ha ck m e 1 @ru.c  n  ";
console.log(onlyCharacter(str));

str = "Serv er : : Do wn";
console.log(onlyCharacter(str));

str = ["hack", "me"];
console.log(onlyCharacter(str));

str = true;
console.log(onlyCharacter(str));