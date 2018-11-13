// AS OF NOW 10/26/18 12:24AM (THURSDAY/FRIDAY) THIS IS NOT IN USE

import React, {Component} from 'react';
import {
  convertFromRaw,
  convertToRaw,
  convertFromHTML,
  EditorState,
} from 'draft-js';
import TitleBar from '../TitleBar';
import LearnButton from './LearnButton';
import ExerciseSideNav from './ExerciseSideNav';
import Exercise from './Exercise';
import * as api from '../../utils/vietAppApi';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import VietKey from '../../keyboard/VietKey';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class ExerciseScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ExerciseSideNav />
                {/* <Exercise /> */}
            </div>
        )
    }
}