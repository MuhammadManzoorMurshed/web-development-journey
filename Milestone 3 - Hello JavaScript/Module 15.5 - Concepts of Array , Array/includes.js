const friends = ['Balam', 'Kalam', 'Salam', 'Gelam', 'Pailam'];

console.log(friends.includes('Gelam'));
console.log(friends.includes('gelam'));

if(friends.includes('Salam')) {
    console.log('Party');
}
else {
    console.log('No food');
}

if (friends.includes('Balama')) {
    console.log('Party');
}
else {
    console.log('No food');
}