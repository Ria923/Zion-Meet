import React from "react";
import Backgroundstyles from "./Background.module.css";

const GlobalBackground = () => {
  return (
    <div className={Backgroundstyles.section}>
      <div className={Backgroundstyles.HeaderHero}></div>
      <div className={Backgroundstyles.About}></div>
      <div className={Backgroundstyles.Features}></div>
      <div className={Backgroundstyles.Recommended}></div>
      <div className={Backgroundstyles.ContactUs}></div>

      <div className={Backgroundstyles.Inquiry}></div>
      <div className={Backgroundstyles.Contract}></div>
    </div>
  );
};

export default GlobalBackground;
