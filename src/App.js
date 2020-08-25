import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navbar";
// import SignIn from './Components/login';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dashboard from "./Components/dashboard";
// import { render } from '@testing-library/react';

// transform slider 90 degrees to make an equalizer?

function App(props) {
  return (
    <div id="main">
      <NavBar></NavBar>
      <DisplayComponent></DisplayComponent>
    </div>
  );
}

class DisplayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isLoggedIn === true) {
      this.setState({
        isLoggedIn: false,
      });
    } else {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <form>
          {/* noValidate */}
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            Sign In
          </Button>
        </form>
      );
    } else {
      return (
        <div>
          <Dashboard></Dashboard>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            Logout
          </Button>
        </div>
      );
    }
  }
}

export default App;
