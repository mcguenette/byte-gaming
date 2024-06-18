import React, { useState } from 'react';
import FirstImage from '../style/img/hyperx_headphones.webp';

function QuantityComponent() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle adding to cart
  const addToCart = () => {
    console.log(`Added ${quantity} item(s) to cart`);
    // Implement the logic to add the item(s) to the cart
  };

  return (
    <div className="quantity-selector">
      <button onClick={decrement}>-</button>
      <input type="number" value={quantity} readOnly />
      <button onClick={increment}>+</button>
      <button onClick={addToCart} className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}

// Updated XHeadphones component to include QuantityComponent
function XHeadphones() {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={FirstImage} alt="product" className='product-img'/>
        <h1>X Headphones</h1>
        <QuantityComponent />
      </div>
      <div className="product-description">
        <p>
          Our X Headphones are the best headphones you can buy. They are comfortable, durable, and have great sound quality. 
          They are perfect for listening to music, watching movies, or playing video games. Order yours today!
        </p>
      </div>
    </div>
  );
}

export default XHeadphones;