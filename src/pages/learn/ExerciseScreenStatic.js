import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import TitleBar from '../TitleBar';
import VietKey from '../../keyboard/VietKey';

const Video = () => {
  return(
    <div>
      <SideNav currentTab = 'video'/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XwdqfH-wRkY" ></iframe>
    </div>
  )
}

const Vocab = () => {
    return (
    <div>
      <SideNav currentTab = 'vocab'/>

      <h2>Vocabulary</h2>
      <h3>Words from the text</h3>
      <ul>
        <li> Vocab Word 1 </li>
        <li> Vocab Word 2 </li>
        <li> Vocab Word 3 </li>
      </ul>
      <h3>Speak</h3>
      <ul>
        <li> Vocab Word 1 </li>
        <li> Vocab Word 2 </li>
        <li> Vocab Word 3 </li>
      </ul>
      <h3>Core Phonetics</h3>
      <ul>
        <li> Phonetic 1
          <ul> Example Word 1 </ul>
          <ul> Example Word 2 </ul>
          <ul> Example Word 3 </ul>
        </li>
        <li> Phonetic 2
          <ul> Phonetic Example 1 </ul>
          <ul> Phonetic Example 2 </ul>
          <ul> Phonetic Example 3 </ul>
        </li>
        <li> Phonetic 3
          <ul> Usage Example 1 </ul>
          <ul> Usage Example 2 </ul>
          <ul> Usage Example 3 </ul>
        </li>
      </ul>
    </div>
    )
}

class Blanks extends Component {
  constructor(props) {
    super(props);
    this.state = {blank1: '', blank2: '', blank3: '', characters:['â'],submitDisabled: true};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e, blank_num) { // Find a way to make this dynamic, like this.state.characters[0] is passed in.
    const makeObjToPass = (e, blank_num) =>{
      const returnObj = {}
      const property = 'blank' + blank_num
      const newText = this.state[property] + this.state.characters[0]
      returnObj[property] = newText
      return returnObj
    }
    const objToPass = makeObjToPass(e, blank_num)
    this.setState(objToPass)
  }

  handleChange (e, blank_num) {
    const makeObjToPass = (e, blank_num) => {
      const returnObj = {}
      const property = 'blank' + blank_num
      returnObj[property] = e.target.value
      return returnObj
    }

    const objToPass = makeObjToPass(e, blank_num)

    this.setState(objToPass)
  }
  componentWillUpdate(nextProps, nextState) {
    nextState.submitDisabled = !(nextState.blank1 && nextState.blank2 && nextState.blank3);
  }
  render() {
    const {blank1, blank2, blank3} = this.state;
    return (
      <div>
        <SideNav currentTab = 'blanks'/>
        <button onClick = {(e) => this.handleClick(e, 1)} character = {this.state.characters[0]}/>
        <h2>Fill in the blanks</h2>

        <br/><br/>
        <form>
          <ol>
            <li> <input type = "text" value = {this.state.blank1} onChange = {(e) => this.handleChange(e, 1)}/></li>
            <li> <input type = "text" value = {this.state.blank2} onChange = {(e) => this.handleChange(e, 2)}/></li>
            <li> <input type = "text" value = {this.state.blank3} onChange = {(e) => this.handleChange(e, 3)}/></li>
            <button type = 'submit' disabled = {this.state.submitDisabled} style = {{backgroundColor: 'green'}}>Submit</button>
          </ol>
        </form>
      </div>
    )
  }
}

class SentenceCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {sentence1: '', sentence2: '', sentence3: '', submitDisabled: true};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }
  handleChange1(e) {
    this.setState({sentence1: e.target.value});
  }
  handleChange2(e) {
    this.setState({sentence2: e.target.value});
  }
  handleChange3(e) {
    this.setState({sentence3: e.target.value});
  }
  componentWillUpdate(nextProps, nextState) {
    nextState.submitDisabled = !(nextState.sentence1 && nextState.sentence2 && nextState.sentence3);
  }
  render() {
    const {sentence1, sentence2, sentence3} = this.state;
    return (
      <div>
        <SideNav currentTab = 'sentence'/>
        <h2>Sentence Creation</h2>
        <form>
          <ol>
            <li><strong>(Word 1) </strong><input type = 'text' size = '50' value = {sentence1} onChange = {this.handleChange1} /></li>
            <li><strong>(Word 2) </strong><input type = 'text' size = '50' value = {sentence2} onChange = {this.handleChange2} /></li>
            <li><strong>(Word 3) </strong><input type = 'text' size = '50' value = {sentence3} onChange = {this.handleChange3} /></li>
            <button type = 'submit' disabled = {this.state.submitDisabled} style = {{backgroundColor: 'green'}}>Submit</button>
          </ol>
        </form>
      </div>
    )
  }
}

class EssayWriting extends Component {
  constructor(props) {
    super(props);
    this.state = {essay: '', submitDisabled: true};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({essay: e.target.value});
  }
  componentWillUpdate(nextProps, nextState) {
    nextState.submitDisabled = !(nextState.essay);
  }
  render() {
    const {essay} = this.state;
    return (
      <div>
        <SideNav currentTab = 'essay'/>
        <h2>Essay</h2>
        <h3>Essay Prompt: Why did the turtle beat the rabbit?</h3>
        <form>
          <textarea rows='20' cols='60' placeholder = 'Write your essay here' value = {essay} onChange = {this.handleChange} />
          <button type = 'submit' disabled = {this.state.submitDisabled} style = {{backgroundColor: 'green'}}>Submit</button>
        </form>
      </div>
    )
  }
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
        <NavLink to = "/Learn/Book1/Lesson1/Blanks" style = {{backgroundColor: this.state.blanks}}>Blanks</NavLink><br/>
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
         <TitleBar title='Lesson 1' color='purple' backbuttonPath = '/Learn/:Book'/>
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