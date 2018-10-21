import React, {Component} from 'react';
import TitleBar from './pages/TitleBar';
import * as api from './utils/vietAppApi';

var TapNoiStyles = {
    overall: {
        overflow: 'auto',
        width: '80%',
        height: '100%',
        float: 'right',
        border: '1px solid right'
    },
    category: {
        textAlign: 'center',
        fontSize: 24,
        color: "dark blue",
        fontWeight: "bold"
    },
    title: {
        textAlign: 'center',
        margin: 'auto',
        position: 'relative',
        fontSize: 24,
        color: "red",
        fontWeight:"bold",  
    },
    role: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    words: {
        fontSize: 18,
        color: "black"
    }
}

export default class HTMLExercise extends Component {
    render() {
        return (
            <div>
            <div style = {TapNoiStyles.overall}>
                <img src = "https://via.placeholder.com/250/ffffff/000000" style = {{float: 'right'}}/>
                <p style = {TapNoiStyles.category}>Tập Nói</p>
                <p style = {TapNoiStyles.title}> Yêu mến cha mẹ</p>
                <br/><br/>


                <p style = {TapNoiStyles.role}>Cô Giáo:</p> <p style = {TapNoiStyles.words}>
                Hôm nay cô dạy các con một bài ca nhé!
                Các con có thích không?</p><br/><br/>
                <p style = {TapNoiStyles.role}>Học Sinh:</p> <p style = {TapNoiStyles.words}>
                Dạ thưa cô, vâng ạ.</p><br/><br/>
                <p style = {TapNoiStyles.role}>Cô Giáo:</p> <p style = {TapNoiStyles.words}>
                    <i>Uống nước nhớ nguồn 
                    <br/>Làm con phải hiếu 
                    <br/>Công cha như núi Thái Sơn
                    <br/>Nghĩa mẹ như nước trong nguồn chảy ra 
                    <br/>Người ơi! Làm người ở trên đời, nhớ công người nuôi dưỡng 
                    <br/>Đó mới là hiền nhân. Vì ai ta nên người tài ba? 
                    <br/>Hãy nhớ công sinh thành nhờ đâu mà có ta 
                    <br/>Học sinh: Bây giờ các bạn hát cùng chúng tớ cả bài hát lại nhé!</i>
                </p><br/>
            </div>
            </div>
        )
    }
}