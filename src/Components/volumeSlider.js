import React from 'react';
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

export default function VolumeSlider() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue();
  };

  return (
    <Card >
      <VolumeDown />
      <Slider
        defaultValue={20}
        step={10}
        value={value} 
        onChange={handleChange} 
        aria-labelledby="continuous-slider" 
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
      <VolumeUp />
    </Card>
  )
}