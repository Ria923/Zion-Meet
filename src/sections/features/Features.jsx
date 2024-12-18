import React from "react";
import Featuresstyles from "./Features.module.css";
import Point1 from "../../assets/imges/features/point1.svg";
import Point1Image from "../../assets/imges/features/point1image.png";
import Point2 from "../../assets/imges/features/point2.svg";
import Point2Image from "../../assets/imges/features/point2image.png";
import Point3 from "../../assets/imges/features/point3.svg";
import Point3Image from "../../assets/imges/features/point3image.png";
import Point4 from "../../assets/imges/features/point4.svg";
import Point4Image from "../../assets/imges/features/point4image.png";
import Point5 from "../../assets/imges/features/point5.svg";
import Point5Image from "../../assets/imges/features/point5image.png";
import Featurestitl from "../../assets/imges/features/featurestit.svg";

const featuresData = [
  {
    id: "feature1",
    point: Point1,
    image: Point1Image,
    title: "カスタマイズ",
    text: "企業やチームのニーズに応じて自由に機能をカスタマイズできます。最適化された会議スタイルを簡単に作り上げ、快適な参加環境を提供します。",
  },
  {
    id: "feature2",
    point: Point2,
    image: Point2Image,
    title: "圧倒的コスパの良さ",
    text: "リーズナブルな価格で多機能を提供し、企業ごとの会議効率を最大化。質の高いコミュニケーションを実現します！",
  },
  {
    id: "feature3",
    point: Point3,
    image: Point3Image,
    title: "安全性が高い",
    text: "堅牢なセキュリティ対策で情報漏洩リスクを徹底防止。重要な会議データを安心して管理を実現します！",
  },
  {
    id: "feature4",
    point: Point4,
    image: Point4Image,
    title: "Googleカレンターと連携",
    text: "会議スケジュールを一括管理。大事な予定も見逃さず、効率よく会議を進められます！",
  },
  {
    id: "feature5",
    point: Point5,
    image: Point5Image,
    title: "登録不要",
    text: "面倒な登録手続きは不要！アクセスするだけですぐに会議を開始でき、スピーディーに活用できます。",
  },
];

const Features = () => {
  return (
    <div className={Featuresstyles.featuresContainer}>
      <div className={Featuresstyles.Featuresstitl} id="Featuress">
        <img
          className={Featuresstyles.Featuresstitl}
          src={Featurestitl}
          alt="Featuresstitl"
        />
      </div>
      <h2 className={Featuresstyles.featuresTitle}>選ばれるポイント</h2>
      {featuresData.map((feature, index) => (
        <section
          key={feature.id}
          className={`${Featuresstyles.featureAlternate} ${
            index % 2 === 0 ? Featuresstyles._normal : Featuresstyles._reverse
          } ${Featuresstyles[feature.id]}`}
        >
          <div className={Featuresstyles.featureContent}>
            <h3 className={Featuresstyles.featurePointTitle}>
              <img
                src={feature.point}
                alt="POINT number"
                className={Featuresstyles.featureIcon}
              />
              {feature.title}
            </h3>
            <p className={Featuresstyles.featureText}>{feature.text}</p>
          </div>
          <figure className={Featuresstyles.featureThumb}>
            <img
              src={feature.image}
              alt={`Feature ${index + 1}`}
              className={Featuresstyles.featureImage}
            />
          </figure>
          {index < featuresData.length - 1 && (
            <div className={Featuresstyles.divider}></div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Features;
