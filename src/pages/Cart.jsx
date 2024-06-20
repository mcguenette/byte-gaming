import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/cart/CartProvider';
import Button from '../components/Button';
import '../components/cart/cart.css';
import QuantityBox from '../components/QuantityBox';
import { FaRegTrashCan } from 'react-icons/fa6';


function Cart() {
  const { cart, removeItem } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    console.log('Cart updated:', cart);
    setCartItems(cart);
  }, [cart]);

  return (
    <section className='cart-page container'>
      <h2 className='cart-title'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='cart-empty'>Your cart is empty</p>
      ) : (
        <div className='cart-items'>
          {cartItems.map(product => (
            <div key={product.productId} className='cart-item cart-item-card'>
              <img src={product.productImageURL} alt={product.productName} />
              <div className='cart-item-details'>
                <div className='cart-item-left'>
                  <div className='cart-item-title'><h3>{product.productName}</h3><p>${product.productPrice}</p></div>
                  <div className='cart-item-price'></div>
                  <div className='cart-item-qty'><QuantityBox /></div>
                </div>
                <div className='cart-item-right'>
                  <div className='cart-line-item-price'>
                    <p>${product.productPrice}</p>
                  </div>
                  <div className='cart-line-item-remove'>
                    <Button
                      className='secondary remove-btn'
                      onClick={() => removeItem(product.productId)}
                    >
                      <FaRegTrashCan />
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className='cart-total container'>
          <h3 className='cart-total-price'>
          Cart Total: ${parseFloat(cartItems.reduce((total, product) => total + product.productPrice, 0).toFixed(2))}
          </h3>
          <Button className='primary' text='Checkout' />
        </div>
      )}
    </section>
  );
}

export default Cart;