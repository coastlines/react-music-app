import React from "react";
import Card from "@material-ui/core/Card";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

export default function VolumeSlider() {
  const [value, setValue] = React.useState(20);

  const [warning, setWarning] = React.useState("");

  const handleChange = (event, value) => {
    setValue(value);

    if (value >= 80) {
      setWarning(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
      //  componentDidUpdate(setWarning);
    } else {
      setWarning("");
    }
  };

  return (
    <Card>
      <VolumeDown />
      <Slider
        defaultValue={value}
        step={10}
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        valueLabelDisplay="auto"
        marks
        min={10}
        max={100}
        warning={warning}
      />
      <VolumeUp />
    </Card>
  );
}
