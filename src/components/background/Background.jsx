import React from "react";
import styles from"./Background.module.css"; // 正確導入 CSS 模組

function GlobalBackground() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.column}></div> {/* 左側區域 */}
      <div className={styles.column}></div> {/* 中間區域 */}
      <div className={styles.gradientColumn}></div> {/* 右側漸層背景 */}
    </div>
  );
}

export default GlobalBackground;
