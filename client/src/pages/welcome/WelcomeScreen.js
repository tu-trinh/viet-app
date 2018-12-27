import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import WelcomeButton from './WelcomeButton';
//import './App.css';
import {login, logout, isLoggedIn} from '../../utils/AuthService';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Slideshow from './Slideshow';
// import renderHTML from 'react-render-html';
// import page from '../../Test.html';
// import HelloWorldText from '../../TestChild';
//import CustomEditor from '../../CustomEditor'
import backArrow from '../../media/backArrow.png'
import HomeButton from '../../media/HomeButton.png'

const TitleBarButton = styled.button`
    float: right;
    position: sticky;
    top: 30px;    
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

const LearnScreenButton = styled.button`
    font-size: 18;
    position: relative;
    top: 50px;
    background: green;
    border-radius: 30px;
    border: 3px green;
    color: white;
    margin: 0 1em;
    padding: 1em 2em;

    ${props =>
        props.primary && css `
        background: purple;
        color: white;
    `};
`

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'THE VIET CLASS' // Can be login, welcome, learnBook, learnLesson, etc.
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
        <TitleBar title = {this.state.screenStatus} color = "light" backbuttonPath = "no" />
        {/* {
          (isLoggedIn()) ? 
            ( <TitleBarButton
              onClick={() => {
                logout();
                this.props.history.push('/');
              }}>Log Out</TitleBarButton>
              ) 
              : ( <TitleBarButton
              onClick={() => login()}>Log In</TitleBarButton> )
        } */}

        {/* <a href = "#Preview"><TitleBarButton primary>Preview</TitleBarButton></a>
        <a href = "#About"><TitleBarButton primary>About</TitleBarButton></a>
        <a href = "#Video"><TitleBarButton primary>Home</TitleBarButton></a>  */}
        
        {/* Figure out where to put this */}
        {/* <div style={{"position:": "float", "display": "inline-block","width": "100%", "alignItems": "center", "textAlign": "center"}}><a href ='/Learn'><LearnScreenButton>LET'S LEARN</LearnScreenButton></a></div> */}
        
        <div>
            {/* <Link to="/">Home</Link> */}
            {/* replace "/special" with the path to whatever the secured path is */}
            {/* { 
            ( isLoggedIn() ) ? <div><Link to="/Learn">Learn</Link><br/><Link to="/AdminEditor">Admin Editor</Link></div> :  ''
            } */}  
            <div style={{'top': '0px', 'position': 'relative'}}>
              <video id = "Video" style = {{"width":"100%", '-webkit-filter': 'brightness(.5)', 'filter': 'brightness(.5)'}} loop="true" autoplay="" muted="true" playsinline="">
                <source src = "https://s3-us-west-1.amazonaws.com/viet-app/Intro+Video+Export.mp4" type = "video/mp4"/>          
              </video>
            </div>

            <div id = "Welcome-Text" style={{'position': 'absolute', 'top': '300px', 'zIndex': '10000', 'marginLeft': '310px', 'width': '40%', 'color': 'white', 'font-size': '40px'}}>{ReactHtmlParser("<br><p>Xin chào các bạn!<br>Welcome to the Viet Class!</p>")}</div>

            <div id = "About" style={{'marginLeft': '150px', 'marginRight': '150px'}}>{ReactHtmlParser("<br><br><br><br><h2 style='color:purple'>ABOUT</h2><p>Xin chào các bạn!</p><p>Welcome to the Viet Class! Here you will find a fun way to learn Vietnamese. Viet Class offers complete lessons from all eight Vietnamese textbooks published by the Association of the Vietnamese Language and Culture Schools. Each lesson is complete with interactive exercises, audio examples, and a helpful video to best support you in your endeavors to learn Vietnamese. At Viet Class, no longer will you pore over your textbook for hours on end. Instead, enjoy the dynamic and fun-filled lessons online and learn Vietnamese like never before!</p><p>Chào mừng các bạn đến với Việt Class! Ở đây các bạn sẽ thấy một cách học tiếng Việt rất thú vị. Việt Class có tất cả các bài học từ tám quyển sách giáo khoa Việt Ngữ của Ban Đại Diện Các Trung Tâm Việt Ngữ Nam California. Mỗi bài có đầy đủ các bài tập tương tác, các ví dụ bằng âm thanh, và một video hữu ích để giúp các bạn học tiếng Việt. Nếu dùng Việt Class, các bạn sẽ không còn phải dành hàng tiếng đồng hồ lật từng trang sách. Thay vì thế, hãy thưởng thức những bài học điện tử sinh động, và học tiếng Việt theo một cách chưa từng có bao giờ!</p>")}
            </div>
            <div id = "Preview" style={{'marginLeft': '150px', 'marginRight': '150px'}}>{ReactHtmlParser("<h2 style='color:purple'>PREVIEW</h2>")}</div>
            <div style={{'marginLeft': '300px'}}><Slideshow /></div>
            
          </div>
          {/* style = {{'fontSize': '18',
    'position': 'static',
    'bottom': '5px',
    'background': 'white',
    'borderRadius': '30px',
    'border': '3px green',
    'color': 'green',
    'margin': '0 1em',
    'padding': '1em 2em',}} */}
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