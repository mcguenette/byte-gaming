import React, { createContext, useState, useEffect } from 'react';
import './cart.css';

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product, callback) => {
        setCart((prevCart) => {
            const newCart = [...prevCart, product];
            localStorage.setItem('cart', JSON.stringify(newCart)); 
            if (callback) callback();
            return newCart;
        });
    };

    const removeItem = (productId) => {
        setCart((prevCart) => {
            const newCart = prevCart.filter(product => product.productId !== productId);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
