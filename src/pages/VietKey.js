import React, {Component} from 'react';

export default class VietKey extends Component {
    constructor(props){
        super(props);
    }
    handleClick(text) {
        var textField;
        if (textField != null) {
            // if (document.all && textField.createTextRange && textField.caretPos) {
            //     textField.caretPos.text = text;
            //     textField.caretPos.select();
            // } else if (textField.setSelectionRange) {
            //     var rangeStart = textField.selectionStart;
            //     var rangeEnd = textField.selectionEnd;
            //     var tempStr1 = textField.value.substring(0,rangeStart);
            //     var tempStr2 = textField.value.substring(rangeEnd);
            //     textField.value = tempStr1 + text + tempStr2;
            //     setSelectionRange(textField, rangeStart+1, rangeStart+1);
            // } else {
                textField.value += text;
                textField.focus();
            // }
        }
    }
    render() {
        return (
            <div className = 'VietKey' style = {{}}>
                <button onClick = {this.handleClick}><center>{this.props.letter}</center></button>
            </div>
        )
    }
  }