import React, { useEffect, useState } from "react";
import HeroSectionstyles from "./HeroSection.module.css";
import Button from "../../components/button/Button";
import mainImage from "../../assets/imges/hero/maincomputer.svg";
import logoImage from "../../assets/imges/header/LOGO.png";

const HeroSection = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);

  // 組件加載後觸發 H1 和 P 的淡入效果
  useEffect(() => {
    setIsTitleVisible(true);
    setTimeout(() => setIsSubtitleVisible(true), 500); // 延遲 500ms 顯示 P
  }, []);

  return (
    <div className={HeroSectionstyles.gridContainer}>
      <div className={HeroSectionstyles.headerLogo}>
        <img
          className={HeroSectionstyles.logoImage}
          src={logoImage}
          alt="LOGO"
        />
      </div>
      <section className={HeroSectionstyles.heroSection}>
        <div className={HeroSectionstyles.heroContent}>
          {/* H1 標題只在這裡加上淡入效果 */}
          <h1
            className={`${HeroSectionstyles.heroTitle} ${
              isTitleVisible ? HeroSectionstyles.fadeIn : ""
            }`}
          >
            会議がもっと簡単に、
            <br />
            対面と同じ効率を。
          </h1>
          <p
            className={`${HeroSectionstyles.heroSubtitle}  ${
              isSubtitleVisible ? HeroSectionstyles.fadeIn : ""
            }`}
          >
            ZION-MEETで、新しい時代の会議を体感しよう。
          </p>

          <Button href="#" className={HeroSectionstyles.heroButton}>
            お問い合わせ
          </Button>
        </div>
        <figure className={HeroSectionstyles.main}>
          <img
            className={HeroSectionstyles.mainImage}
            src={mainImage}
            alt="mainImage"
          />
        </figure>
      </section>
    </div>
  );
};

export default HeroSection;
