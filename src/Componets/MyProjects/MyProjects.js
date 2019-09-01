import React from "react";
import styles from "./Projects.module.css";
import {H2,H3} from "../Titles/Titles";


const Project = props => {
  return (
    <div className={styles.project}>
      <div className={styles.imgProject}>
        <div><div className={styles.btn}>View</div></div>
      </div>
      <H3>{props.title}</H3>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
        praesentium.
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <H2>My Works</H2>
        <div>
          <Project title="Social Network" />
          <Project title="Todo List" />
          <Project title="Calculator" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
