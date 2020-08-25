import React from 'react';
// import Card from '@material-ui/core/Card';
// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));
 
export default function AudioQualitySelect() {
  // const classes = useStyles();
  const [audioQuality, setAudioQuality] = React.useState(2);
  const [warning, setWarning] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAudioQuality(event.target.value);

    if (event.target.value < 2) {
      setWarning(" Music quality is degraded. Increase quality if your connection allows it.")
     
      console.log(warning)
    } else {
      setWarning("")
      console.log(warning)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl>
        <InputLabel id="demo-controlled-open-select-label">Audio Quality</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={audioQuality}
          default={"Normal"}
          onChange={handleChange}
        >
          <MenuItem value="Audio Quality">
          </MenuItem>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}