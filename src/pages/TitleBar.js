import React, {Component} from 'react';
import BackButton from './BackButton'
import HomeButton from './HomeButton'

export default class TitleBar extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      // Style will be changed later to be dynamic
      <div>
        <div className="TitleBar" style = {{height: '12.5%', width:'100%', position: 'fixed', backgroundColor: this.props.color, textAlign: 'center', color: 'white', alignItems: 'center'}}>
          <HomeButton/>
          <BackButton backbuttonLink = {this.props.backbuttonPath}/>
          <h1>{this.props.title}</h1>
        </div>
        <br/><br/><br/><br/><br/>
      </div>
    );
  }
}
