import React, {Component} from 'react';
import WelcomeButton from './pages/welcome/WelcomeButton';
import "./pages/TitleBar";
import styled, {css} from 'styled-components';

const Button = styled.button`
    background: white;
    border-radius: 30px;
    border: 0px;
    color: green;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
        props.primary && css `
        background: green;
        color: white;
    `};
`

export default class LandingPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {
        screenStatus: 'Welcome!!!' // Can be login, welcome, learnBook, learngLesson, etc.
        }
    }
    render() {
        return(
            <div>
                <Button />
            </div>
        )
    }
};