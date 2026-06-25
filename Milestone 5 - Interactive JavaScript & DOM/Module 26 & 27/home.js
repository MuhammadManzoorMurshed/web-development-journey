const transactions = [];

function parseIntoInteger(id) {
    const input = document.getElementById(id);
    const inputData = input.value;
    const convertedInputData = parseInt(inputData);

    console.log(convertedInputData);

    return convertedInputData;
}

function getInputValue(id) {
    const input = document.getElementById(id);
    const inputData = input.value;

    return inputData;
}

function getInnerText(id) {
    const input = document.getElementById(id);
    const inputData = input.innerText;

    return inputData;
}

function setInnerText(newBalance) {
    const availableBalance = document.getElementById('available-balance');

    availableBalance.innerText = newBalance;
}

function handleToggling(id) {
    const forms = document.getElementsByClassName('form');

    for (const form of forms) {
        if (form.id == id) {
            form.style.display = 'block';
        }
        else {
            form.style.display = 'none';
        }
    }
}

function handleButtonToggling(id) {
    const cards = document.getElementsByClassName('card');
    // console.log(cards);

    for (const card of cards) {
        if (card.id == id) {
            card.classList.remove(
                'border-[rgba(8,8,8,0.1)]',
            )

            card.classList.add(
                'bg-[rgba(8,116,242,0.05)]',
                'border-[#0874F2]',
            )

            document.querySelector(`#${id} p`).classList.remove(
                'text-[rgba(8,8,8,0.7)]',
                'font-normal'
            )

            document.querySelector(`#${id} p`).classList.add(
                'text-[#0874F2]',
                'font-semibold'
            )
        }
        else {
            card.classList.remove(
                'bg-[rgba(8,116,242,0.05)]',
                'border-[#0874F2]',
            )

            card.classList.add(
                'border-[rgba(8,8,8,0.1)]',
            )

            console.log(card.querySelector('p'));

            card.querySelector('p').classList.remove(
                'text-[#0874F2]',
                'font-semibold'
            )

            card.querySelector('p').classList.add(
                'text-[rgba(8,8,8,0.7)]',
                'font-normal'
            )
        }
    }
}

function getTime() {
    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dayName = days[now.getDay()];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const hh = hours.toString().padStart(2, "0");
    const mm = minutes.toString().padStart(2, "0");

    return `${dayName} ${hh}:${mm} ${ampm}`;
}

document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const validPin = '1234';

        const bank = getInputValue('bank');
        const accountNumber = getInputValue('account-number');
        const amount = parseIntoInteger('add-amount');
        const pin = getInputValue('add-pin');
        const availableBalance = parseInt(getInnerText('available-balance'));

        if(amount <= 0) {
            alert('Amount should be more than 0.');

            return;
        }

        console.log('Pin: ', pin);
        console.log('Valid Pin: ', validPin);

        if (!bank) {
            alert("Select a bank.");

            return;
        }
        else if (accountNumber.length < 11 || accountNumber.length > 11) {
            alert('Provide a valid account number.');

            return;
        }
        else if (pin !== validPin) {
            alert('Provide a valid pin.');

            return;
        }
        else {
            console.log('Passed');
        }

        const totalAvailableBalance = amount + availableBalance;

        setInnerText(totalAvailableBalance);

        const addMoneyHistory = {
            name: 'Add Money',
            time: getTime()
        }

        transactions.push(addMoneyHistory);
        console.log(addMoneyHistory);
    })

document.getElementById('withdraw-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const validPin = '1234';

        // const bank = document.getElementById('bank').value;
        const agentNumber = document.getElementById('agent-number').value;
        const amount = parseIntoInteger('cashout-amount');
        const pin = document.getElementById('cashout-pin').value;
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        console.log(amount, availableBalance, amount <= 0, amount > availableBalance);

        if(amount <= 0 || amount > availableBalance)
        {
            alert('Invalid amount!');

            return;
        }

        console.log('Pin: ', pin);
        console.log('Valid Pin: ', validPin);

        if (agentNumber.length < 11 || agentNumber.length > 11) {
            alert('Provide a valid agent number.');

            return;
        }
        else if (pin !== validPin) {
            alert('Provide a valid pin.');

            return;
        }
        else {
            console.log('Passed');
        }

        const totalAvailableBalance = availableBalance - amount;

        document.getElementById('available-balance').innerText = totalAvailableBalance;

        const withdrawMoneyHistory = {
            name: 'Withdraw Money',
            time: getTime()
        }

        transactions.push(withdrawMoneyHistory);
        console.log(withdrawMoneyHistory);
    })

document.getElementById('transaction-card')
.addEventListener('click', function(e) {
    e.preventDefault();

    const transactionContainer = document.getElementById('transactions-cards');

    transactionContainer.innerHTML = '';

    console.log(transactionContainer);
    
    for(const transaction of transactions) {
        const transactionContainerCard = document.createElement('div');
        transactionContainerCard.classList.add(
            "flex",
            "justify-between",
            "items-center",
            "border",
            "rounded-xl",
            "border-[rgba(8,8,8,0.1)]",
            "bg-white",
            "px-4",
            "py-[13px]"
        )

        transactionContainerCard.innerHTML = `
        <div class="transactions-card-content flex justify-start items-center gap-2">
            <div>
                <img src="./Payoo-MFS-Resources/assets/wallet1.png" alt="" class="bg-[rgba(8,8,8,0.05)] rounded-[32px] p-3">
            </div>

            <div>
                <h4 id="transaction-name" class="font-semibold text-base text-[rgba(8,8,8,0.7)] mb-2">${transaction.name}</h4>
                <p id="transaction-time" class="font-normal text-[12px] text-[rgba(8,8,8,0.7)]">${transaction.time}</p>
            </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical text-[rgba(8,8,8,0.7)]"></i>
    `

        transactionContainer.appendChild(transactionContainerCard);
    }
})

// Toggling Feature
document.getElementById('add-money-card')
    .addEventListener('click', function () {
        handleToggling('add-money');
        handleButtonToggling('add-money-card');
    })

document.getElementById('cashout-card')
    .addEventListener('click', function () {
        handleToggling('cashout');
        handleButtonToggling('cashout-card');
    })
document.getElementById('transfer-money-card')
    .addEventListener('click', function () {
        handleToggling('transfer-money');
        handleButtonToggling('transfer-money-card');
    })

document.getElementById('get-bonus-card')
    .addEventListener('click', function () {
        handleToggling('get-bonus');
        handleButtonToggling('get-bonus-card');
    })

document.getElementById('pay-bill-card')
    .addEventListener('click', function () {
        handleToggling('pay-bill');
        handleButtonToggling('pay-bill-card');
    })
document.getElementById('transaction-card')
    .addEventListener('click', function () {
        handleToggling('transactions');
        handleButtonToggling('transaction-card');
    })