import React, {Component} from 'react';
import BackButton from './BackButton'
// import BackButton from '';

export default class TitleBar extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      // Style will be changed later to be dynamic
      <div>
        <div className="TitleBar" style = {{height: '12.5%', width:'100%', position: 'fixed', backgroundColor: this.props.color, textAlign: 'center', color: 'white'}}>
          <BackButton backbuttonLink = {this.props.backbuttonPath} style = {{position: 'fixed', left: 50}}/>
          <h1>{this.props.title}</h1>
        </div>
        <br/><br/><br/><br/><br/>
      </div>
    );
  }
}
