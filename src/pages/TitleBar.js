import React, {Component} from 'react';
import BackButton from './BackButton'
import HomeButton from './HomeButton'
import {login, logout, isLoggedIn} from '../utils/AuthService';
import styled, {css} from 'styled-components';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

const TitleBarButton = styled.button`
    float: right;
    position: sticky;
    top: 30px;    
    background: white;
    border-radius: 30px;
    border: 3px green;
    color: purple;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
        props.primary && css `
        background: purple;
        color: white;
    `};
`

export default class TitleBar extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      // Style will be changed later to be dynamic
        <div className="TitleBar" style = {{height: '12.5%', width:'100%', position: 'fixed', backgroundColor: this.props.color, textAlign: 'center', color: 'white', alignItems: 'center'}}>
          {
          (isLoggedIn()) ? 
            ( <TitleBarButton
              onClick={() => {
                
                // <NavLink to={'/'} />
                logout();
                window.location = '/';
                // this.props.history.push('/');
              }}>Log Out</TitleBarButton>
              ) 
              : ( <div style = {{position: 'sticky', top: '30px'}}><TitleBarButton
              onClick={() => login()}>Log In</TitleBarButton>
              <a href = "#Preview"><TitleBarButton primary>Preview</TitleBarButton></a>
              <a href = "#About"><TitleBarButton primary>About</TitleBarButton></a>
              <a href = "#Video"><TitleBarButton primary>Home</TitleBarButton></a></div> )
          }
          {/* <HomeButton/> */}
          <BackButton backbuttonLink = {this.props.backbuttonPath}/>
          <div><h1 style = {{fontWeight: 'bold', fontSize: '40px'}}>{this.props.title}</h1></div>
        </div>
    );
  }
}
