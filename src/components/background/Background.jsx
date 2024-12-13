import React from "react";
import Backgroundstyles from "./Background.module.css";
import Abouttitl from "../../assets/imges/about/abouttit.svg";
import Featurestitl from "../../assets/imges/features/featurestit.svg";
import Recommendedtitl from "../../assets/imges/recomeneded/recommendedtitl.svg";
import ContactUstitl from "../../assets/imges/contractus/contractustitl.svg";
import Inquirytitl from "../../assets/imges/Inquiry/Inquirytitl.svg";
import Contracttitl from "../../assets/imges/contract/contracttitl.svg";

const GlobalBackground = () => {
  return (
    <div className={Backgroundstyles.section}>
      <div className={Backgroundstyles.HeaderHero}></div>
      <div className={Backgroundstyles.About}>
        <div className={Backgroundstyles.Abouttitl} id="About">
          <img
            className={Backgroundstyles.Abouttitl}
            src={Abouttitl}
            alt="Abouttitl"
          />
        </div>
      </div>
      <div className={Backgroundstyles.Features}>
        <div className={Backgroundstyles.Featurestitl} id="Features">
          <img
            className={Backgroundstyles.Featurestitl}
            src={Featurestitl}
            alt="Featurestitl"
          />
        </div>
      </div>
      <div className={Backgroundstyles.Recommended}>
        <div className={Backgroundstyles.Recommendedtitl} id="Recomedened">
          <img
            className={Backgroundstyles.Recommendedtitl}
            src={Recommendedtitl}
            alt="Recommendedtitl"
          />
        </div>
      </div>
      <div className={Backgroundstyles.ContactUs}>
        <div className={Backgroundstyles.ContactUstitl} id="ContactUs">
          <img
            className={Backgroundstyles.ContactUstitl}
            src={ContactUstitl}
            alt="ContactUstitl"
          />
        </div>
      </div>
      <div className={Backgroundstyles.Inquiry}>
        <div className={Backgroundstyles.Inquirytitl} id="Inquiry">
          <img
            className={Backgroundstyles.Inquirytitl}
            src={Inquirytitl}
            alt="Inquirytitl"
          />
        </div>
      </div>
      <div className={Backgroundstyles.Contract}>
        <div className={Backgroundstyles.Contracttitl}>
          <img
            className={Backgroundstyles.Contracttitl}
            src={Contracttitl}
            alt="Contracttitl"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalBackground;
