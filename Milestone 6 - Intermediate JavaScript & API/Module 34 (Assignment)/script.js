console.log("Script loaded successfully.");

const categoryContainer = document.getElementById('category');
const treesContainer = document.getElementById('trees');

// Fetching categories from the API and populating the category section
const url = "https://openapi.programming-hero.com/api/categories";
fetch(url)
    .then(response => response.json())
    .then(data => {

        data.categories.forEach(category => {
            categoryContainer.innerHTML += `<p class="px-[10px] py-[8px] font-normal text-[#1F2937] text-base leading-6 cursor-pointer">${category.category_name}</p>`;
        })

        // Fetching all Trees from the API and populating the trees section by specific category
        const category = document.querySelectorAll('#category p');
        const allTreesUrl = 'https://openapi.programming-hero.com/api/plants';

        const fetchAllTrees = function () {
            showSpinner();

            fetch(allTreesUrl)
                .then(response => response.json())
                .then(data => {
                    treesContainer.innerHTML = '';

                    treesContainer.innerHTML = data.plants
                        .map(plant => `
                            <div class="bg-white p-4 rounded-2xl">
                                <img class="mb-3 w-full h-[185px] object-cover" src=${plant.image} alt="">
                                <h3 class="plant-name font-semibold text-[#1F2937] text-[14px] leading-[20px] cursor-pointer">${plant.name}</h3>
                                <p class="my-2 text-[#1F2937] font-normal text-[12px] leading-4 opacity-80">${plant.description}</p>
                                <div class="mb-2 flex justify-between">
                                    <p class="bg-[#DCFCE7] text-[#15803D] text-sm font-medium rounded-[400px] px-3 py-1">${plant.category}</p>
                                    <p class="text-[#1F2937] font-semibold text-[14px] leading-[20px]">৳ <span class="plant-price">${plant.price}</span></p>
                                </div>
                                <button class="tree-button btn rounded-full bg-[#15803D] text-white w-full ">Add to Cart</button>
                            </div>
                    `).join('');

                    hideSpinner();

                    const plantNames = document.querySelectorAll('.plant-name');
                    modal(plantNames);
                    const plantPrices = document.querySelectorAll('.plant-price');

                    const plantButtons = document.querySelectorAll('.tree-button');
                    cart(plantButtons, plantNames, plantPrices);
                })
        }

        fetchAllTrees();

        for (let i = 0; i < category.length; i++) {
            category[i].addEventListener('click', function () {
                category.forEach(cat => {
                    cat.classList.remove('bg-[#15803D]', 'text-white');
                    cat.classList.add('text-[#1F2937]');
                });

                this.classList.add('bg-[#15803D]', 'text-white');

                if (i === 0) {
                    fetchAllTrees();
                    return;
                }

                const treesUrl = `https://openapi.programming-hero.com/api/category/${i}`;

                showSpinner();

                fetch(treesUrl)
                    .then(response => response.json())
                    .then(data => {

                        treesContainer.innerHTML = '';

                        treesContainer.innerHTML = data.plants
                            .map(plant => `
                            <div class="bg-white p-4 rounded-2xl">
                                <img class="mb-3 w-full h-[185px] object-cover" src=${plant.image} alt="">
                                <h3 class="plant-name font-semibold text-[#1F2937] text-[14px] leading-[20px] cursor-pointer">${plant.name}</h3>
                                <p class="my-2 text-[#1F2937] font-normal text-[12px] leading-4 opacity-80">${plant.description}</p>
                                <div class="mb-2 flex justify-between">
                                    <p class="bg-[#DCFCE7] text-[#15803D] text-sm font-medium rounded-[400px] px-3 py-1">${plant.category}</p>
                                    <p class="text-[#1F2937] font-semibold text-[14px] leading-[20px]">৳ <span class="plant-price">${plant.price}</span></p>
                                </div>
                                <button class="tree-button btn rounded-full bg-[#15803D] text-white w-full">Add to Cart</button>
                            </div>
                        `).join('');

                        hideSpinner();

                        const plantNames = document.querySelectorAll('.plant-name');
                        modal(plantNames);

                        const plantPrices = document.querySelectorAll('.plant-price');

                        const plantButtons = document.querySelectorAll('.tree-button');
                        cart(plantButtons, plantNames, plantPrices);
                    })
            })
        }
    })
    .catch(error => console.error('Error fetching data: ', error));

const modal = plantNames => {
    for (let i = 0; i < plantNames.length; i++) {
        plantNames[i].addEventListener('click', e => {
            const plantDetailUrl = `https://openapi.programming-hero.com/api/plant/${i + 1}`;
            fetch(plantDetailUrl)
                .then(response => response.json())
                .then(data => {
                    const modal = document.getElementById('plant-modal');
                    const modalBox = document.getElementById('modal-box');
                    modalBox.innerHTML = `
                        <h3 id="m-plant-name" class="text-lg font-bold mb-1">${data.plants.name}</h3>
                        <img id="m-plant-image" class="py-1 rounded-lg w-full h-[300px] object-cover" src=${data.plants.image} alt="">
                        <p id="m-plant-category" class="py-1"><b>Category:</b> ${data.plants.category}</p>
                        <p id="m-plant-price" class="py-1"><b>Price:</b> $ ${data.plants.price}</p>
                        <p id="m-plant-description" class="py-1 text-justify"><b>Description: </b> ${data.plants.description}</p>
                        <div class="modal-action">
                            <form method="dialog">
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn">Close</button>
                            </form>
                        </div>
                    `;

                    modal.showModal();
                })
                .catch(error => console.error('Error fetching plant details: ', error));
        })
    }
}

const cart = (plantButtons, plantNames, plantPrices) => {
    const cartContainer = document.getElementById('cart');
    const cartTotalPrice = document.getElementById('cart-total-price');
    let totalItemPrice = 0;
    let totalPrice = 0;

    for (let i = 0; i < plantButtons.length; i++) {
        plantButtons[i].addEventListener('click', () => {

            const existingItems = cartContainer.children;
            let itemFound = false;

            for (let j = 0; j < existingItems.length; j++) {
                const itemName = existingItems[j].querySelector('.cart-plant-name').innerText;

                if (itemName === plantNames[i].innerText) {
                    const quantityElement = existingItems[j].querySelector('.quantity');
                    const itemPrice = existingItems[j].querySelector('.cart-plant-price').innerText;
                    let quantity = parseInt(quantityElement.innerText);

                    quantityElement.innerText = quantity + 1;

                    totalPrice += parseFloat(itemPrice);
                    cartTotalPrice.innerText = totalPrice.toFixed(2);
                    console.log(itemPrice + " " + totalPrice);

                    itemFound = true;
                    break;
                }
            }

            if (!itemFound) {
                cartContainer.insertAdjacentHTML('beforeend', `
                    <div class="tree flex justify-between items-center gap-[10px] my-2 bg-[#F0FDF4] px-3 py-2">
                        <div class="">
                            <h4 class="cart-plant-name mb-2 font-semibold text-[#1F2937] text-[14px] leading-5">${plantNames[i].innerText}</h4>
                            <p class="font-normal text-[#1F2937] text-base leading-4 opacity-50">৳ <span class="cart-plant-price">${plantPrices[i].innerText}</span> x <span class="quantity">1</span></p>
                        </div>
                        <i class="fa-solid fa-xmark opacity-50 cursor-pointer" onclick="removeCartItem(this)"></i>
                    </div>
                `);


                totalPrice += parseFloat(plantPrices[i].innerText);
                cartTotalPrice.innerText = totalPrice.toFixed(2);

                console.log(plantPrices[i].innerText + " " + totalPrice);
            }
            
        });
    }
}

const removeCartItem = (icon) => {
    const cartItem = icon.parentElement;

    const itemPrice = cartItem.querySelector('.cart-plant-price').innerText;
    const quantity = cartItem.querySelector('.quantity').innerText;

    const cartTotalPrice = document.getElementById('cart-total-price');
    let totalPrice = parseFloat(cartTotalPrice.innerText);

    totalPrice -= parseFloat(itemPrice) * parseInt(quantity);
    cartTotalPrice.innerText = totalPrice.toFixed(2);

    cartItem.remove();
}

const spinner = document.getElementById('loading-spinner');

function showSpinner() {
    spinner.classList.remove('hidden');
}

function hideSpinner() {
    spinner.classList.add('hidden');
}

