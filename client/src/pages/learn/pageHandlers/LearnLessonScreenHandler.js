import React, {Component} from 'react';
import TitleBar from '../../TitleBar';
import LearnButton from '../LearnButton';
import {Switch, Route} from 'react-router-dom';
import LearnLessonScreen from '../LearnLessonScreen';
import LearnExerciseScreenHandler from './LearnExerciseScreenHandler'

export default class LearnLessonScreenHandler extends Component {
    constructor(props) {
      super(props); 
    }
  
    adjustLink(link) {
      return link.replace(/ /g, "_");
    }
  
    render() {
      return (
        <div>
        <Switch>
          <Route path='/Learn/:book/:lesson' component={LearnExerciseScreenHandler}/>
          <Route path='/Learn/:book' component={LearnLessonScreen}/>
        </Switch>
        </div>
      );
    }
  }
  