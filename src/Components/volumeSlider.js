import React from "react";
import Card from "@material-ui/core/Card";
import Slider from "@material-ui/core/Slider";

export default function VolumeSlider() {
  const [value, setValue] = React.useState(20);

  const [warning, setWarning] = React.useState("");

  const handleChange = (event, value) => {
    setValue(value);

    if (value >= 80) {
      setWarning(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
    } else {
      setWarning("");
    }
  };

  return (
    <Card className="componentCard">
      <h3>Volume</h3>
      <p>{warning}</p>
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
    </Card>
  );
}
