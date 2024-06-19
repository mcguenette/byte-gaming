import React, { useContext } from 'react';
import { CartContext } from '../components/cart/CartProvider';
import Button from '../components/Button';
import '../components/cart/cart.css';

function Cart() {
  const { cart, addToCart } = useContext(CartContext);

  const removeItem = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <div className='cart-page'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='cart-items'>
          {cart.map(product => (
            <div key={product.id} className='cart-item'>
              <img src={product.thumbnail} alt={product.title} />
              <div className='cart-item-details'>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <Button 
                  className='secondary' 
                  text='Remove' 
                  onClick={() => removeItem(product.id)} 
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className='cart-total'>
          <h2>
            Total: ${cart.reduce((total, product) => total + product.price, 0)}
          </h2>
          <Button className='primary' text='Checkout' />
        </div>
      )}
    </div>
  );
}

export default Cart;
