import Headerstyles from "./Header.module.css";
import logoImage from "../../assets/imges/header/LOGO.png"; // 修正文件夹名称
import HunBager from "../../assets/imges/header/hgmenu.svg"; // 汉堡菜单图标路径
import React, { useState } from "react";

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
      {/* Logo */}
      <img className={Headerstyles.logoImage} src={logoImage} alt="LOGO" />

      {/* 汉堡菜单 */}
      <div className={Headerstyles.HunBagermenu}>
        <nav>
          {/* 点击汉堡菜单切换菜单状态 */}
          <label htmlFor="switch" onClick={toggleMenu}>
            <img
              className={Headerstyles.HunBager}
              src={HunBager}
              alt="HunBager"
            />
          </label>

          {/* 菜单项 */}
          <ul className={`${Headerstyles.menu} ${menuOpen ? "open" : ""}`}>
            <h2>MENU</h2>
            <li onClick={() => scrollToSection("About")}>ZION-MEETとは？</li>
            <li onClick={() => scrollToSection("Features")}>
              選ばれるポイント
            </li>
            <li onClick={() => scrollToSection("Recomedened")}>
              おすすめの機能追加
            </li>
            <li onClick={() => scrollToSection("ContactUs")}>他社との違い？</li>
            <li onClick={() => scrollToSection("Inquiry")}>
              問い合わせから契約までの流れ
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
