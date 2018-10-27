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

export default class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenStatus: 'Probs still just the lesson name',
            exerciseToDisplay: []
        }
    }
    componentDidMount() {
        api.getExerciseData().then((exercises) => {
          console.log(exercises)
          return exercises.exercises
        }).then((exercises) => {
            let workspace = exercises.map((exercise) => {
                return(
                    <Route exact path = {`/Learn/:Book/:Lesson/${exercise.name}`}
                    component = {() => {
                            <div key = {exercise.id}> 
                            { ReactHtmlParser(exercise.content) }
                            </div>
                        }
                    }/>
                ) 
            })
            this.setState({exerciseToDisplay: workspace})
        })
    }
    render() {
        return (
            <div>
                <Router><Switch>{this.state.exerciseToDisplay}</Switch></Router>
                <ExerciseSideNav />
            </div>
        )
    }
}