import React from 'react';
import Buttonstyles from './Button.module.css'; 
import icon from '../../assets/material/triangle.png'

const Button = ({ href , children , className, type = 'button' }) => {
  return (
    <a
      href={href}
      className={`${Buttonstyles.button} ${className}`}
      type={type}
    >
      {children}
      {icon && <img src={icon} alt="" className={Buttonstyles.icon} />}
    </a>
  );
};

export default Button;
