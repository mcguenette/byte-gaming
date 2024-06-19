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
      <button onClick={decrement} className="circle-button subract">-</button>
      <input type='number' value={quantity} readOnly />
      <button onClick={increment} className="circle-button add">+</button>
      </div>
    );
  }

  
export default QuantityBox;
