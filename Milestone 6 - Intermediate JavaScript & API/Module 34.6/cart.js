const handleAddProducts = () => {
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');

    const product = productEl.value;
    const quantity = parseInt(quantityEl.value);


    console.log("Product Added", product, quantity);

    displayProducts(product, quantity);
    addProductsToCart(product, quantity);

    productEl.value = "";
    quantityEl.value = "";
}

const displayProducts = (product, quantity) => {
    const li = document.createElement('li');

    li.innerText = `Product: ${product}, Quantity: ${quantity}`

    const ulEl = document.getElementById('products-container');

    ulEl.appendChild(li);
}

const getCart = () => {
    let cart = {};
    const cartJSON = localStorage.getItem('cart');

    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    }

    return cart;
}

const addProductsToCart = (product, quantity) => {
    const cart = getCart();

    if (cart[product]) {
        cart[product] = cart[product] + quantity;
    } else {
        cart[product] = quantity;
    }

    console.log('Cart: ', cart);

    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
}

const displayProductsFromLs = () => {
    const cart = getCart();

    for(const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);

        displayProducts(product, quantity);
    }
}

displayProductsFromLs();