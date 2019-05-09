import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import NavBar from './NavBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class NormalLoginForm extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="text-box">
          <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png"
            style={{ width: "200", height: "150px", marginBottom: "10px" }}
          />
          <TextField
            id="outlined-email-input"
            className="TextField"
            label="Fullname"
            variant="outlined"
            style={{ marginBottom: "12px" }}
          />
          <TextField
            id="outlined-email-input"
            className="TextField"
            label="Username"
            variant="outlined"
            style={{ marginBottom: "12px" }}
          />

          <TextField
            label="Password"
            className="TextField"
            variant="outlined"
            type="password"
            id="custom-css-outlined-input"
            style={{ marginBottom: "12px" }}
          />
          <div className="butten">
            <Link to='/'>
              <Button variant="contained" color="secondary"
                secondary style={{ width: "100px", height: "40px" }}>
                Submit
              </Button>
            </Link>
          </div>
        </div>
      </div>

    );
  }
}

export default NormalLoginForm;


