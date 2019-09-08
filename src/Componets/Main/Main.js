import React from "react";
import styles from "./Main.module.css";
import Particles from "react-particles-js";
import particlesOpts from "./../../Particles/Particles";
import photo from './../../Assets/imgs/portfolio.jpg'

class Main extends React.Component {
  photo = {
    backgroundImage: `url(${photo})`
  }
  render() {
    return (
      <div id="main" className={styles.main}>
        <div className={styles.container}>
          <div className={styles.greeting}>
            <span>Hi there</span>
            <span>
            I am <span>Ilya Budko</span>
          </span>
            <h1>A frond-end developer</h1>
          </div>
          <div className={styles.photo} >
            <div className={styles.image} style={this.photo}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
