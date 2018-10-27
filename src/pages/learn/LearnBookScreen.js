import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';
import * as api from '../../utils/vietAppApi';
import {Switch, Route} from 'react-router-dom';
import LearnLessonScreen from './LearnLessonScreen';

class BookDisplayer extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>{this.props.booksToDisplay}</div>
    )
  }
}
export default class LearnBookScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Choose your book',
      booksToDisplay: [],
    }
    
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  adjustLink(link) {
    return link.replace(/ /g, "_");
  }

  componentDidMount() {
    api.getBookData().then((books) => {
      console.log(books)
      return books
    }).then((books) => {
      let names = books.map((book) => {
        return (
          <div key = {book.id}>
            <LearnButton newLink = {"/Learn/" + this.adjustLink(book.name)} text = {book.name}/>
          </div>
        )
      })
      
      this.setState({booksToDisplay: names})
    })
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "purple" backbuttonPath = "/" appear = {false}/>
        <h2>Your Books</h2>
        <br/>
        <div>{this.state.booksToDisplay}</div>
        <Switch>
          {/* <Route exact path='/Learn' component={LearnBookScreen}/> */}
          <Route path='/Learn/:book' component={LearnLessonScreen}/>
        </Switch>
      </div>
    );
  }
}
