import React from 'react';
import './App.css';
import NavBar from './Components/navbar';
import BasicTextFields from './Components/login';
// import OnlineStatusToggle from './Components/onlineStatusToggle';
// import VolumeSlider from './Components/volumeSlider';
// import AudioQualitySelect from './Components/audioQualitySelect';
import Dashboard from './Components/dashboard';


// transform slider 90 degrees to make an equalizer? 
function App() {
  return (
    <div id='main'>
      <NavBar></NavBar>
      <BasicTextFields></BasicTextFields>
      <Dashboard></Dashboard>
      {/* <OnlineStatusToggle></OnlineStatusToggle>
      <VolumeSlider></VolumeSlider>
      <AudioQualitySelect></AudioQualitySelect> */}
    </div>
  );
}

export default App;
