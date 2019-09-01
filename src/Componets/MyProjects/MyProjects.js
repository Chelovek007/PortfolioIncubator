import React from "react";
import styles from "./Projects.module.css";
import { H2, H3 } from "../Titles/Titles";
import todolist from "./../../Assets/imgs/todolist.jpg";
import { Fade } from "react-reveal";

const Project = props => {
  const todolistImg = {
    backgroundImage: `url(${todolist})`
  };
  return (
    <div className={styles.project}>
      <div className={styles.imgProject} style={todolistImg}></div>
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
      <Fade>
        <div className={styles.container}>
          <H2>My Works</H2>
          <div>
            <Project title="Social Network" />
            <Project title="Todo List" />
            <Project title="Calculator" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
