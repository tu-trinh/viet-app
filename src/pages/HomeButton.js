import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import Button from '../media/HomeButton.png';

export default class HomeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavLink to = "/"><img src = {Button} style = {{width: 80, position: 'fixed', left: 0}} /></NavLink>
    );
  }
}
