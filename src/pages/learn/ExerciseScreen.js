import React, {Component} from 'react';
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

export default class ExerciseScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Lesson Num Here Somehow, maybe props',
      exercisesToDisplay: []
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  componentDidMount() {
    api.getExerciseData().then((exercises) => {
      console.log(exercises)
      return exercises
    }).then((exercises) => {
      let pages = exercises.map((exercise) => {
        // the exercise.content can maybe replaced with a function later on that will go through the content
        // and see what to replace as an input or submit, etc.
        return (
          <div key = {exercise.id}>
            {exercise.content} 
          </div>
        )
      })
      
      this.setState({exercisesToDisplay: pages})
    })
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple" backbuttonPath = "/Learn/:Book"/>
        <h2>Your Lessons</h2>
        <br/>
        <div>{this.state.exercisesToDisplay}</div>
        {/* <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[0] + "/Video"} text = {this.state.lessons[0]}/>
        <br/>
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[1] + "/Video"} text = {this.state.lessons[1]}/>
        <br/>
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[2] + "/Video"} text = {this.state.lessons[2]}/>
        <br/>
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[3] + "/Video"} text = {this.state.lessons[3]}/> */}
        <br/>
      </div>
    );
  }
}
