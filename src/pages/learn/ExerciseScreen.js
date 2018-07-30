import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import TitleBar from '../TitleBar';
import VietKey from '../VietKey';

const Video = () => {
  return(
    <div>
      <TitleBar title='Bài 1' color='purple'/>
      <SideNav currentTab = 'video'/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XwdqfH-wRkY" ></iframe>
    </div>
  )
}

const Vocab = () => {
    return (
    <div>
      <TitleBar title='Bài 1' color='purple'/>
      <SideNav currentTab = 'vocab'/>
      <h2>Từ Ngữ Trong Bài Này</h2>
      <h3>Chữ Trong Bài Đọc</h3>
      <ul>
        <li> Chữ 1 </li>
        <li> Chữ 2 </li>
        <li> Chữ 3 </li>
      </ul>
      <h3>Học Tiếng</h3>
      <ul>
        <li> Chữ 1 </li>
        <li> Chữ 2 </li>
        <li> Chữ 3 </li>
      </ul>
      <h3>Ôn Vần</h3>
      <ul>
        <li> Vần 1
          <ul> Chữ 1 </ul>
          <ul> Chữ 2 </ul>
          <ul> Chữ 3 </ul>
        </li>
        <li> Vần 2
          <ul> Chữ 1 </ul>
          <ul> Chữ 2 </ul>
          <ul> Chữ 3 </ul>
        </li>
        <li> Vần 3
          <ul> Chữ 1 </ul>
          <ul> Chữ 2 </ul>
          <ul> Chữ 3 </ul>
        </li>
      </ul>
    </div>
    )
}

class Blanks extends Component {
  constructor(props) {
    super(props);
    this.state = {blank1: '', blank2: '', blank3: '', submitDisabled: true};
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
  componentWillUpdate(nextProps, nextState) {
    nextState.submitDisabled = !(nextState.blank1 && nextState.blank2 && nextState.blank3);
  }
  render() {
    const {blank1, blank2, blank3} = this.state;
    return (
      <div>
        <TitleBar title='Bài 1' color='purple'/>
        <SideNav currentTab = 'blanks'/>
        <VietKey letter = 'â'/>
        <h2>Điền Vào Chỗ Trống</h2>
        <h3>Bảng Chữ</h3>
        <p><strong>Chữ1          Chữ2          Chữ3</strong></p>
        <form>
          <ol>
            <li> Chỗ Trống 1 <input type = 'text' value = {blank1} onChange = {this.handleChange1} />.</li>
            <li> Chỗ Trống 2 <input type = 'text' value = {blank2} onChange = {this.handleChange2} />.</li>
            <li> Chỗ Trống 3 <input type = 'text' value = {blank3} onChange = {this.handleChange3} />.</li>
            <button type = 'submit' disabled = {this.state.submitDisabled} style = {{backgroundColor: 'green'}}>Nộp</button>
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
        <TitleBar title = 'Bài 1' color = 'purple'/>
        <SideNav currentTab = 'sentence'/>
        <h2>Đặt Câu</h2>
        <form>
          <ol>
            <li><strong>(Chữ 1) </strong><input type = 'text' size = '50' value = {sentence1} onChange = {this.handleChange1} /></li>
            <li><strong>(Chữ 2) </strong><input type = 'text' size = '50' value = {sentence2} onChange = {this.handleChange2} /></li>
            <li><strong>(Chữ 3) </strong><input type = 'text' size = '50' value = {sentence3} onChange = {this.handleChange3} /></li>
            <button type = 'submit' disabled = {this.state.submitDisabled} style = {{backgroundColor: 'green'}}>Nộp</button>
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
        <TitleBar title = 'Bài 1' color = 'purple'/>
        <SideNav currentTab = 'essay'/>
        <h2>Viết Văn</h2>
        <h3>Đầu Bài: Tại sao con rùa thắng được con thỏ?</h3>
        <form>
          <textarea rows='20' cols='60' placeholder = 'Viết bài vào đây' value = {essay} onChange = {this.handleChange} />
          <button type = 'submit' disabled = {this.state.submitDisabled} style = {{backgroundColor: 'green'}}>Nộp</button>
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
        <NavLink to = "/Learn/Book1/Lesson1/Vocabulary" style = {{backgroundColor: this.state.vocab}}>Từ Ngữ</NavLink><br/>
        <NavLink to = "/Learn/Book1/Lesson1/Blanks" style = {{backgroundColor: this.state.blanks}}>Điền Vào Chỗ Trống</NavLink><br/>
        <NavLink to = "/Learn/Book1/Lesson1/SentenceCreation" style = {{backgroundColor: this.state.sentence}}>Đặt Câu</NavLink><br/>
        <NavLink to = "/Learn/Book1/Lesson1/EssayWriting" style = {{backgroundColor: this.state.essay}}>Viết Văn</NavLink><br/>
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