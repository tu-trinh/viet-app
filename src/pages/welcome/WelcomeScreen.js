import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import WelcomeButton from './WelcomeButton';
//import './App.css';
import { login, logout, isLoggedIn } from '../../utils/AuthService';
import {Link} from 'react-router-dom';
import Page from '../../Test.html';
var htmlDoc = {__html: Page};

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Xin chào!' // Can be login, welcome, learnBook, learngLesson, etc.
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
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              { // replace "/special" with the path to whatever the secured path is
              ( isLoggedIn() ) ? <Link to="/Learn">Learn</Link> :  ''
              }

            </li>
          </ul>
          <ul>
            <li>
            {
              (isLoggedIn()) ? 
                ( <button 
                  className="btn btn-danger log"
                  onClick={() => {
                    logout();
                    this.props.history.push('/');
                  }}>Log out </button> ) 
                  : ( <button className="btn btn-info log"
                  onClick={() => login()}>Log In</button> )
            }
            </li>
          </ul>
        </div>
        <br/>
        {/* <Welcome0Button handleClick = {this.screenStatusChange} color = 'purple' text = 'Học' newLink = '/Learn'/>
        <br/>
        <WelcomeButton handleClick = {this.screenStatusChange} color = 'turquoise' text = 'Tập' newLink = '/Practice'/>
        <br/>
        <WelcomeButton handleClick = {this.screenStatusChange} color = 'orange' text = 'Thi' newLink = '/Compete'/> */}
        <br/>
        <div dangerouslySetInnerHTML={htmlDoc} />
      </div>
    );
  }
}
