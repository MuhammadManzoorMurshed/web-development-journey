function longestWord(str) {
    str = str.split(' ');

    let longestW = '';
    let len = 0;

    for (const s of str) {
        if (len < s.length) {
            len = s.length;
            longestW = s;
        }
    }

    return longestW;
}

const str = "I am learning Programming to become a programmer";

console.log(longestWord(str));