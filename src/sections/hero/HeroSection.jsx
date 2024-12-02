import React from "react";
import HeroSectionstyles from "./HeroSection.module.css";
import Button from "../../components/button/Button";
import mainImage from "../../assets/imges/hero/maincomputer.png";

const HeroSection = () => { 
  return (
    <div className={HeroSectionstyles.gridContainer}>
      <section className={HeroSectionstyles.heroSection}>
        <div className={HeroSectionstyles.heroContent}>
          <h1 className={HeroSectionstyles.heroTitle}>
            会議がもっと簡単に、
            <br />
            対面と同じ効率を。
          </h1>
          <p className={HeroSectionstyles.heroSubtitle}>
            ZION-MEETで、新しい時代の会議を体感しよう。
          </p>

          <Button href="#" className={HeroSectionstyles.heroButton}>
            お問い合わせ
          </Button>
        </div>

        <div className={HeroSectionstyles.heroVisual}>
          <img
            className={HeroSectionstyles.mainImage}
            src={mainImage}
            alt="illustration"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
