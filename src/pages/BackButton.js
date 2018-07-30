import React, { Component } from 'react';
import TitleBar from '../TitleBar.js'
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

export default class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavLink to = {this.props.backLink}>BACK-ARROW-HERE</NavLink>
    );
  }
}
