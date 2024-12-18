import React from "react";
import Footerstyles from "./Footer.module.css";
import Button from "../../components/button/Button";
import Logo from "../../assets/imges/footer/LOGO.svg";

const Footer = () => {
  // 点击滚动到页面指定位置
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // 平滑滚动
    }
  };

  return (
    <div className={Footerstyles.footerContainer}>
      <section className={Footerstyles.footerSection}>
        <div className={Footerstyles.footerLogo}>
          <img className={Footerstyles.Logo} src={Logo} alt="ZionLogo" />
          <p className={Footerstyles.zionname}>株式会社ZION</p>
        </div>

        <div className={Footerstyles.link}>
          <ul className={Footerstyles.footerList}>
            <li onClick={() => scrollToSection("MBAbout")}>ZION-MEETとは？</li>
            <li onClick={() => scrollToSection("MBFeatures")}>特徴</li>
            <li onClick={() => scrollToSection("MBRecomedened")}>
              おすすめの機能
            </li>
            <li onClick={() => scrollToSection("MBContactUs")}>
              他社との違い？
            </li>
            <li onClick={() => scrollToSection("MBInquiry")}>
              問い合わせから契約までの流れ
            </li>
          </ul>
        </div>
        <div className={Footerstyles.Buttonarea}>
          <Button href="#" className={Footerstyles.footerButton}>
            お問い合わせ
          </Button>
        </div>
      </section>

      <footer className={Footerstyles.footer}>
        <p className={Footerstyles.copyright}>
          Copyright &copy; 2024 ZION-MEET All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
