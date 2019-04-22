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
import {ListGroup, ListGroupItem} from 'reactstrap';

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

// class RandomComp extends Component {
//   render() {
//     return (
//       <p>no u</p>
//     )
//   }
// }

// class Switcher extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path = "/:hi" component = {RandomComp}/>
//           {/* {this.props.sideNavRoutes} */}
//         </Switch>
//       </Router>
//     )
//   }
// }

export default class ExerciseSideNav extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Lesson Num Here Somehow, maybe props',
      sideNavToDisplay: [],
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  adjustLink(link) {
    return link.replace(/ /g, "_");
  }

  getNum(text) {
    return (text.match('[0-9]{2}') ? text.match('[0-9]{2}')[0] : text.match('[0-9]{1}')[0])
  }

  componentWillMount() {
    var sideNav = []
    var recycleExercises = []
    api.getExerciseData(this.getNum(this.props.params.book),this.getNum(this.props.params.lesson)).then((exercises) => {
      return exercises.exercises
    }).then((exercises) => {
      sideNav = exercises.map((exercise) => {
        return(

          <LearnButton key = {exercise.id} style = {{alignItems:'center', zIndex:5000}}newLink = {`/Learn/${this.props.params.book}/${this.props.params.lesson}/${this.adjustLink(exercise.name)}`} text = {

            
            <ListGroupItem style ={{width: '100%'}} key = {exercise.id}>
            <center>{exercise.name}</center>
            </ListGroupItem>

          }> 
          </LearnButton>
        )
      })
      
    
    })
    if (this.getNum(this.props.params.lesson) != 1) {
      console.log('HEREHERE Side Nav')
      api.getExerciseData(1,1).then((exercises) => {
          return exercises.exercises.slice(1)
      }).then((exercises) => {
          recycleExercises = exercises.map((exercise) => {
              // console.log(exercise.content)
              var content = exercise.content
              return(
                <LearnButton key = {exercise.id} style = {{alignItems:'center', zIndex:5000}}newLink = {`/Learn/${this.props.params.book}/${this.props.params.lesson}/${this.adjustLink(exercise.name)}`} text = {

            
                  <ListGroupItem style ={{width: '100%'}} key = {exercise.id}>
                  <center>{exercise.name}</center>
                  </ListGroupItem>
      
                }> 
                </LearnButton>
              ) 
          })
          console.log(sideNav.concat(recycleExercises))
          this.setState({sideNavToDisplay: sideNav.concat(recycleExercises)})
      })
  }
  }

  render() {
    return (
      <div className="App">
        <ListGroup style = {{zIndex: 8000, width: '18%'}}>{this.state.sideNavToDisplay}</ListGroup> 
        {/* <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[0] + "/Video"} text = {this.state.lessons[0]}/>
        />
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[1] + "/Video"} text = {this.state.lessons[1]}/>
        />
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[2] + "/Video"} text = {this.state.lessons[2]}/>
        />
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[3] + "/Video"} text = {this.state.lessons[3]}/> */}
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
//       <SideLink newLink = {`/${exercise.name}`} text = {`${exercise.name}`}/>/>
//     </div>
//   )
// })

