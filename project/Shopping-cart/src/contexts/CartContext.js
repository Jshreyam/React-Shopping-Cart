// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [products] = useState([
        { id: 1, name: 'Apple MacBook Pro', price: 1299.00, image: 'https://via.placeholder.com/300x200?text=MacBook+Pro' },
        { id: 2, name: 'Samsung Galaxy S21', price: 799.00, image: 'https://via.placeholder.com/300x200?text=Galaxy+S21' },
        { id: 3, name: 'Sony WH-1000XM4', price: 349.00, image: 'https://via.placeholder.com/300x200?text=Sony+Headphones' },
        { id: 4, name: 'Apple AirPods Pro', price: 249.00, image: 'https://via.placeholder.com/300x200?text=AirPods+Pro' }
        // Add more products as needed
    ]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
    };

    const updateQuantity = (product, quantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === product.id ? { ...item, quantity: Number(quantity) } : item
            )
        );
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ products, cart, addToCart, removeFromCart, updateQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
