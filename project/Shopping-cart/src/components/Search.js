// src/components/Search.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Search = () => {
    const [query, setQuery] = useState('');
    const { products } = useContext(CartContext);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
