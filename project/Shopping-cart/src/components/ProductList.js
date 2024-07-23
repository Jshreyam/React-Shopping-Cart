// src/components/ProductList.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductList = () => {
    const { products, addToCart } = useContext(CartContext);

    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
