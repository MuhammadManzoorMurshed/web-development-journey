// console.log('External File');

// Option 2 to handle event
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3: get element by id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue')
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const btnMakePurple = document.getElementById('btn-make-purple');
// console.log(btnMakePurple);
btnMakePurple.onclick = makePurple

function makePurple() {
    document.body.style.backgroundColor = 'purple';
}