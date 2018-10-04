import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';
import * as api from '../../utils/vietAppApi';

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

  componentDidMount() {
    api.getBookData().then((books) => {
      console.log(books)
      return books
    }).then((books) => {
      let names = books.map((book) => {
        return (
          <div>
            <LearnButton newLink = {"/Learn/" + book.name} text = {book.name}/>
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
      </div>
    );
  }
}
