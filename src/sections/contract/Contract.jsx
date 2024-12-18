import React from "react";
import ContractStyle from "./Contract.module.css";
import Button from "../../components/button/Button";
import Contracttitl from "../../assets/imges/contract/contracttitl.svg";

const Contract = () => {
  return (
    <div className={ContractStyle.ContractContainer}>
      <div className={ContractStyle.Contracttitl}>
        <img
          className={ContractStyle.Contracttitl}
          src={Contracttitl}
          alt="Contracttitl"
        />
      </div>
      <div className={ContractStyle.Contracttit}>お問い合わせ</div>

      <p className={ContractStyle.Contractcnt}>
        まずお気軽にお問い合わせください
      </p>
      <Button href="#" className={ContractStyle.ContractButton}>
        お問い合わせ
      </Button>
    </div>
  );
};

export default Contract;
