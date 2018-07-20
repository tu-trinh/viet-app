import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';

export default class LearnLessonScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Choose your lesson'
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple"/>
        <LearnButton newLink = "/Lesson1" text = "Lesson 1"/>
        <LearnButton newLink = "/Lesson2" text = "Lesson 2"/>
        <LearnButton newLink = "/Lesson3" text = "Lesson 3"/>
        <LearnButton newLink = "/Lesson4" text = "Lesson 4"/>
      </div>
    );
  }
}
