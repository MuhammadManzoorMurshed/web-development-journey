// Login Button Functionality
document.getElementById('login')
.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('login button clicked');
    // console.log(e);

    const mobileNumber = '01516343082';
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value;

    const pinNumberValue = parseInt(document.getElementById('pin-number').value);

    if(mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
        window.location.href = './home.html';
    }
    else {
        alert('Invalid credentials.');
    }
})