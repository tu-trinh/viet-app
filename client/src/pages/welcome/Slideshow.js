import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Slide } from 'react-slideshow-image';
import backArrow from '../../media/backArrow.png'
import HomeButton from '../../media/HomeButton.png'
require('./slideshow.css');

 
const slideImages = [
  "https://s3-us-west-1.amazonaws.com/viet-app/Hoc+Thuoc+Long+XD+demo.PNG",
  "https://s3-us-west-1.amazonaws.com/viet-app/Hoc+Tieng+On+Van+XD+demo.PNG",
  "https://s3-us-west-1.amazonaws.com/viet-app/Video+XD+demo.PNG",
  "https://s3-us-west-1.amazonaws.com/viet-app/Tap+Noi+XD+demo.PNG", 
  "https://s3-us-west-1.amazonaws.com/viet-app/Tap+Doc+XD+demo.PNG"
//           
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
export default class Slideshow extends Component {
  render() {  
  return (
    <div>
      <Slide {...properties}>
        <div>
          <div>
            <img src = {slideImages[0]} style = {{'width': '50%'}}/>
          </div>
        </div>
        <div>
          <div>
            <img src = {slideImages[1]} style = {{'width': '50%'}}/>
          </div>
        </div>
        <div>
          <div>
          <img src = {slideImages[2]} style = {{'width': '50%'}}/>
          </div>
        </div>
        <div>
          <div>
          <img src = {slideImages[3]} style = {{'width': '50%'}}/>
          </div>
        </div>
        <div>
          <div>
          <img src = {slideImages[4]} style = {{'width': '50%'}}/>
          </div>
        </div>
      </Slide>
    </div>
    )
  }
}

// library.add(faAngleRight);
// library.add(faAngleLeft);

// const Slide = ({image}) => {
//     const styles = {
//         backgroundImage: `url(${image})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '50% 60%'
//     }
//     return <div className = "slide" style = {styles}></div>
// }

// const LeftArrow = (props) => {
//     return (
//       <div className = "left-arrow" onClick={props.goToPrevSlide}>
//         <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }
  
  
//   const RightArrow = (props) => {
//     return (
//       <div className = "right-arrow" onClick={props.goToNextSlide}>
//         <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }

// export default class Slideshow extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           images: [
//             "https://s3-us-west-1.amazonaws.com/viet-app/Noi+Tu+Voi+Nghia+Preview.PNG",
//             "https://s3-us-west-1.amazonaws.com/viet-app/Bai+Tap+Tu+Ngu+Preview.PNG",
//             "https://s3-us-west-1.amazonaws.com/viet-app/Dien+Vao+Cho+Trong+Preview.PNG",
//             "https://s3-us-west-1.amazonaws.com/viet-app/Hoc+Thuoc+Long+Preview.PNG",
//             "https://s3-us-west-1.amazonaws.com/viet-app/Hoc+Tu+Ngu+Preview.PNG"
//           ],
//           currentIndex: 0,
//           translateValue: 0
//       };
//     }

//     goToPrevSlide = () => {
//         if(this.state.currentIndex === 0)
//           return;
        
//         this.setState(prevState => ({
//           currentIndex: prevState.currentIndex - 1,
//           translateValue: prevState.translateValue + this.slideWidth()
//         }))
//       }
    
//       goToNextSlide = () => {
//         // Exiting the method early if we are at the end of the images array.
//         // We also want to reset currentIndex and translateValue, so we return
//         // to the first image in the array.
//         if(this.state.currentIndex === this.state.images.length - 1) {
//           return this.setState({
//             currentIndex: 0,
//             translateValue: 0
//           })
//         }
        
//         // This will not run if we met the if condition above
//         this.setState(prevState => ({
//           currentIndex: prevState.currentIndex + 1,
//           translateValue: prevState.translateValue + -(this.slideWidth())
//         }));
//       }

//     slideWidth() {
//         return document.querySelector('.slide').clientWidth
//     }
//     render() {
//         return (
//           <div className="slider">
    
//             <div className="slider-wrapper"
//               style={{
//                 transform: `translateX(${this.state.translateValue}px)`,
//                 transition: 'transform ease-out 0.45s'
//               }}>
//                 {
//                   this.state.images.map((image, i) => (
//                     <Slide key={i} image={image} />
//                   ))
//                 }
//             </div>
    
//             <LeftArrow
//              goToPrevSlide={this.goToPrevSlide}
//             />
    
//             <RightArrow
//              goToNextSlide={this.goToNextSlide}
//             />
//           </div>
//         );
//       }
//   }