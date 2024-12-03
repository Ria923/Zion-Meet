import React from "react";
import Headerstyles from "./Header.module.css";
import mainImage from "../../assets/imges/hero/maincomputer.png";

const Header = () => {
  return (
    
  <div className={Headerstyles.logoImage}>          
    <img
    className={HeroSectionstyles.mainImage}
    src={mainImage}
    alt="illustration"
  />
  </div>;

)};

export default Header;
