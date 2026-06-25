// Create Element
const newChild = document.createElement('li');
newChild.innerText = 'New born footballer here';

// Find the parent
const playersList = document.getElementById('player-list');

// Append the child to the parent
playersList.appendChild(newChild);