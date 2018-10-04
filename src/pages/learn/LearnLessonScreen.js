import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';
import * as api from '../../utils/vietAppApi';

export default class LearnLessonScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Choose your Lesson',
      lessonsToDisplay:[]
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  componentDidMount() {
    api.getLessonData(1).then((lessons) => {
      console.log(lessons)
      return lessons
    }).then((lessons) => {
      let names = lessons.map((lessons) => {
        return (
          <div>
            <LearnButton newLink = {"/Learn/" + lessons.name} text = {lessons.name}/>
          </div>
        )
      })
      
      this.setState({lessonsToDisplay: names})
    })
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple" backbuttonPath = "/Learn"/>
        <h2>Your Lessons</h2>
        <br/>
        <div>{this.state.lessonsToDisplay}</div>
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
