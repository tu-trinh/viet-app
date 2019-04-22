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
            exerciseToDisplay: [],
            currentBookAndLesson: {},
            rawExercises: []
        }
    }

    adjustLink(link) {
        return link.replace(/ /g, "_");
    }

    adjustName(name) {
        return name.replace(/_/g, " ");
    }

    getNum(text) {
        return (text.match('[0-9]{2}') ? text.match('[0-9]{2}')[0] : text.match('[0-9]{1}')[0])
    }
    
    componentWillMount() {
        var rawExercises = []
        var currentBookAndLesson = {book: "Book_1", lesson: this.props.match.params.lesson}//this.props.match.params
        console.log(currentBookAndLesson)
        this.setState({ currentBookAndLesson: currentBookAndLesson})
        api.getExerciseData(this.getNum(currentBookAndLesson.book),this.getNum(currentBookAndLesson.lesson)).then((exercises) => {
          console.log(exercises)
          return exercises.exercises
        }).then((exercises) => {
            let workspace = exercises.map((exercise) => {
                // console.log(exercise.content)
                var content = exercise.content
                rawExercises.push(exercise.name)
                return(
                    <Route key = {exercise.id} exact path = {`/Learn/${currentBookAndLesson.book}/${currentBookAndLesson.lesson}/${this.adjustLink(exercise.name)}`}
                    component = {(exercise) => <div style = {{}}><center>{ReactHtmlParser(content)}</center> </div>}/>
                    // {(exercise) => ReactHtmlParser(exercise.content)}
                    
                ) 
            })
            
            var recycleExercises = []
            if (this.getNum(this.state.currentBookAndLesson.lesson) != 1) {
                console.log('Exercise.js Other than 1')
                api.getExerciseData(1,1).then((exercises) => {
                    return exercises.exercises.slice(1)
                }).then((exercises) => {
                    recycleExercises = exercises.map((exercise) => {
                        // console.log(exercise.content)
                        rawExercises.push(exercise.name)
                        var content = exercise.content
                        return(
                            <Route key = {exercise.id} exact path = {`/Learn/${currentBookAndLesson.book}/${currentBookAndLesson.lesson}/${this.adjustLink(exercise.name)}`}
                            component = {(exercise) => <div style = {{}}><center>{ReactHtmlParser(content)}</center> </div>}/>
                            // {(exercise) => ReactHtmlParser(exercise.content)}
                        ) 
                    })
                    console.log('Exercise.js duplicateRest - ')
                    console.log(recycleExercises)
                    
                })
            }
            this.setState({exerciseToDisplay: workspace.concat(recycleExercises), rawExercises: rawExercises})
            
        })
    }   
    render() {
        return (
            <div>
                <TitleBar title = {this.adjustName(this.state.currentBookAndLesson.lesson)}
                color = "light" backbuttonPath = {"/Learn/" + (this.state.currentBookAndLesson.book)}/>
                <h2 style={{margin: '0px', paddingTop: '50px'}}>Exercises</h2>
                <Switch style = {{zIndex: 1000}}>{this.state.exerciseToDisplay}</Switch>
                <ExerciseSideNav params = {this.state.currentBookAndLesson} rawExercises = {this.state.rawExercises}/>
            </div>
        )
    }
}