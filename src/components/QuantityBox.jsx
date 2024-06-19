import { useState } from 'react';

function QuantityBox() {
    const [quantity, setQuantity] = useState(1);
  
    const increment = () => {
      setQuantity(quantity + 1);
    };
  
    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    
    return (
      <div className='quantity-selector'>
        <button onClick={decrement}>-</button>
        <input type='number' value={quantity} readOnly />
        <button onClick={increment}>+</button>
      </div>
    );
  }

  
export default QuantityBox;