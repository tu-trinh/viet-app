import React, {Component} from 'react';
// import BackButton from '';

export default class TitleBar extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      // Style will be changed later to be dynamic
      <div>
      <div className="TitleBar" style = {{width:'100%', position: 'fixed', backgroundColor: this.props.color, textAlign: 'center', color: 'white'}}>
        <h1>{this.props.title}</h1>
      </div>
      <div style = {{position: 'fixed', left:500}}></div>
      <br/><br/><br/><br/><br/>
      </div>
    );
  }
}
