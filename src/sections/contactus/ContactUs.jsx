import React from "react";
import Contactusicon from "../../assets/imges/contractus/icon.svg";
import Niceicon from "../../assets/imges/contractus/niceicon.svg";
import Staricon from "../../assets/imges/contractus/staricon.svg";
import Contactusstyle from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={Contactusstyle.Container}>
      <section className={Contactusstyle.ContactusSection}>
        <div className={Contactusstyle.ContactusContent}>
          <h1 className={Contactusstyle.ContactusTitle}>
            他社との違い
            <img
              className={Contactusstyle.Contactusicon}
              src={Contactusicon}
              alt="Contactusicon"
            />
          </h1>

          <caption className={Contactusstyle.Contactuscontant}>
            「多機能・高セキュリティ・低コスト」<br></br>
            全てを兼ね備えたZION-MEETで、これまでの会議体験を一新。
          </caption>
        </div>

        <div className={Contactusstyle.Comparison}>
          {/* 左側項目列表 */}
          <div className={Contactusstyle.LeftList}>
            <div className={Contactusstyle.Item}>料金</div>
            <div className={Contactusstyle.Item}>機能追加</div>
            <div className={Contactusstyle.Item}>登録</div>
            <div className={Contactusstyle.Item}>人数無制限</div>
            <div className={Contactusstyle.Item}>時間無制限</div>
          </div>

          {/* 右側對比卡片 */}
          <div className={Contactusstyle.Cards}>
            <div className={Contactusstyle.ZionCard}>
              <div className={Contactusstyle.ZionCardtitl}>
                <span className={Contactusstyle.Staricon1}>
                  <img src={Staricon} alt="Staricon" />
                </span>
                <span className={Contactusstyle.Staricon2}>
                  <img src={Staricon} alt="Staricon" />
                </span>
                <h3 className={Contactusstyle.ZionCardtit}>ZION-MEET</h3>
                <span className={Contactusstyle.Niceicon}>
                  <img src={Niceicon} alt="Niceicon" />
                </span>
              </div>

              <p className={Contactusstyle.ZionCardcont}>
                ¥5,000円~/月{" "}
                <span className={Contactusstyle.lit_note}>(*1)</span>
              </p>
              <div className={Contactusstyle.ZionFeature1}>○</div>
              <div className={Contactusstyle.ZionFeature2}>○</div>
              <div className={Contactusstyle.ZionFeature3}>不要</div>
              <div className={Contactusstyle.ZionFeature4}>○</div>
            </div>

            <div className={Contactusstyle.Card2}>
              <h3>A社</h3>
              <p className={Contactusstyle.Card2cont}>1人 ¥3,438/月</p>
              <div className={Contactusstyle.Card2Feature1}>✕</div>
              <div className={Contactusstyle.Card2Feature2}>✕</div>
              <div className={Contactusstyle.Card2Feature3}>主催者は必要</div>
              <div className={Contactusstyle.Card2Feature4}>✕</div>
            </div>
            <div className={Contactusstyle.Card2}>
              <h3>B社</h3>
              <p className={Contactusstyle.Card2cont}>1人 ¥2200/月</p>
              <div className={Contactusstyle.Card2Feature1}>✕</div>
              <div className={Contactusstyle.Card2Feature2}>✕</div>
              <div className={Contactusstyle.Card2Feature3}>主催者は必要</div>
              <div className={Contactusstyle.Card2Feature4}>✕</div>
            </div>
          </div>
        </div>

        <p className={Contactusstyle.note}>
          (※1)初期費用は別途発生します。そして、機能の追加に応じて毎月の費用が増加します。
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
