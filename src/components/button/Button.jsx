import React, { useState } from "react";
import Buttonstyles from "./Button.module.css";
import icon from "../../assets/material/triangle.png";

const Button = ({ href, children, className, type = "button" }) => {
  const [isClicked, setIsClicked] = useState(false);

  // 點擊時觸發動畫
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // 300ms 後移除類名
  };

  return (
    <a
      href={href}
      className={`${Buttonstyles.button} ${className} ${
        isClicked ? Buttonstyles.clicked : ""
      }`}
      type={type}
      onClick={handleClick}
    >
      {children}
      {icon && <img src={icon} alt="" className={Buttonstyles.icon} />}
    </a>
  );
};

export default Button;
