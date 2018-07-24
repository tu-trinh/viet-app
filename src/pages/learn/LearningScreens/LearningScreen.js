import React, {Component} from 'react';
import TitleBar from './TitleBarTemp'

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
    </ol>)
}

const Blanks = () => {

}

const SentenceCreation = () => {

}

const EssayWriting = () => {

}


class SideNav extends Component {
  render () {
    return (
  <NavLink to = "/Learn/Book/Lesson/Vocabulary">Vocabulary</NavLink>
  )
}
}

export default class LearningScreen extends Component {
  
  render() {
    return (
     
    
       <div>
         <TitleBar title = "Learning Lessson" color= "purple"/>
         {/* <SideNav/> */}
         <Router>
           <Switch>
             <Route path = "/:learn/:book/:lesson/" component={Video}/>
             <Route path = "/:learn/:book/:lesson/Vocabulary" component={Vocab}/>
             <Route path = "/:learn/:book/:lesson/Blanks" component = {Blanks}/>
             <Route path = "/:learn/:book/:lesson/Sentence" component = {SentenceCreation}/>
             <Route path = "/:learn/:book/:lesson/EssayWriting" component = {EssayWriting}/>

           </Switch>
         </Router>
       </div>
       
     
    );
  }
}
