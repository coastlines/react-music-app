import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import NavBar from './Components/navbar';
import SignIn from './Components/login';
import Dashboard from './Components/dashboard';

// transform slider 90 degrees to make an equalizer? 

function App(props) {
  // const [isLoggedIn, setLogin] = 
  //   React.useState(false)
  return (
      <div id='main'>
        <NavBar></NavBar>
        <DisplayComponent></DisplayComponent>
      </div>
  )
    
}

function DisplayComponent(props) {
  const {isLoggedIn, setLogin} = React.useState(false);
  if (!isLoggedIn) {
    return <SignIn></SignIn>;
  }
    return <Dashboard></Dashboard>;
}

export default App;