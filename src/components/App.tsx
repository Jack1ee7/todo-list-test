import React from "react";
import "../styles/App.css";
import Header from "../components/Header";
import Main from "./Main";
const App = () => {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
