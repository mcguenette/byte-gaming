import React from 'react';

const Button = ({ text, style, onClick, className }) => {
  return (
    <button style={style} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;