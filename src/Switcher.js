import React, { Component } from 'react';
import WelcomeScreen from "./pages/welcome-screen/WelcomeScreen"
import LearnBookScreen from "./pages/learn/LearnBookScreen"
import LearnLessonScreen from "./pages/learn/LearnLessonScreen"
import LearningScreen from "./pages/learn/LearningScreens/LearningScreen"
import NotFound from "./pages/NotFound"

import {
    BrowserRouter as Router,
    Route,
    Switch

} from 'react-router-dom'

export default class Switcher extends Component {

    // componentWillMount () {
    //     document.location.href = 'https://localhost:3000/'
    // } 

    render() {
        return (
        <Router>
          <Switch>
            {/* Note: All files here are currently static; all lessons and books, lead to the same screen.
            We do not have a database of any sort; we can't make fetches to get correct data. This is only
            the first phase. */}
            <Route exact path = "/" component = {WelcomeScreen}/>
            <Route exact path = "/Learn" component = {LearnBookScreen}/>
            <Route path = "/Learn/:Book" component = {LearnLessonScreen}/>
            <Route path = "/Learn/:book/:lesson>" component = {LearningScreen}/>
            {/* <Route path = "/Learn/Book2" component = {LearnLessonScreen}/>
             Maybe change to /Learn/:book later or something to have placeholders */}
            

          </Switch>
        </Router>
        )
    }
}