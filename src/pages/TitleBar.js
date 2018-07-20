import React, { Component } from 'react';

export default class TitleBar extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      // Style will be changed later to be dynamic
      <div className="TitleBar" style  = {{backgroundColor: this.props.color, textAlign: 'center'}}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
