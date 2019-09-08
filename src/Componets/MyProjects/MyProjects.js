import React from "react";
import styles from "./Projects.module.css";
import { H2, H3 } from "../Titles/Titles";
import todolist from "./../../Assets/imgs/todolist.jpg";
import socialNetwork from "./../../Assets/imgs/social-network.jpg"
import { Fade } from "react-reveal";

const Project = ({img,title}) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgProject} style={img}></div>
      <H3>{title}</H3>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
        praesentium.
      </p>
    </div>
  );
};

const Projects = () => {
  const todolistImg = {
    backgroundImage: `url(${todolist})`
  };
  const socialNetworkImg = {
    backgroundImage: `url(${socialNetwork})`
  };
  return (
    <div id={"projects"} className={styles.projects}>
      <Fade>
        <div className={styles.container}>
          <H2>My Works</H2>
          <div>
            <Project title="Social Network" img={socialNetworkImg}/>
            <Project title="Todo List" img={todolistImg}/>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
