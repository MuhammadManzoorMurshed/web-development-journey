console.log('Third File');

// Find parent'
const thirdList = document.getElementById('third-list');

// Create child
const li = document.createElement('li');
li.innerText = 'Brand new list item';
thirdList.appendChild(li);