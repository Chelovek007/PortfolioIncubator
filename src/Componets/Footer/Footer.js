import React from "react";
import styles from "./Footer.module.css";
import telegraIcon from "./../../Assets/imgs/telegram2.svg";
import facebookIcon from "./../../Assets/imgs/facebook.svg";
import likedinIcon from "./../../Assets/imgs/linkedin.svg";
import vkIcon from "./../../Assets/imgs/vk.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.name}>Ilya Budko</p>
        <div className={styles.blocks}>
          <div>
            <a href="">
              <img src={telegraIcon} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={facebookIcon} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={likedinIcon} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={vkIcon} alt="" />
            </a>
          </div>
        </div>
        <p>© 2019 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
