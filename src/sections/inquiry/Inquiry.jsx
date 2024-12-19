import React from "react";
import Inquirystyle from "./Inquiry.module.css";
import StepIcon1 from "../../assets/imges/Inquiry/InquiryIcon1.svg";
import StepIcon2 from "../../assets/imges/Inquiry/InquiryIcon2.svg";
import StepIcon3 from "../../assets/imges/Inquiry/InquiryIcon3.svg";
import StepIcon4 from "../../assets/imges/Inquiry/InquiryIcon4.svg";
import Inquirytitl from "../../assets/imges/Inquiry/Inquirytitl.svg";
const steps = [
  {
    icon: StepIcon1,
    title: "申込フォームの記入",
    description: "簡単なフォームに必要な情報を入力するだけ！",
  },
  {
    icon: StepIcon2,
    title: "プランの相談",
    description: "あなたのニーズに合った解決策をお届けします！",
  },
  {
    icon: StepIcon3,
    title: "導入（1〜2営業日）",
    description: "迅速な導入で、すぐに使用開始！",
  },
  {
    icon: StepIcon4,
    title: "利用開始",
    description: "ZION-MEETで新しい会議体験をスタートしましょう。",
  },
];

const Inquiry = () => (
  <div className={Inquirystyle.gridContainer}>
    <section className={Inquirystyle.InquirySection}>
      <div className={Inquirystyle.Inquirytitl} id="MBInquiry">
        <img
          className={Inquirystyle.Inquirytitl}
          src={Inquirytitl}
          alt="Inquirytitl"
        />
      </div>
      <div className={Inquirystyle.PCInquirytitl} id="PCInquiry">
        <img
          className={Inquirystyle.PCInquirytitl}
          src={Inquirytitl}
          alt="Inquirytitl"
        />
      </div>
      <div className={Inquirystyle.InquiryContent}>
        <h2 className={Inquirystyle.InquiryTitle}>
          お問い合わせから
          <br />
          契約までの流れ
        </h2>
      </div>
      <div className={Inquirystyle.Inquirystep}>
        {steps.map((step, index) => (
          <div key={index} className={Inquirystyle.StepItem}>
            <div className={Inquirystyle.StepNumber}>STEP {index + 1}</div>
            <div
              className={`${Inquirystyle.StepIconcont} ${
                index === 0
                  ? Inquirystyle.FirstStepIcon
                  : index === 1
                  ? Inquirystyle.SecondStepIcon
                  : index === 2
                  ? Inquirystyle.ThirdStepIcon
                  : index === 3
                  ? Inquirystyle.FourthStepIcon
                  : ""
              }`}
            >
              <img
                className={`${Inquirystyle.StepIcon} ${
                  index === 0
                    ? Inquirystyle.FirstIconStyle
                    : index === 1
                    ? Inquirystyle.SecondIconStyle
                    : index === 2
                    ? Inquirystyle.ThirdIconStyle
                    : index === 3
                    ? Inquirystyle.FourthIconStyle
                    : ""
                }`}
                src={step.icon}
                alt={`StepIcon${index + 1}`}
              />
            </div>
            <div
              className={`${Inquirystyle.StepTitleContainer} ${
                Inquirystyle[`TitleStyle${index + 1}`]
              }`}
            >
              <h4>{step.title}</h4>
            </div>

            <div
              className={`${Inquirystyle.StepDescriptionContainer} ${
                Inquirystyle[`DescriptionStyle${index + 1}`]
              }`}
            >
              {step.description && <p>{step.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Inquiry;
