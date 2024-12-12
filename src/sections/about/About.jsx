import React from "react";
import Aboutstyle from "./About.module.css";
import Abouticon from "../../assets/imges/about/icon.svg";

const About = () => {
  return (
    <div className={Aboutstyle.gridContainer}>
      <section className={Aboutstyle.AboutSection}>
        <div className={Aboutstyle.AboutContent}>
          <h2 className={Aboutstyle.AboutTitle}>
            ZION-MEET <span className={Aboutstyle.Abouttit}>とは</span>
            <img
              className={Aboutstyle.Abouticon}
              src={Abouticon}
              alt="abouticon"
            />
          </h2>

          <p className={Aboutstyle.Aboutcontant}>
            ZION-MEETは、シンプルで効率的な会議システム。
            豊富な機能を低コストで提供し、スムーズなコミュニケーションを実現します。
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
