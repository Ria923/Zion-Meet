import React from "react";
import RecomenededStyles from "./Recomeneded.module.css";
import Recomeneded1Image from "../../assets/imges/recomeneded/recomeneded1.svg";
import Recomeneded2Image from "../../assets/imges/recomeneded/recomeneded2.svg";
import Recomeneded3Image from "../../assets/imges/recomeneded/recomeneded3.svg";
import Recomeneded4Image from "../../assets/imges/recomeneded/recomeneded4.svg";
import Number1 from "../../assets/imges/recomeneded/O1.svg";
import Number2 from "../../assets/imges/recomeneded/O2.svg";
import Number3 from "../../assets/imges/recomeneded/O3.svg";
import Number4 from "../../assets/imges/recomeneded/O4.svg";

const Recomeneded = [
  {
    id: "01",
    title: "分けるリスト",
    text: "複数のチームが協力するプロジェクトの会議では、会議をより効率的に進めることができます。",
    image: {
      main: Recomeneded1Image,
      secondary: Number1,
    },
    bgColor: "#6D4799",
  },
  {
    id: "02",
    title: "会議記録テンプレート ",
    text: "簡単な操作で議事録を一括管理！定型フォーマットが用意されているので、記録作業が効率化されます。",
    image: {
      main: Recomeneded2Image,
      secondary: Number2,
    },
    bgColor: "#DFA826",
  },
  {
    id: "03",
    title: "字幕自動生成",
    text: "聞き逃しや言語の壁を気にせず、誰でも参加しやすい会議を実現します。",
    image: {
      main: Recomeneded3Image,
      secondary: Number3,
    },
    bgColor: "#DFA826",
  },
  {
    id: "04",
    title: "創意活性化モード",
    text: "のガイド質問や創造的思考ツールを提供することで、チームのアイデアを引き出します。",
    image: {
      main: Recomeneded4Image,
      secondary: Number4,
    },
    bgColor: "#6D4799",
  },
];

const RecomenededFeatures = () => {
  return (
    <div className={RecomenededStyles.container}>
      <h2 className={RecomenededStyles.RecomenededTitle}>おすすめの機能追加</h2>
      <div className={RecomenededStyles.grid}>
        {Recomeneded.map((feature) => (
          <div
            key={feature.id}
            className={RecomenededStyles.card}
            style={{ backgroundColor: feature.bgColor }}
          >
            <span className={RecomenededStyles.cardId}>
              {" "}
              <img
                src={feature.image.secondary}
                alt="Secondary Image"
                style={{ maxWidth: "50px" }}
              />
            </span>

            <div className={RecomenededStyles.cardImgarea}>
              <img
                src={feature.image.main}
                alt={feature.title}
                className={RecomenededStyles.cardImage}
              />
            </div>
            <div className={RecomenededStyles.textarea}>
              <h3 className={RecomenededStyles.cardTitle}>{feature.title}</h3>
              <p className={RecomenededStyles.cardText}>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomenededFeatures;
