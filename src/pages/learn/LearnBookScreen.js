import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';

export default class LearnBookScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Choose your book'
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple"/>
        <LearnButton newLink = "Learn/Book1" text = "Book 1"/>
        <LearnButton newLink = "Learn/Book2" text = "Book 2"/>
      </div>
    );
  }
}
