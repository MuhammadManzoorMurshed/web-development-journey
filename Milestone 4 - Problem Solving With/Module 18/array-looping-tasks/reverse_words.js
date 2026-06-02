const statement = 'I am a hard working person';

var words = statement.split(' ');

const reverseWords = [];

for(const word of words) {
    reverseWords.unshift(word);
}

console.log(reverseWords.join(' '));