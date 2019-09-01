import React from "react";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.name}>Ilya Budko</p>
        <div className={styles.blocks}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Все права защищены</p>
      </div>
    </div>
  );
}

export default Footer;
