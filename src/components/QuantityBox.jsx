import { useState } from 'react';

function Quantity() {
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
    <div className='quantity-selector'>
      <button onClick={decrement} className="circle-button subract">-</button>
      <input type='number' value={quantity} readOnly />
      <button onClick={increment} className="circle-button add">+</button>
      <button onClick={addToCart} className='primary add-to-cart-btn'>Add to Cart</button>
    </div>
  );
}


export default Quantity;