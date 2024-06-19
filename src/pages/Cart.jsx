import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/cart/CartProvider';
import Button from '../components/Button';
import '../components/cart/cart.css';
import QuantityBox from '../components/QuantityBox';


function Cart() {
  const { cart, removeItem } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    console.log('Cart updated:', cart);
    setCartItems(cart);
  }, [cart]);

  return (
    <div className='cart-page'>
      <h2 className='cart-title'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='cart-empty'>Your cart is empty</p>
      ) : (
        <div className='cart-items container'>
          {cartItems.map(product => (
            <div key={product.id} className='cart-item cart-item-card'>
              <img src={product.thumbnail} alt={product.title} />
              <div className='cart-item-details'>
                <div className='cart-item-left'>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <QuantityBox />
                </div>
                <div className='cart-item-right'>
                <Button 
                  className='secondary remove-btn' 
                  text='Remove' 
                  onClick={() => removeItem(product.id)} 
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className='cart-total container'>
          <h2 className='cart-total-price'>
            Cart Total: ${cartItems.reduce((total, product) => total + product.price, 0)}
          </h2>
          <Button className='primary' text='Checkout' />
        </div>
      )}
    </div>
  );
}

export default Cart;