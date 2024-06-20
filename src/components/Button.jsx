import React from 'react';

const Button = ({ text, onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children ? children : text}
    </button>
  );
};

export default Button;