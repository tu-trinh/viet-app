import React, {Component} from 'react';
import {
  convertFromRaw,
  convertToRaw,
  convertFromHTML,
  EditorState,
} from 'draft-js';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';
import * as api from '../../utils/vietAppApi';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import VietKey from '../../keyboard/VietKey';
import ExerciseSideNav from './ExerciseSideNav';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

var Ree = (content) => {
    return (<div>{ReactHtmlParser(content)}HIYEET</div>)
}

export default class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenStatus: 'Probs still just the lesson name',
            exercisesToDisplay: [],
            content: '',
        }
    }
    
   componentDidMount() {
    api.getExerciseData().then((exercises) => {
     console.log(exercises)
     return exercises.exercises
   }).then((exercises) => {
     let exerciseList = [];
     let pages = exercises.map((exercise) => {
       // the exercise.content can maybe replaced with a function later on that will go through the content
       // and see what to replace as an input or submit, etc.
       // or maybe use the convertToRaw
       exerciseList = exercise.name;
       const display = exercise.content;
       return (
         <div key = {exercise.id}> 
           { ReactHtmlParser(display) }
         </div>
       )
     })
      
     this.setState({exercisesToDisplay: pages})
     this.setState({exercisesToDisplay: pages, exerciseList: exerciseList})
   })
 }
    render() {
        return (
            <div>
                {this.state.exercisesToDisplay}
            </div>
        )
    }
}