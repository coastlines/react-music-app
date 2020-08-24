import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Switch from '@material-ui/core/Switch';

export default function OnlineStatusToggle() {
  const [state, setState] = 
    useState({
    isOnline: true,
    notification: "",
  })

 const handleChange = (event) => {
  if (!event.target.checked) {
    setState({
      isOnline: event.target.checked, // false
      notifications: "Your application is offline. You won't be able to share or stream music to other devices.",
    })
  } else {
    setState({
      isOnline: event.target.checked, //true
      notifications: "",
    })
  }

   };

  return (
    <Card >
      <Switch 
        checked={state.isOnline} 
        onChange={handleChange} 
        name="isOnline" 
      />
    </Card>
  )
}