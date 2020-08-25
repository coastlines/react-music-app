import React, { Component } from 'react';
import OnlineStatusToggle from './onlineStatusToggle';
import VolumeSlider from './volumeSlider';
import AudioQualitySelect from './audioQualitySelect';

class Dashboard extends Component{

  render() {
  return (
    <div>
      <OnlineStatusToggle></OnlineStatusToggle>
      <VolumeSlider></VolumeSlider>
      <AudioQualitySelect></AudioQualitySelect>
      {/* <p>{this.state.alerts}</p> */}
    </div>
  )}
}

export default Dashboard;


// onChange={ props => this.componentDidUpdate(this.state.warning)} volumeWarning={this.state.warning}

// componentDidUpdate(prevProps, prevState) {
  //   console.log('Component did update!')
  // }
  
  // componentDidUpdate(prevProps, prevState) {

  //   if(prevState.warning !== this.state.warning) {
  //     this.setState = {
  //       warning:  this.state.warning.push(this.props.volumeWarning)
  //       // volume: this.state.warningthis.props.volumeWarning,
  //     }
  //   }
  //   console.log(prevProps,prevState)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // OnlineStatusToggle().handleChange()

  //   // const offlineNotification = "Your application is offline. You won't be able to share or stream music to other devices.";
  //   // let volumeNotification = this.warning.push(this.props.VolumeSlider.warning);
  //   // // const qualityNotification = "Music quality is degraded. Increase quality if your connection allows it.";

  //   // // if (prevState.isOnline !== this.state.isOnline) {
  //   // //   this.setState = {
  //   // //     alerts: [...this.alerts, offlineNotification],
  //   // //   }
  //   // // }

  //   //  if (prevState.isOnline !== this.state.isOnline) {
  //   //   this.setState = {
  //   //     alerts: [...this.alerts, offlineNotification],
  //   //   }
  //   }

    
  //   // console.log(volumeNotification)
  // }