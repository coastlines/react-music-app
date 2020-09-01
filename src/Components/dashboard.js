import React, { Component } from "react";
import OnlineStatusToggle from "./onlineStatusToggle";
import VolumeSlider from "./volumeSlider";
import AudioQualitySelect from "./audioQualitySelect";


class Dashboard extends Component {

  render() {
    return (
      <div id="dashboard">
        <OnlineStatusToggle></OnlineStatusToggle>
        <VolumeSlider></VolumeSlider>
        <AudioQualitySelect></AudioQualitySelect>
      </div>
    );
  }
}

export default Dashboard;