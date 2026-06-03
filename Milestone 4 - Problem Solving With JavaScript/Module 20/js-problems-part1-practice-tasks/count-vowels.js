function countVowels(str) {
    let count = 0;

    for(const letter of str) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++;
        }
    }

    return count;
}

const str = "Muhammad Manzoor Murshed";

console.log(countVowels(str));