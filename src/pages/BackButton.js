import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import Arrow from '../media/backArrow.png';

export default class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.backbuttonLink !== "no" ?
      <NavLink to = {this.props.backbuttonLink}><img src = {Arrow} style = {{width: 80, position: 'fixed', left: 0}} /></NavLink> :
      <p></p>
    );
  }
}
