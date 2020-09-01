import React from "react";
import "./App.css";
import NavBar from "./Components/navbar";
import DisplayComponent from "./Components/login";
// transform slider 90 degrees to make an equalizer?

function App(props) {
  return (
    <div id="main">
      <NavBar></NavBar>
      <DisplayComponent></DisplayComponent>
    </div>
  );
}

export default App;
