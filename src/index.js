import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React, {Component} from 'react';
import WelcomeScreen from "./pages/welcome/WelcomeScreen"
import LearnBookScreen from "./pages/learn/LearnBookScreen"
import LearnLessonScreen from "./pages/learn/LearnLessonScreen"
import ExerciseScreen from "./pages/learn/ExerciseScreen"
import NotFound from "./pages/NotFound"
import AdminEditor from "./pages/admin/AdminEditor";
import {requireAuth} from './utils/AuthService';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';
import {Callback} from './Callback';

ReactDOM.render(
    <Router>
          <Switch>
            {/* Note: All files here are currently static; all lessons and books, lead to the same screen.
            We do not have a database of any sort; we can't make fetches to get correct data. This is only
            the first phase. */}
            <Route exact path = "/testing" component = {WelcomeScreen}/>
            <Route exact path = "/" component = {WelcomeScreen}/>
            <Route exact path = "/AdminEditor" component = {AdminEditor}/>
            <Route exact path = "/Learn/:Book" component = {LearnLessonScreen}/>
            <Route exact path = "/Learn/:Book/:Lesson/:Exercise" component = {ExerciseScreen}/>
            <Route path="/Learn" component={LearnBookScreen} onEnter={requireAuth} />
            <Route path="/callback" component={Callback} />
            {/* <Route path = "/Learn/Book2" component = {LearnLessonScreen}/>
             Maybe change to /Learn/:book later or something to have placeholders */}
          </Switch>
        </Router>
    , document.getElementById('root'));
registerServiceWorker();
