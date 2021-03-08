import React, { Component } from "react";
import history from './../history';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Login to Continue</h1>
          <form>
            <Typography component="div" style={{ backgroundColor: '#c68c53'}} >
            <Button variant="contained" color="primary" style={{ padding: '10px 50px', margin: '10px'}}  onClick={() => history.push('/admin')}>Continue with Facebook</Button>
            <br/>
            <Button variant="contained" color="default" style={{ padding: '10px 60px', margin: '10px'}}  onClick={() => history.push('/employee')}>Continue with Google</Button>
            </Typography>
          </form>
        </div>
      </div>
    );
  }
}