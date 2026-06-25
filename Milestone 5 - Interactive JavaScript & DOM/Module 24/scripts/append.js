// console.log('Append Connected');

// Parent Node
const parentMain = document.getElementById('main-container');
// console.log(parentMain);

// Create Child
const placeSection = document.createElement('section');

// Create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit'
placeSection.appendChild(h1);

// Create ul
const ul = document.createElement('ul');
placeSection.appendChild(ul);

// Create li
const li1 = document.createElement('li');
li1.innerText = 'Bandarban';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Sundarban';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Kocuban';
ul.appendChild(li3)

// Append placeSsection
parentMain.appendChild(placeSection);

// Easier to create HTML
const booksSection = document.createElement('section');
booksSection.innerHTML = `
    <h1>Books I want to read</h1>

    <ul>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Math</li>
        <li>Biology</li>
    </ul>
`;

parentMain.appendChild(booksSection);