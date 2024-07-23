// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import if you are using React Router for navigation

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>ShopMate</h1>
            </div>
            <ul className="navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
