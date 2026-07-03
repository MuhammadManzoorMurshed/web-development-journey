import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState("");

    const handleProductSubmit = e => {
        e.preventDefault();

        const productName = e.target.name.value;
        const productPrice = e.target.price.value;
        const productQuantity = e.target.quantity.value

        if (productName.length == 0) {
            setError("Please, provide a product name");

            return;
        }

        if (productPrice.length == 0) {
            setError("Please, provide a price");

            return;
        }

        if (productPrice < 0) {
            setError("Price cannot be negative");

            return;
        }

        // console.log(productName, productPrice, productQuantity);

        // const newProduct = {
        //     productName,
        //     productPrice,
        //     productQuantity
        // }

        const newProduct = {
            name: productName,
            price: productPrice,
            quantity: productQuantity
        }

        console.log(newProduct);

        // handleAddProduct(newProduct);

        if (!error) {
            handleAddProduct(newProduct);
        }
    }

    return (
        <div>
            <h3>Add a Product</h3>
            <form action="" onSubmit={handleProductSubmit}>
                <input type="text" name="name" id="" placeholder='Product Name' />
                <br />
                <input type="text" name="price" id="" placeholder='Product Price' />
                <input type="text" name="quantity" id="" placeholder='Product Quantity' />
                <input type="submit" value="Submit" />
            </form>

            <p><small style={{color: "yellow"}}>{error}</small></p>
        </div>
    );
};

export default ProductForm;