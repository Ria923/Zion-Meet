import React from "react";
import styles from "./Background.module.css"; // 正確導入 CSS 模組

const GlobalBackground = ({ children, className = "" }) => {
  return (
    <div className={`${styles.gridContainer} ${className}`}>
      {/* 左側區域 */}
      <div className={styles.column}></div>
      {/* 中間區域 */}
      <div className={styles.column}></div>
      {/* 右側漸層背景 */}
      <div className={styles.gradientColumn}></div>
      {/* 插入 children */}
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

export default GlobalBackground;
