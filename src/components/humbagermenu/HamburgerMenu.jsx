import React, { useState } from "react";
import "./HamburgerMenu.css"; // 引入自訂的 CSS 檔案來處理樣式

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 切換菜單顯示狀態
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // 禁用頁面滾動
  };

  // 滾動到指定區域
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hamburger-menu">
      {/* 漢堡圖標 */}
      <div
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* 菜單內容 */}
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <div className="close-icon" onClick={toggleMenu}>
            <span>&#10005;</span> {/* 這是叉叉符號 */}
          </div>
        )}

        <ul className="menuList">
          <li
            onClick={() => {
              scrollToSection("MBAbout");
              toggleMenu();
            }}
          >
            ZION-MEETとは？
          </li>
          <li
            onClick={() => {
              scrollToSection("MBFeatures");
              toggleMenu();
            }}
          >
            選ばれるポイント
          </li>
          <li
            onClick={() => {
              scrollToSection("MBRecomedened");
              toggleMenu();
            }}
          >
            おすすめの機能追加
          </li>
          <li
            onClick={() => {
              scrollToSection("MBContactUs");
              toggleMenu();
            }}
          >
            他社との違い？
          </li>
          <li
            onClick={() => {
              scrollToSection("MBInquiry");
              toggleMenu();
            }}
          >
            問い合わせから契約までの流れ
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
