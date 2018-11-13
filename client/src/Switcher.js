// DO NOT NEED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import React, {Component} from 'react';
import WelcomeScreen from "./pages/welcome/WelcomeScreen"
import LearnBookScreen from "./pages/learn/LearnBookScreen"
import LearnLessonScreen from "./pages/learn/LearnLessonScreen"
import ExerciseScreen from "./pages/learn/ExerciseScreen"
import NotFound from "./pages/NotFound"
import { requireAuth } from './utils/AuthService';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import {Callback} from './Callback';

export default class Switcher extends Component {
    // componentWillMount () {
    //     document.location.href = 'https://localhost:3000/'
    // } 

    render() {
        return (
        <Router history = {BrowserRouter}>
          <Switch>
            {/* Note: All files here are currently static; all lessons and books, lead to the same screen.
            We do not have a database of any sort; we can't make fetches to get correct data. This is only
            the first phase. */}
            <Route exact path = "/" component = {WelcomeScreen}/>
            <Route path="/Learn" component={LearnBookScreen} onEnter={requireAuth} />
            <Route exact path = "/Learn/:Book" component = {LearnLessonScreen}/>
            <Route exact path = "/Learn/:Book/:Lesson/:Exercise" component = {ExerciseScreen}/>
            <Route path="/callback" component={Callback} />
            {/* <Route path = "/Learn/Book2" component = {LearnLessonScreen}/>
             Maybe change to /Learn/:book later or something to have placeholders */}
          </Switch>
        </Router>
        )
    }
}