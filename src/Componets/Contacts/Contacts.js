import React from "react";
import styles from "./Contacts.module.css";
import { H2 } from "../Titles/Titles";
import { Fade } from "react-reveal";

function Contacts() {
  return (
    <div id="contacts" className={styles.contacts}>
      <Fade>
        <div className={styles.container}>
          <H2>Contacts</H2>
          <form className={styles.formWrapper}>
            <input type="text" className={styles.formArea} placeholder="Name" />
            <input
              type="text"
              className={styles.formArea}
              placeholder="Email"
            />
            <textarea
              cols="30"
              rows="10"
              className={styles.messageArea}
              placeholder="Your message"
            ></textarea>
            <button className={styles.btnSubmit}>Send Message</button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contacts;
