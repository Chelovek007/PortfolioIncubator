import React from "react";
import styles from "./Main.module.css";
import Particles from "react-particles-js";
import particlesOpts from "./../../Particles/Particles";
import photo from './../../Assets/imgs/portfolio.jpg'

class Main extends React.Component {
  state = {
    style: {transform: "rotateY(0deg) rotateX(0deg)"}
  }
  photo = {
    backgroundImage: `url(${photo})`
  }
  mouseEvent = (e) => {
    const photo = document.getElementById("myPhoto");
    console.log(e.clientX, e.clientY);
    this.setState({style:{transform: `rotateY(${e.clientY*0.005}deg) rotateX(${e.clientX*0.0005}deg)`}})
    // console.log(e.clientX*0.005)
  };
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.greeting}>
            <span>Hi there</span>
            <span>
            I am <span>Ilya Budko</span>
          </span>
            <h1>A frond-end developer</h1>
          </div>
          <div onMouseMove={(e)=>this.mouseEvent(e)} className={styles.photo} >
            <div className={styles.image} style={this.photo}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
