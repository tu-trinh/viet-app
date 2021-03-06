import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';
import * as api from '../../utils/vietAppApi';
import { browserHistory } from 'react-router'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class LearnLessonScreen extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      screenStatus: 'Choose your Lesson',
      lessonsToDisplay:[]
    }
    // Later, we can change and store recent data so user doesnt have to go thru signin, book, lesson
  }

  // changeLink = () => {
  //   browserHistory.push('lol');
  // }

  adjustLink(link) {
    return link.replace(/ /g, "_");
  }

  getBook(book) {
    return book[book.length-1]
  }

  componentWillMount() {
    var bookToSearch = 'Book_1'//this.props.match.params.book
    console.log(bookToSearch) // Capturing the :book parameter value
    // when you get all the params it will return an object with the key as the param and the value as value.
    // when you name a specific param it will just return the value, maybe as a string I think
    var book_num = this.getBook(bookToSearch)
    api.getLessonData(book_num).then((lessons) => {
      console.log(lessons)
      return lessons
    }).then((lessons) => {
      let names = lessons.map((lessons) => {
        return (
          <LearnButton key = {lessons.id} style = {{alignItems:'center'}}newLink = {"/Learn/"+ bookToSearch + "/" + this.adjustLink(lessons.name) + "/" + lessons.exercises[0].name} text = {

            // this.adjustLink(lessons.name)
            <ListGroupItem style ={{width: '500px'}} key = {lessons.id}>
            <center>{lessons.name}</center>
            </ListGroupItem>

          }> 
          </LearnButton>
        )
      })
      
      this.setState({lessonsToDisplay: names})
    })
  }

  render() {
    return (
      <div className="App">
        <TitleBar title = {this.state.screenStatus} color = "light" backbuttonPath = "/Learn"/>
        <center><h2 style={{margin: '0px'}}>Your Lessons</h2></center>
        <ListGroup style={{paddingTop: '50px', alignItems: 'center'}}>
        {this.state.lessonsToDisplay}
        </ListGroup>
        {/* <LearnButton newLink = {"/Learn/:book/" + this.state.lessons[0] + "/Video"} text = {t  his.state.lessons[0]}/>
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
