import React from "react";
import styles from "./Footer.module.css";
import telegraIcon from "./../../Assets/imgs/telegram2.svg";
import whatsapp from "./../../Assets/imgs/whatsapp.svg";
import vkIcon from "./../../Assets/imgs/vk.svg";
import { Fade } from "react-reveal";

const whatsAppLink = "https://wa.me/79100409095?text=Вы%20нам%20подходите";
const vkLink = "https://vk.com/id40021474";
const telegramLink = "tg://resolve?domain=Chelovek007";
function Footer() {
  return (
    <div className={styles.footer}>
      <Fade>
        <div className={styles.container}>
          <p className={styles.name}>Ilya Budko</p>
          <div className={styles.blocks}>
            <div>
              <a href={telegramLink}>
                <img src={telegraIcon} alt="" />
              </a>
            </div>
            <div>
              <a href={whatsAppLink}>
                <img src={whatsapp} alt="" />
              </a>
            </div>
            <div>
              <a href={vkLink}>
                <img src={vkIcon} alt="" />
              </a>
            </div>
          </div>
          <p>© 2019 All Rights Reserved</p>
        </div>
      </Fade>
    </div>
  );
}

export default Footer;
