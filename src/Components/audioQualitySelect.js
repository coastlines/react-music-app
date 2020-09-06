import React from "react";
import Card from '@material-ui/core/Card';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function AudioQualitySelect() {
  const [audioQuality, setAudioQuality] = React.useState(2);
  const [warning, setWarning] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAudioQuality(event.target.value);

    if (event.target.value < 2) {
      setWarning(
        " Music quality is degraded. Increase quality if your connection allows it."
      );

      console.log(warning);
    } else {
      setWarning("");
      console.log(warning);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card className="componentCard">
      <h3>Audio Quality</h3>
      <p>{warning}</p>
      <FormControl>
        <InputLabel id="audioQualityInputLabel">
          Audio Quality
        </InputLabel>
        <Select
          id="audioQualitySelect"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={audioQuality}
          default={"Normal"}
          onChange={handleChange}
        >
          <MenuItem value="Audio Quality"></MenuItem>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
}
