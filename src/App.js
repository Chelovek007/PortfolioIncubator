import React from "react";
import "./App.css";
import Header from "./Componets/Header/Header";
import Main from "./Componets/Main/Main";
import Skils from "./Componets/Skills/Skills";
import Projects from "./Componets/MyProjects/MyProjects";
import Slogan from "./Componets/Slogan/Slogan";
import Contacts from "./Componets/Contacts/Contacts";
import Footer from "./Componets/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className={"portfolio"}>
          <Header/>
          <Main/>
          <Skils/>
          <Projects/>
          <Slogan/>
          <Contacts/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
