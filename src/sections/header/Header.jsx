import React from "react";
import Headerstyles from "./Header.module.css";
import logoImage from "../../assets/imges/header/LOGO.png"; // 修正文件夾名稱

const Header = () => {
  return (
    <div className={Headerstyles.headerLogo}>
      <img className={Headerstyles.logoImage} src={logoImage} alt="LOGO" />{" "}
      {/* 修正變數名 */}
    </div>
  );
};

export default Header;
