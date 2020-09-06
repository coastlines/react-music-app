import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";
import Dashboard from "./dashboard";

export default class DisplayComponent extends Component {
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
        <form id="loginForm">
          {/* noValidate */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email address or username"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            id="loginBtn"
            type="button"
            size="large"
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
            id="logoutBtn"
            type="button"
            size="large"
            variant="outlined"
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