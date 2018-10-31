import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import WelcomeButton from './WelcomeButton';
//import './App.css';
import {login, logout, isLoggedIn} from '../../utils/AuthService';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
// import renderHTML from 'react-render-html';
// import page from '../../Test.html';
// import HelloWorldText from '../../TestChild';
//import CustomEditor from '../../CustomEditor'

const TitleBarButton = styled.button`
    position: relative;
    float: right;
    bottom: 55px;
    background: white;
    border-radius: 30px;
    border: 3px green;
    color: green;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
        props.primary && css `
        background: green;
        color: white;
    `};
`

const SignInButton = styled.button`
    position: static;
    bottom: 5px;
    background: white;
    border-radius: 30px;
    border: 3px green;
    color: green;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
        props.primary && css `
        background: green;
        color: white;
    `};
`

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'THE VIET CLASS' // Can be login, welcome, learnBook, learngLesson, etc.
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
        <TitleBar title = {this.state.screenStatus} color = "green" backbuttonPath = "no"/>
        <div>
            {/* <Link to="/">Home</Link> */}
            { // replace "/special" with the path to whatever the secured path is
            ( isLoggedIn() ) ? <div><Link to="/Learn">Learn</Link><br/><Link to="/AdminEditor">Admin Editor</Link></div> :  ''
            }
            {
              (isLoggedIn()) ? 
                ( <TitleBarButton 
                  className="btn btn-danger log"
                  onClick={() => {
                    logout();
                    this.props.history.push('/');
                  }}>Log out </TitleBarButton> ) 
                  : ( <TitleBarButton className="btn btn-info log"
                  onClick={() => login()}>Log In</TitleBarButton> )
            }
            <TitleBarButton primary>Preview</TitleBarButton>
            <TitleBarButton primary>About</TitleBarButton>
            <TitleBarButton primary>Home</TitleBarButton>
            <div style={{"position:": "static", "top": "-900px", "display": "inline-block","width": "100%", "alignItems": "center", "textAlign": "center",}}><SignInButton primary >GET STARTED NOW</SignInButton></div>
        </div>
        <br/>
        {/* <Welcome0Button handleClick = {this.screenStatusChange} color = 'purple' text = 'Học' newLink = '/Learn'/>
        <br/>
        <WelcomeButton handleClick = {this.screenStatusChange} color = 'turquoise' text = 'Tập' newLink = '/Practice'/>
        <br/>
        <WelcomeButton handleClick = {this.screenStatusChange} color = 'orange' text = 'Thi' newLink = '/Compete'/> */}
        <br/>
        {/* <div>
          {renderHTML(page)}
        </div> */}
        {/* <div dangerouslySetInnerHTML={{__html: page}} /> */}
      </div>
    );
  }
}
