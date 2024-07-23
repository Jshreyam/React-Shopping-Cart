// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, total } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item, e.target.value)}
                            />
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
