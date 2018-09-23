import React, {Component} from 'react';

    // handleClick(text) {
    //     var textField;
    //     if (textField != null) {
    //         // if (document.all && textField.createTextRange && textField.caretPos) {
    //         //     textField.caretPos.text = text;
    //         //     textField.caretPos.select();
    //         // } else if (textField.setSelectionRange) {
    //         //     var rangeStart = textField.selectionStart;
    //         //     var rangeEnd = textField.selectionEnd;
    //         //     var tempStr1 = textField.value.substring(0,rangeStart);
    //         //     var tempStr2 = textField.value.substring(rangeEnd);
    //         //     textField.value = tempStr1 + text + tempStr2;
    //         //     setSelectionRange(textField, rangeStart+1, rangeStart+1);
    //         // } else {
    //             textField.value += text;
    //             textField.focus();
    //         // }
    //     }
    // }

class Key extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <button onClick = {this.props.handleClick}>{this.props.character}</button>
        )
    }
}

export default class Full extends Component {
    constructor (props) {
        super(props);
        this.state = {
            characters:['â'], // Will probably be JSON or something later
            letterToChange : '',
            formText: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleClick (e) { // Find a way to make this dynamic, like this.state.characters[0] is passed in.
        this.setState({formText: this.state.formText + this.state.characters[0]})
    }

    handleChange (e) {
        this.setState({formText: e.target.value})
    }

    render () { // try to split up the components. also the input blurs after pressing the button.
        return(<div> 
            <Key onClick = {this.handleClick} character = {this.state.characters[0]}/>
            <input type = "text" value = {this.state.formText} onChange = {this.handleChange}/>
        </div>)
    }
} 