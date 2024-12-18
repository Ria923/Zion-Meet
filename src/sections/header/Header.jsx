import Headerstyles from "./Header.module.css";
import logoImage from "../../assets/imges/header/LOGO.png"; // 修正文件夹名称
import React, { useState } from "react";
import HamburgerMenu from "../../components/humbagermenu/HamburgerMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 控制菜单显示与隐藏

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // 切换菜单状态
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={Headerstyles.headerLogo}>
      <div>
        <img className={Headerstyles.logoImage} src={logoImage} alt="LOGO" />
      </div>
      <div className={Headerstyles.HamburgerMenu}>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
