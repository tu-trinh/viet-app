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
            currentBookAndLesson: {book: "Book_1", lesson: this.props.match.params.lesson},
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
        var workspace = []
        console.log(currentBookAndLesson)
        api.getExerciseData(this.getNum(currentBookAndLesson.book),this.getNum(currentBookAndLesson.lesson)).then((exercises) => {
            console.log(exercises.exercises)
            return exercises.exercises
        }).then((exercises) => {
            workspace = exercises.map((exercise) => {
                var content = exercise.content
                rawExercises.push(exercise.name)
                return(
                    <Route key = {exercise.id} exact path = {`/Learn/${currentBookAndLesson.book}/${currentBookAndLesson.lesson}/${this.adjustLink(exercise.name)}`}
                    component = {(exercise) => <div><center>{ReactHtmlParser(content)}</center> </div>}/>
                    
                ) 
            })
        })
            
            
        var recycleExercises = []
        if (this.getNum(currentBookAndLesson.lesson)) { //RECYCLE5 Switch != 1 to > 5
            api.getExerciseData(1,1).then((exercises) => { // RECYCLE5 Switch second 1 to this.getNum(this.state.currentBookAndLesson.lesson)%5
                if (this.getNum(currentBookAndLesson.lesson) == 1) {
                    return exercises.exercises
                }
                else {
                    return exercises.exercises.slice(1)
                }
            }).then((exercises) => {
                
                let blah = exercises.map((exercise) => {
                    // console.log(exercise.content)
                    recycleExercises.push(
                        <Route key = {exercise.id} exact path = {`/Learn/${currentBookAndLesson.book}/${currentBookAndLesson.lesson}/${this.adjustLink(exercise.name)}`}
                        component = {(exercise) => <div>{ReactHtmlParser(exercise.content)} </div>}/>
                        // {(exercise) => ReactDeviceOrientationEventHtmlParser(exercise.content)}
                    ) 
                    
                })
                this.setState({currentBookAndLesson: currentBookAndLesson, exerciseToDisplay: workspace.concat(recycleExercises)})
                console.log(workspace.concat(recycleExercises))
                                    
            })
        }
        
        
    }   
    render() {
        return (
            <div>
                <TitleBar title = {this.adjustName(this.state.currentBookAndLesson.lesson)}
                color = "light" backbuttonPath = {"/Learn/" + (this.state.currentBookAndLesson.book)}/>
                <h2 style={{margin: '0px', paddingTop: '50px'}}>Exercises</h2>
                <Switch>{this.state.exerciseToDisplay}</Switch>
                <ExerciseSideNav params = {this.state.currentBookAndLesson} rawExercises = {this.state.rawExercises}/>
            </div>
        )
    } 
}