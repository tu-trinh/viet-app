//GO THRU ALL OF THE EXERCISE LIST ARRAY AND CREATE ROUTE NAVLINKS
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
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

// var styles = {
// }

class SideLink extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <NavLink to = {this.props.newLink}> {this.props.text} </NavLink>
    );
  }
}

class RandomComp extends Component {
  render() {
    return (
      <p>no u</p>
    )
  }
}

class Switcher extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/:hi" component = {RandomComp}/>
          {/* {this.props.sideNavRoutes} */}
        </Switch>
      </Router>
    )
  }
}

export default class ExerciseScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Lesson Num Here Somehow, maybe props',
      sideNavToDisplay: [],
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  componentDidMount() {
    api.getExerciseData().then((exercises) => {
      console.log(exercises)
      return exercises.exercises
    }).then((exercises) => {
      let sideNav = exercises.map((exercise) => {
        return(
          <div>
            <SideLink newLink = {`/${exercise.name}`} text = {`${exercise.name}`}/><br/>
          </div>
        )
      })
      
      
      this.setState({sideNavToDisplay: sideNav})
    })
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple" backbuttonPath = "/Learn/:Book"/>
        <h2>Exercises</h2>
        <br/>
        <div>{this.state.sideNavToDisplay}</div>        
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


// 
// the exercise.content can maybe replaced with a function later on that will go through the content
        // // and see what to replace as an input or submit, etc.
        // // or maybe use the convertToRaw
        // const display = exercise.content;
        // return (
        //   <div key = {exercise.id}> 
        //     { ReactHtmlParser(display) }
        //   </div>)



// let sideNavIndividualRoutes = exercises.map((exercise) => {
//   return(
//       <Route exact path = {`/${exercise.name}`} component = 
//         {RandomComp}
//         // (content = exercise.content, id = exercise.id) => {
//         //   return (<div key = {id}>{ReactHtmlParser(content)}</div>)
//         // }
//         //}
//         />
//   ) 
// })
// let sideNav = exercises.map((exercise) => {
//   return(
//     <div>
//       <SideLink newLink = {`/${exercise.name}`} text = {`${exercise.name}`}/><br/>
//     </div>
//   )
// })

