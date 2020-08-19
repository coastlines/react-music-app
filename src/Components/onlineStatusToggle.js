import React from 'react';
import Card from '@material-ui/core/Card';
import Switch from '@material-ui/core/Switch';

export default function OnlineStatusToggle() {
  const [state, setState] = 
    React.useState({
    isOnline: true,
  })

 const handleChange = (event) => {
   setState({
     ...state, 
     [event.target.name]: event.target.checked });
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