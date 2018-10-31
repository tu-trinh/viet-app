// Next step: make the images visible in the slide

import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight);
library.add(faAngleLeft);

class Slide extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

class LeftArrow extends Component {
    render() {
        return (
            <div onClick = {this.props.goToPrevSlide}>
                <FontAwesomeIcon icon="arrow-left" />
            </div>
        )
    }
}

class RightArrow extends Component {
    
    render() {
        return (
        <div onClick = {this.props.goToNextSlide}>
            <FontAwesomeIcon icon="arrow-right" />
        </div>
        );
    }
}  

export default class Slideshow extends Component {
    constructor(props) {
      super(props);
      this.state = {
          images: [
              "https://s3-us-west-1.amazonaws.com/viet-app/Noi+Tu+Voi+Nghia+Preview.PNG",
              "https://s3-us-west-1.amazonaws.com/viet-app/Bai+Tap+Tu+Ngu+Preview.PNG",
              "https://s3-us-west-1.amazonaws.com/viet-app/Dien+Vao+Cho+Trong+Preview.PNG",
              "https://s3-us-west-1.amazonaws.com/viet-app/Hoc+Thuoc+Long+Preview.PNG",
              "https://s3-us-west-1.amazonaws.com/viet-app/Hoc+Tu+Ngu+Preview.PNG"
          ],
          currentIndex: 0
      };
    }
    goToPrevSlide() {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }
    goToNextSlide() {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
      return (
        <div style={{height: "700px", width: "700px"}}>
            {
                this.state.images.map((image, i) => (
                    <Slide key={i} image={image} />
                ))
            }
            <LeftArrow goToPrevSlide = {this.goToPrevSlide}/>
            <RightArrow goToNextSlide = {this.goToNextSlide}/>
        </div>
      );
    }
  }