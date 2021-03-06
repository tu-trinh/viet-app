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
      <NavLink to = {this.props.backbuttonLink}><img src = {Arrow} style = {{top:5, width: 50, position: 'fixed', left: 250}} /></NavLink> :
      <p></p>
    );
  }
}
