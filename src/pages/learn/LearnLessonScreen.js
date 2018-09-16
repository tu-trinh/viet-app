import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';
import * as api from '../../utils/vietAppApi';

export default class LearnLessonScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Choose your Lesson',
      lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4']
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  // fetchData () {
  //   api.getLessonData().then((lessons) => {
  //     this.setState({lessons})
  //   })
  // }
  
  // componentDidMount() {
  //   this.fetchData()
  // }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple" backbuttonPath = "/Learn"/>
        <h2>Your Lessons</h2>
        <br/>
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[0] + "/Video"} text = {this.state.lessons[0]}/>
        <br/>
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[1] + "/Video"} text = {this.state.lessons[1]}/>
        <br/>
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[2] + "/Video"} text = {this.state.lessons[2]}/>
        <br/>
        <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[3] + "/Video"} text = {this.state.lessons[3]}/>
        <br/>
      </div>
    );
  }
}
