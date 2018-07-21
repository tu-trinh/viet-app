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
        <LearnButton newLink = "/Learn/Book/Lesson1" text = "Lesson 1"/>
        <br/>
        <LearnButton newLink = "/Learn/Book/Lesson2" text = "Lesson 2"/>
        <br/>
        <LearnButton newLink = "/Learn/Book/Lesson3" text = "Lesson 3"/>
        <br/>
        <LearnButton newLink = "/Learn/Book/Lesson4" text = "Lesson 4"/>
        <br/>
      </div>
    );
  }
}
