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
      <h2>Vocabulary for This Lesson</h2>
      <h3>Reading Vocab</h3>
      <ul>
        <li> Vocab word 1 </li>
        <li> Vocab word 2 </li>
        <li> Vocab word 3 </li>
      </ul>
      <h3>Practice Pronunciation</h3>
      <ul>
        <li> Vocab word 1 </li>
        <li> Vocab word 2 </li>
        <li> Vocab word 3 </li>
      </ul>
      <h3>Phonetics</h3>
      <ul>
        <li> Sound 1
          <ul> Vocab word 1 </ul>
          <ul> Vocab word 2 </ul>
          <ul> Vocab word 3 </ul>
        </li>
        <li> Sound 2
          <ul> Vocab word 1 </ul>
          <ul> Vocab word 2 </ul>
          <ul> Vocab word 3 </ul>
        </li>
        <li> Sound 3
          <ul> Vocab word 1 </ul>
          <ul> Vocab word 2 </ul>
          <ul> Vocab word 3 </ul>
        </li>
      </ul>
    </div>
    )
}

class Blanks extends Component {
  constructor(props) {
    super(props);
    this.state = {blank1: '', blank2: '', blank3: '', noSubmit: true};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }
  handleChange1(e) {
    this.setState({blank1: e.target.value});
  }
  handleChange2(e) {
    this.setState({blank2: e.target.value});
  }
  handleChange3(e) {
    this.setState({blank3: e.target.value});
  }
  componentWillUpdate(nextState) {
    nextState.noSubmit = !(nextState.blank1 && nextState.blank2 && nextState.blank3);
  }
  render() {
    return (
      <div>
        <TitleBar title='Lesson 1' color='purple'/>
        <SideNav currentTab = 'blanks'/>
        <h2>Fill in the Blank</h2>
        <h3>Word Bank</h3>
        <p><strong>Word1          Word2          Word3</strong></p>
        <form>
          <ol>
            <li> Blank 1 <input type = 'text' value = {this.state.blank1} onChange = {this.handleChange1} required/>.</li>
            <li> Blank 2 <input type = 'text' value = {this.state.blank2} onChange = {this.handleChange2} required/>.</li>
            <li> Blank 3 <input type = 'text' value = {this.state.blank3} onChange = {this.handleChange3} required/>.</li>
            <button type = 'submit' disabled = {this.state.noSubmit}>Submit</button>
          </ol>
        </form>
      </div>
    )
  }
}

const SentenceCreation = () => {
  return (
    <div>
      <TitleBar title = 'Lesson 1' color = 'purple'/>
      <SideNav currentTab = 'sentence'/>
      <h2>Create Your Own Sentences</h2>
      <ol>
        <li><strong>(Word 1) </strong><input type = 'text' size = '50' required/></li>
        <li><strong>(Word 2) </strong><input type = 'text' size = '50' required/></li>
        <li><strong>(Word 3) </strong><input type = 'text' size = '50' required/></li>
      </ol>
    </div>
  )
}

const EssayWriting = () => {
  return (
    <div>
      <TitleBar title = 'Lesson 1' color = 'purple'/>
      <SideNav currentTab = 'essay'/>
      <h2>Write a Short Essay</h2>
      <h3>Prompt: If you are waiting for your food at a restaurant, does that not make you the waiter?</h3>
      <textarea rows='20' cols='60' placeholder = 'Write your essay here' required/>
    </div>
  )
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
        <NavLink to = "/Learn/Book1/Lesson1/Video" style = {{backgroundColor: this.state.video}}> Video </NavLink><br/>
        <NavLink to = "/Learn/Book1/Lesson1/Vocabulary" style = {{backgroundColor: this.state.vocab}}>Vocabulary</NavLink><br/>
        <NavLink to = "/Learn/Book1/Lesson1/Blanks" style = {{backgroundColor: this.state.blanks}}>Fill in the Blanks</NavLink><br/>
        <NavLink to = "/Learn/Book1/Lesson1/SentenceCreation" style = {{backgroundColor: this.state.sentence}}>Sentence Creation</NavLink><br/>
        <NavLink to = "/Learn/Book1/Lesson1/EssayWriting" style = {{backgroundColor: this.state.essay}}>Essay Writing</NavLink><br/>
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