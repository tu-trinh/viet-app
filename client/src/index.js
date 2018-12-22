import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React, {Component} from 'react';
import WelcomeScreen from "./pages/welcome/WelcomeScreen"
import LandingPage from "./LandingPage";
import LearnBookScreenHandler from "./pages/learn/pageHandlers/LearnBookSceenHandler"
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

// Test File Imports
import VietKeyForm from './keyboard/VietKey.js';
import ExerciseTest from './pages/learn/ExerciseTest'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
    <Router>
          <Switch>
            {/* Note: All files here are currently static; all lessons and books, lead to the same screen.
            We do not have a database of any sort; we can't make fetches to get correct data. This is only
            the first phase. */}
            <Route exact path = "/testing" component = {ExerciseTest}/>
            <Route exact path = "/" component = {WelcomeScreen}/>
            <Route exact path = "/AdminEditor" component = {AdminEditor}/>
            <Route path="/Learn" component={LearnBookScreenHandler} onEnter={requireAuth} />
            <Route path="/callback" component={Callback} />
          </Switch>
        </Router>
    , document.getElementById('root'));
registerServiceWorker();
