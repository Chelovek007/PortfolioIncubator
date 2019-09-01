import React from "react";
import styles from "./Contacts.module.css";
import {H2} from "../Titles/Titles";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <H2>Contacts</H2>
        <form className={styles.formWrapper}>
          <input type="text" className={styles.formArea} placeholder="Name" />
          <input type="text" className={styles.formArea} placeholder="Email" />
          <textarea
            cols="30"
            rows="10"
            className={styles.messageArea}
            placeholder="Your message"
          ></textarea>
          <button className={styles.btnSubmit}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
