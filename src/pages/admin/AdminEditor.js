import React, {Component} from 'react';
import TitleBar from '../TitleBar';
import {Link} from 'react-router-dom';
import CustomEditor from '../../CustomEditor';

export default class AdminEditor extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <TitleBar title = "Admin Editor" color = "blue"/>
                <CustomEditor />
            </div>
        )
    }
}