import React from 'react';
import './App.css';
import NavBar from './Components/navbar';
import BasicTextFields from './Components/login';
import OnlineStatusToggle from './Components/onlineStatusToggle';
import VolumeSlider from './Components/volumeSlider';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <BasicTextFields></BasicTextFields>
      <OnlineStatusToggle></OnlineStatusToggle>
      <VolumeSlider></VolumeSlider>
    </div>
  );
}

export default App;
