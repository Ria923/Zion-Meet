import React from "react";
import Menustyles from "./Menu.module.css";

const Menu = () => {
  // 点击滚动到页面指定位置
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // 平滑滚动
    }
  };

  return (
    <div className={Menustyles.menuContainer}>
      <h1 className={Menustyles.title}>MENU</h1>
      <hr className={Menustyles.divider} />
      <ul className={Menustyles.menuList}>
        <li onClick={() => scrollToSection("section1")}>ZION-MEETとは？</li>
        <li onClick={() => scrollToSection("section2")}>選ばれるポイント</li>
        <li onClick={() => scrollToSection("section3")}>おすすめの機能追加</li>
        <li onClick={() => scrollToSection("section4")}>
          他社を圧倒する理由は？
        </li>
        <li onClick={() => scrollToSection("section5")}>
          問い合わせから契約までの流れ
        </li>
      </ul>
    </div>
  );
};

export default Menu;