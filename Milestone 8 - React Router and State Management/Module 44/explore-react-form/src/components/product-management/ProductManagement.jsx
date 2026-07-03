import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products, setProdcuts] = useState([]);

    const handleAddProduct = newProduct => {
        const newProducts = [...products, newProduct];

        setProdcuts(newProducts);
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;