
// Heart Count in Header
function increaseHeartCount() {
    const heartInHeader = document.getElementById('header-heart-count');
    const headerHeartNumber = parseInt(heartInHeader.innerText);

    heartInHeader.innerText = headerHeartNumber + 1;
}

const hearts = document.getElementsByClassName('fa-heart');

for (const heart of hearts) {
    heart.addEventListener('click', function () {
        increaseHeartCount();
    })
}

/* ================================================== */

// Coin in Header
function decreaseCoinCount(cardTitle, cardContact) {
    const coinInHeader = document.getElementById('header-coin-count');
    const headerCoinNumber = parseInt(coinInHeader.innerText);

    if (headerCoinNumber < 20) {
        alert('You do not have sufficient coins. You need to at least 20 coins to call.');
    }
    else {
        coinInHeader.innerText = headerCoinNumber - 20;

        alert('Calling ' + cardTitle + ' ' + cardContact + '...');
    }
}

// function getTime() {
//     const now = new Date();

//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     const dayName = days[now.getDay()];

//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let ampm = hours >= 12 ? "PM" : "AM";

//     hours = hours % 12 || 12;

//     const hh = hours.toString().padStart(2, "0");
//     const mm = minutes.toString().padStart(2, "0");

//     return `${dayName} ${hh}:${mm} ${ampm}`;
// }

function getTime() {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

const cards = document.getElementsByClassName('service-card');
const histories = document.getElementById('histories');

for (const card of cards) {
    const callButton = card.querySelector('.call-btn');

    if (callButton == null) {
        console.log('NULL');
    }
    else {
        callButton.addEventListener('click', function () {
            // Coin Counts and Alert
            const cardTitle = card.querySelector('.card-title').innerText.split('\n').join(' ');
            const cardContact = card.querySelector('.card-contact').innerText;

            decreaseCoinCount(cardTitle, cardContact);

            // Call History
            // const histories = document.getElementById('histories');
            const historyContainer = document.createElement('div');

            const historyTime =  getTime();

            historyContainer.classList.add(
                "flex",
                "justify-between",
                "items-center",
                "px-2",
                "py-4",
                "bg-[#FAFAFA]",
                "rounded-lg"
            );

            historyContainer.innerHTML = `
                <div class="left">
                    <h4 id="history-title" class="font-semibold text-[18px] mb-1">${cardTitle}</h4>
                    <p id="history-contact" class="font-normal text-[18px] text-[#5C5C5C]">${cardContact}</p>
                </div>
                <div id="history-time" class="right font-normal text-[18px] text-[#5C5C5C]">${historyTime}</div>
            `

            histories.appendChild(historyContainer);
        })
    }
}

// Clear Button
document.getElementById('call-history-clear')
.addEventListener('click', () => {
    histories.innerHTML = '';
})

/* ================================================== */

// Copy in Header
function increaseCopyCount() {
    const copyInHeader = document.getElementById('header-copy-count');
    const headerCopyNumber = parseInt(copyInHeader.innerText);

    copyInHeader.innerText = headerCopyNumber + 1;
}

for (const card of cards) {
    const copyButton = card.querySelector('.copy-btn');

    if (copyButton == null) {
        console.log('NULL');
    }
    else {
        copyButton.addEventListener('click', function () {
            const cardContact = card.querySelector('.card-contact').innerText;

            navigator.clipboard.writeText(cardContact)
            .then (() => {
                alert('Number has been copied: ' + cardContact);

                increaseCopyCount();
            })
            .catch(err => {
                alert('Could not copy: ' + err);
            });
        });
    }
}

/* ================================================== */