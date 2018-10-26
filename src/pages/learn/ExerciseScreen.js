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
      return exercises.exercises
    }).then((exercises) => {
      let pages = exercises.map((exercise) => {
        // the exercise.content can maybe replaced with a function later on that will go through the content
        // and see what to replace as an input or submit, etc.
        // or maybe use the convertToRaw
        const display = convertFromHTML(exercise.content);
        return (
          <div key = {exercise.id}> 
            {exercise.content}
          </div>
        )
      })
      
      let sideNavIndividualRoutes = exercises.map((exercise) => {
        return(
          <div>
            <Route exact path = {`/${exercise.name}`} component = {
              (content = exercise.content, id = exercise.id) => {
                return (<div key = {id}>ReactHtmlParser(contents)</div>)
              }}/>
          </div>
        ) 
      })
      let sideNavRoutes = <Router><Switch>{...sideNavIndividualRoutes}</Switch></Router>
      let sideNav = exercises.map((exercise) => {
        return(
          <div>
            <SideLink newLink = {`/${exercise.name}`} text = {`${exercise.name}`}/><br/>
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
        <h2>Exercises</h2>
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
