// console.log("File is connected.");

const sections = document.getElementsByTagName('section');
console.log(sections);

const sections1 = document.querySelectorAll('section');
console.log(sections1);

for(const section of sections1) {
    console.log(section);

    // section.style.backgroundColor = 'lightblue';
    // section.style.border = '2px solid green';
    // section.style.marginBottom = '5px';
    // section.style.borderRadius = '15px';
    // section.style.padding = '10px';
}

// Dynamic Class
for(const section of sections1) {
    section.classList.add('section-card')
}