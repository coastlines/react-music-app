import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    alignSelf: "center",
    justifySelf: "center",
    margin: "auto",
  },
}));


export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" id="navbar">
        <Toolbar> 
           {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
          {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            React Music App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
