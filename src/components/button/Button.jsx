import React from 'react';
import Buttonstyles from './Button.module.css'; 

const Button = ({ href , children , className, type = 'button' }) => {
  return (
    <a
      href={href}
      className={`${Buttonstyles.button} ${className}`}
      type={type}
    >
      {children}
    </a>
  );
};

export default Button;
