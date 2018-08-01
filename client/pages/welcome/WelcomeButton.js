import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

export default class WeclomeButton extends Component {
  constructor(props) {
    super(props);

  }
  

  render() {
    return (
    // Later we could use props so we could customize the look of the button
      
    <NavLink to = {this.props.newLink}>{this.props.text}</NavLink>
    // <button className="Button" style = {{width: 100, height: 100, backgroundColor: this.props.color}} 
      // onClick = {this.passScreen}>
      //   {this.props.text}
      // </button>
    );
  }
}
