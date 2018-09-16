import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';
import * as api from '../../utils/vietAppApi';

export default class LearnBookScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Choose your book',
      books: ['Book 1', 'Book 2']
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  // fetchData () {
  //   api.getBookData().then((books) => {
  //     this.setState({books})
  //   })
  // }
  
  // componentDidMount() {
  //   this.fetchData();
  // }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple" backbuttonPath = "/" appear = {false}/>
        <h2>Your Books</h2>
        <br/>
        <LearnButton newLink = {"/Learn/" + this.state.books[0]} text = {this.state.books[0]}/>
        <br/>
        <LearnButton newLink = {"/Learn/" + this.state.books[1]} text = {this.state.books[1]}/>
        <br/>
      </div>
    );
  }
}
