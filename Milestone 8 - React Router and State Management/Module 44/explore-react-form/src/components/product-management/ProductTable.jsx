import React from 'react';

const ProductTable = ({ products }) => {
    console.log(products);
    return (
        <div>
            <h3>Products: {products.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Produt</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>
                        {
                            products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td></td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </thead>
            </table>
        </div>
    );
};

export default ProductTable;