import React from "react";
import styles from "./Skills.module.css";
import reactIcon from "../../Assets/imgs/react-icon.svg";
import jsIcon from "../../Assets/imgs/js-icon.svg";
import htmlIcon from "../../Assets/imgs/html-icon.svg";
import { H2, H3 } from "../Titles/Titles";
import { Fade } from "react-reveal";

const Skill = props => {
  return (
    <div className={styles.skill}>
      <div className={styles.imgSkill}>
        <img src={props.icon} alt="icon" />
      </div>
      <H3>{props.title}</H3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        consequatur doloremque ducimus, et sit suscipit.
      </p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={styles.skills}>
      <Fade>
        <div className={styles.container}>
          <H2>My Skills</H2>
          <div className={styles.wrapper}>
            <Skill title="Java Script" icon={jsIcon} />
            <Skill title="HTML&CSS" icon={htmlIcon} />
            <Skill title="React" icon={reactIcon} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
