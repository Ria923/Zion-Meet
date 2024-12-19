import React from "react";
import Contactusicon from "../../assets/imges/contractus/icon.svg";
import Niceicon from "../../assets/imges/contractus/niceicon.svg";
import Staricon from "../../assets/imges/contractus/staricon.svg";
import Contactusstyle from "./ContactUs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // 引入 swiper 的基本樣式
import "swiper/css/pagination"; // 引入 pagination 的樣式
import { Pagination } from "swiper/modules";
import ContactUstitl from "../../assets/imges/contractus/contractustitl.svg";

const ContactUs = () => {
  return (
    <div className={Contactusstyle.Container}>
      <section className={Contactusstyle.ContactusSection}>
        <div className={Contactusstyle.ContactUstitl} id="MBContactUs">
          <img
            className={Contactusstyle.ContactUstitl}
            src={ContactUstitl}
            alt="ContactUstitl"
          />
        </div>
        <div className={Contactusstyle.PCContactUstitl} id="PCContactUs">
          <img
            className={Contactusstyle.PCContactUstitl}
            src={ContactUstitl}
            alt="ContactUstitl"
          />
        </div>
        <div className={Contactusstyle.ContactusContent}>
          <h1 className={Contactusstyle.ContactusTitle}>
            他社との違い
            <img
              className={Contactusstyle.Contactusicon}
              src={Contactusicon}
              alt="Contactusicon"
            />
          </h1>

          <p className={Contactusstyle.Contactuscontant}>
            「多機能・高セキュリティ・低コスト」
            <br />
            全てを兼ね備えたZION-MEETで、
            <br />
            これまでの会議体験を一新。
          </p>
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

        <div className={Contactusstyle.MobileSwiper}>
          <Swiper
            pagination={{
              dynamicBullets: true, // 動態顯示分頁標籤
            }}
            modules={[Pagination]} // 引入 Pagination 模塊
            className="mySwiper"
          >
            <SwiperSlide>
              {/* 手機版標題 */}
              <div className={Contactusstyle.Mobiletitl}>
                <p className={Contactusstyle.Mobiletitlcon}>
                  <span className={Contactusstyle.MobtitlZion}>ZION-MEET</span>
                  と<span className={Contactusstyle.Mobtitlcomp}>A社</span>
                  比べる？
                </p>
              </div>
              <div className={Contactusstyle.MobileZIONA}>
                {/* 手機版介紹菜單 */}
                <div className={Contactusstyle.MobileLeftList}>
                  <div className={Contactusstyle.Item}>料金</div>
                  <div className={Contactusstyle.Item}>機能追加</div>
                  <div className={Contactusstyle.Item}>登録</div>
                  <div className={Contactusstyle.Item}>人数無制限</div>
                  <div className={Contactusstyle.Item}>時間無制限</div>
                </div>
                {/* 手機版介紹ZIONMEET */}
                <div className={Contactusstyle.MobileZion}>
                  <p className={Contactusstyle.MobileZioncont}>
                    ¥5,000円~/月{" "}
                    <span className={Contactusstyle.Mobilelit_note}>(*1)</span>
                  </p>
                  <div className={Contactusstyle.MobileZionFeature}>○</div>
                  <div className={Contactusstyle.MobileZionFeature}>○</div>
                  <div className={Contactusstyle.MobileZionFeature}>不要</div>
                  <div className={Contactusstyle.MobileZionFeature}>○</div>
                </div>

                {/* 手機版介紹A */}
                <div className={Contactusstyle.MobileA}>
                  <p className={Contactusstyle.MobileAFeature}>1人 ¥3,438/月</p>
                  <div className={Contactusstyle.MobileAFeature}>✕</div>
                  <div className={Contactusstyle.MobileAFeature}>✕</div>
                  <div className={Contactusstyle.MobileAFeature}>
                    主催者は必要
                  </div>
                  <div className={Contactusstyle.MobileAFeature}>✕</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* 手機版標題 */}
              <div className={Contactusstyle.Mobiletitl}>
                <p className={Contactusstyle.Mobiletitlcon}>
                  <span className={Contactusstyle.MobtitlZion}>ZION-MEET</span>
                  と<span className={Contactusstyle.Mobtitlcomp}>B社</span>
                  比べる？
                </p>
              </div>

              <div className={Contactusstyle.MobileZIONA}>
                {/* 手機版介紹菜單 */}
                <div className={Contactusstyle.MobileLeftList}>
                  <div className={Contactusstyle.Item}>料金</div>
                  <div className={Contactusstyle.Item}>機能追加</div>
                  <div className={Contactusstyle.Item}>登録</div>
                  <div className={Contactusstyle.Item}>人数無制限</div>
                  <div className={Contactusstyle.Item}>時間無制限</div>
                </div>
                {/* 手機版介紹ZIONMEET */}
                <div className={Contactusstyle.MobileZion}>
                  <p className={Contactusstyle.MobileZioncont}>
                    ¥5,000円~/月{" "}
                    <span className={Contactusstyle.Mobilelit_note}>(*1)</span>
                  </p>
                  <div className={Contactusstyle.MobileZionFeature}>○</div>
                  <div className={Contactusstyle.MobileZionFeature}>○</div>
                  <div className={Contactusstyle.MobileZionFeature}>不要</div>
                  <div className={Contactusstyle.MobileZionFeature}>○</div>
                </div>

                {/* 手機版介紹B */}
                <div className={Contactusstyle.MobileA}>
                  <p className={Contactusstyle.MobileAcont}>1人 ¥2200/月</p>
                  <div className={Contactusstyle.MobileAFeature}>✕</div>
                  <div className={Contactusstyle.MobileAFeature}>✕</div>
                  <div className={Contactusstyle.MobileAFeature}>
                    主催者は必要
                  </div>
                  <div className={Contactusstyle.MobileAFeature}>✕</div>
                </div>
              </div>
            </SwiperSlide>
            {/* 可以根據需要添加更多的 SwiperSlide */}
          </Swiper>
        </div>

        <p className={Contactusstyle.note}>
          (※1)初期費用は別途発生します。そして、機能の追加に応じて毎月の費用が増加します。
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
