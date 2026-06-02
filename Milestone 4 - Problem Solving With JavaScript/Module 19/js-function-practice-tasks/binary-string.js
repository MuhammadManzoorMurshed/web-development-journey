function count_zero(str) {
    let zero = 0;
    console.log(str);
    for(const item of str) {
        if(item === '0') {
            zero++;
        }
    }

    return zero;
}

const str = "010110001011";

console.log(count_zero(str));