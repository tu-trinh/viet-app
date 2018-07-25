import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

const Video = () => {
    return (<iframe width="560" height="315" src="https://www.youtube.com/embed/XwdqfH-wRkY" ></iframe>)

}

const Vocab = () => {
    return(<ol>
      <li> Vocab word 1 </li>
      <li> Vocab word 2 </li>
      <li> Vocab word 3 </li>
    </ol>);
}

const Blanks = () => {

}

const SentenceCreation = () => {

}

const EssayWriting = () => {

}


class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // backColors: {
      //   video: 'grey',
      //   vocab: 'grey',
      //   blanks: 'grey',
      //   sentence: 'grey',
      //   essay: 'grey'
      // }
      video: 'grey',
      vocab: 'grey',
      blanks: 'grey',
      sentence: 'grey',
      essay: 'grey'
    }
    this.illuminate = this.illuminate.bind(this);
  }T
  illuminate() {
    const currentTab = this.props.currentTab;
    this.setState (
      {[currentTab]: 'white'}
    );
  }
  componentWillMount() {
    this.illuminate();
  }
  render () {
    return (
      <div>
        <NavLink to = "/Learn/Book/Lesson/" style = {{backgroundColor:this.state.video}}> Video </NavLink><br/>
        <NavLink to = "/Learn/Book/Lesson/Vocabulary" style = {{backgroundColor:this.state.vocab}}>Vocabulary</NavLink><br/>
        <NavLink to = "/Learn/Book/Lesson/Blanks" style = {{backgroundColor:this.state.blanks}}>Fill in the Blanks</NavLink><br/>
        <NavLink to = "/Learn/Book/Lesson/SentenceCreation" style = {{backgroundColor:this.state.sentence}}>Sentence Creation</NavLink><br/>
        <NavLink to = "/Learn/Book/Lesson/EssayWriting" style = {{backgroundColor:this.state.essay}}>Essay Writing</NavLink><br/>
      </div>
  )
}
}

export default class LearningScreen extends Component {
  render() {
    return (    
       <div>
         <SideNav currentTab = 'video'/>
         <Router>
           <Switch>
             <Route path = "/:learn/:book/:lesson/" component={Video}/>
             <Route path = "/:learn/:book/:lesson/Vocabulary" component={Vocab}/>
             <Route path = "/:learn/:book/:lesson/Blanks" component = {Blanks}/>
             <Route path = "/:learn/:book/:lesson/SentenceCreation" component = {SentenceCreation}/>
             <Route path = "/:learn/:book/:lesson/EssayWriting" component = {EssayWriting}/>
           </Switch>
         </Router>
       </div>
    );
  }
}