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

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// WAS IN THE CSS FOR TITLE BAR BUTTON
// color: purple;
// background: white;
const TitleBarButton = styled.button`
    float: right;
    position: sticky;
    top: 30px;    
    
    border-radius: 30px;
    border: 3px green;

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
      this.toggle = this.toggle.bind(this);
      this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div style = {{borderBottom:'1px solid black'}}>
        <Navbar color={this.props.color} light expand="md">
          <NavbarBrand href="/">VietClass</NavbarBrand>
          <BackButton backbuttonLink = {this.props.backbuttonPath}/>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            {(isLoggedIn()) ? 
            (<Nav className="ml-auto" navbar><NavItem><TitleBarButton zIndex = '15000'
                onClick={() => {
                  logout();
                  window.location = '/';
                }}>Log Out</TitleBarButton></NavItem></Nav>):
            (<Nav className="ml-auto" navbar>
                <NavItem>
                  <a href = "#Preview" ><TitleBarButton>Preview</TitleBarButton></a>
                </NavItem>
                <NavItem>
                  <a href = "#About"  ><TitleBarButton>About</TitleBarButton></a>
                </NavItem>
                <NavItem>
                  <a href = "#Video"  ><TitleBarButton>Home</TitleBarButton></a>
                </NavItem>
                <NavItem>
                  <TitleBarButton primary
                    onClick={() => login()}>Log In
                  </TitleBarButton>
                </NavItem>
            </Nav>)}
              {/* {(isLoggedIn()) ? 
              ( <NavItem><TitleBarButton zIndex = '15000'
                onClick={() => {
                  logout();
                  window.location = '/';
                }}>Log Out</TitleBarButton></NavItem>) : ( <div style = {{zIndex : '15000', float:'right', top:900}}>
                <NavItem>
                  <TitleBarButton
                    onClick={() => login()}>Log In
                  </TitleBarButton>
                </NavItem>
                <NavItem>
                <a href = "#Preview" >eek</a>
                  <a href = "#Preview" ><TitleBarButton primary>Preview</TitleBarButton></a>
                </NavItem>
                <NavItem>
                <a href = "#Preview" >eek</a>
                  <a href = "#About"  ><TitleBarButton primary>About</TitleBarButton></a>
                </NavItem>
                <NavItem>
                <a href = "#Preview" >eek</a>
                  <a href = "#Video"  ><TitleBarButton primary>Home</TitleBarButton></a>
                </NavItem>
                </div> )} */}
                
            
          </Collapse>
        </Navbar>
      </div>
      // Style will be changed later to be dynamic
        
        // <nav style = {{zIndex: '10000', height: '100', width:'100%', position: 'fixed', backgroundColor: this.props.color, color: 'white'}}>
          
        //   {(isLoggedIn()) ? 
        //     ( <TitleBarButton zIndex = '15000'
        //       onClick={() => {
        //         logout();
        //         window.location = '/';
        //       }}>Log Out</TitleBarButton>) : ( <div style = {{zIndex : '15000', float:'right', top:900}}><TitleBarButton
        //       onClick={() => login()}>Log In</TitleBarButton>
        //       <a href = "#Preview" ><TitleBarButton primary>Preview</TitleBarButton></a>
        //       <a href = "#About"  ><TitleBarButton primary>About</TitleBarButton></a>
        //       <a href = "#Video"  ><TitleBarButton primary>Home</TitleBarButton></a></div> )}
        //   <center zIndex= '20000'><h1 style = {{fontWeight: 'bold', fontSize: '40px'}}>{this.props.title}</h1></center>
        //   <BackButton backbuttonLink = {this.props.backbuttonPath}/>
          
          
        // </nav>
    );
  }
}
