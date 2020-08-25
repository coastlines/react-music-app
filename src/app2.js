import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import NavBar from './Components/navbar';
// import SignIn from './Components/login';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dashboard from './Components/dashboard';
import { render } from '@testing-library/react';

// transform slider 90 degrees to make an equalizer? 

function App(props) {
  // const [isLoggedIn, setLogin] = 
  //   React.useState(false)
  return (
      <div id='main'>
        <NavBar></NavBar>
        <DisplayComponent></DisplayComponent>
      </div>
  )
    
}

function DisplayComponent(props) {
  const {isLoggedIn, setLogin} = React.useState(false);

  // constructor(props) {
  //   super(props);
  //     this.setState ({
  //       isLoggedIn: false,
  //     })
  //   }
  

  const handleClick = () => {
    this.setLogin(true)
    console.log(isLoggedIn)
  }

  // handleClick = () => {
  //   const loginStatus = this.props.isLoggedIn ? false : true;

  //   this.setState({
  //     isLoggedIn: loginStatus,
  //   });
  // }

  
    // render() {
      // const isLoggedIn = isLoggedIn;

      if (!isLoggedIn && !isLoggedIn) {
        return (
            <form >
            {/* noValidate */}
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
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
                // autoComplete="current-password"
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                // className={''}
                // isLoggedIn={isLoggedIn}
                onClick={isLoggedIn}
              >
                Sign In
              </Button>
            </form>
    ) }
    return ( <Dashboard>"pig"</Dashboard> );
  
  }
// }

export default App;