import { useState } from 'react';
import Button from './Button';

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
      <Button onClick={decrement} className="circle-button subract" text='-'/>
      <input type='number' value={quantity} readOnly  className='qty-input'/>
      <Button onClick={increment} className="circle-button add" text='+'/>
      </div>
    );
  }

  
export default QuantityBox;
