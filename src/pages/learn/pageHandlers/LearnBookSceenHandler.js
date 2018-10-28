import React, {Component} from 'react';
import TitleBar from '../../TitleBar';
import LearnButton from '../LearnButton';
import {Switch, Route} from 'react-router-dom';
import LearnLessonScreenHandler from './LearnLessonScreenHandler';
import LearnBookScreen from '../LearnBookScreen'

export default class LearnBookScreenHandler extends Component {
    constructor(props) {
      super(props); 
    }

    getBookName = () => {
        return this.props.match.params.book
    }
  
    adjustLink(link) {
      return link.replace(/ /g, "_");
    }
  
    render() {
      return (
        <div>
        <Switch>
          <Route path='/Learn/:book' component={LearnLessonScreenHandler}/>
          <Route path='/Learn/' component={LearnBookScreen}/>
        </Switch>
        </div>
      );
    }
  }
  