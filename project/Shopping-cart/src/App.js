// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Search from './components/Search';

function App() {
    return (
        <div className="App">
            <h1>Shopping Cart</h1>
            <Search />
            <ProductList />
            <Cart />
        </div>
    );
}

export default App;
