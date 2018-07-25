// Problem on Button.js this.props.handleClick
import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import WelcomeButton from './WelcomeButton';
//import './App.css';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props); 
    this.state={
      screenStatus: 'Welcome' // Can be login, welcome, learnBook, learnLesson, etc.
    }
    this.screenStatusChange = this.screenStatusChange.bind(this);
  }
  screenStatusChange(newStatus) {
    this.setState({
      screenStatus: newStatus
    })
  }
  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "green"/>
        <br/>
        <WelcomeButton handleClick = {this.screenStatusChange} color = 'purple' text = 'Learn' newLink = '/Learn'/>
        <br/>
        <WelcomeButton handleClick = {this.screenStatusChange} color = 'turquoise' text = 'Practice' newLink = '/Practice'/>
        <br/>
        <WelcomeButton handleClick = {this.screenStatusChange} color = 'orange' text = 'Compete' newLink = '/Compete'/>
        <br/>
      </div>
    );
  }
}
