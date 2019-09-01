import React from "react";
import styles from "./Titles.module.css";

export const H2 = props => {
  return (
    <div className={styles.titleH2}>
      <h2>{props.children}</h2>
      <div className={styles.line}></div>
    </div>
  );
};

export const H3 = props => {
  return <h3 className={styles.titleH3}>{props.children}</h3>;
};
