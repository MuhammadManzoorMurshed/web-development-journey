// console.log('Handler Connected')

document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        // console.log('btn-clicked');
        const pageIitleElement = document.getElementById('page-title');
        // console.log(pageIitleElement);

        pageIitleElement.innerText = 'Updated Page Title Text';
    });

document.getElementById('btn-login')
    .addEventListener('click', function () {
        // console.log('Login button clicked');
        const userInfoElement = document.getElementById('user-info');
        userInfoElement.innerText = 'User Login Successfully';
    })