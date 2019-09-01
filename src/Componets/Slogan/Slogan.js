import React from "react";
import styles from "./Slogan.module.css";
import { H2 } from "./../Titles/Titles";

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <H2>I Am Available For Freelancer</H2>
        <p>Hire me</p>
      </div>
    </div>
  );
}

export default Slogan;
