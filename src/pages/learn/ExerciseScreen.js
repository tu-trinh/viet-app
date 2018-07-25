import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import TitleBar from '../TitleBar'

const Video = () => {
  return(
    <div>
      <TitleBar title='Lesson 1' color='purple'/>
      <SideNav currentTab = 'video'/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XwdqfH-wRkY" ></iframe>
    </div>
  )
}

const Vocab = () => {
    return (
    <div>
      <TitleBar title='Lesson 1' color='purple'/>
      <SideNav currentTab = 'vocab'/>
      <ol>
        <li> Vocab word 1 </li>
        <li> Vocab word 2 </li>
        <li> Vocab word 3 </li>
      </ol>
    </div>
    )
}

const Blanks = () => {
  return (
    <div>
      <TitleBar title='Lesson 1' color='purple'/>
      <SideNav currentTab = 'blanks'/>
      <h2>Word Bank</h2>
      <p><strong>Word1     Word2     Word3</strong></p>
      <ol>
        <li> Blank 1 <input/>.</li>
        <li> Blank 2 <input/>.</li>
        <li> Blank 3 <input/>.</li>
      </ol>
    </div>
    )
}

const SentenceCreation = () => {

}

const EssayWriting = () => {

}


class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: '#c1c1c1',
      vocab: '#c1c1c1',
      blanks: '#c1c1c1',
      sentence: '#c1c1c1',
      essay: '#c1c1c1'
    }
    this.illuminate = this.illuminate.bind(this);
  }
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
        <NavLink to = "/Learn/Book/Lesson/Video" style = {{backgroundColor: this.state.video}}> Video </NavLink><br/>
        <NavLink to = "/Learn/Book/Lesson/Vocabulary" style = {{backgroundColor: this.state.vocab}}>Vocabulary</NavLink><br/>
        <NavLink to = "/Learn/Book/Lesson/Blanks" style = {{backgroundColor: this.state.blanks}}>Fill in the Blanks</NavLink><br/>
        <NavLink to = "/Learn/Book/Lesson/SentenceCreation" style = {{backgroundColor: this.state.sentence}}>Sentence Creation</NavLink><br/>
        <NavLink to = "/Learn/Book/Lesson/EssayWriting" style = {{backgroundColor: this.state.essay}}>Essay Writing</NavLink><br/>
      </div>
  )
}
}

export default class ExerciseScreen extends Component {
  render() {
    return (    
       <div>
         
         <Router>
           <Switch>
             <Route path = "/:learn/:book/:lesson/Video" component={Video}/>
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