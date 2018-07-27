import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';

export default class LearnLessonScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Chọn bài'
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple"/>
        <h2>Bài Của Bạn</h2>
        <br/>
        <LearnButton newLink = "/Learn/Book1/Lesson1/Video" text = "Bài 1"/>
        <br/>
        <LearnButton newLink = "/Learn/Book1/Lesson2/Video" text = "Bài 2"/>
        <br/>
        <LearnButton newLink = "/Learn/Book1/Lesson3/Video" text = "Bài 3"/>
        <br/>
        <LearnButton newLink = "/Learn/Book1/Lesson4/Video" text = "Bài 4"/>
        <br/>
      </div>
    );
  }
}
