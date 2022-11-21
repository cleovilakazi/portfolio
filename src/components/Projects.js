import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './index.css'
import SimpleImageSlider from "react-simple-image-slider";
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'


const images = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },

];
class Projects extends Component {
 
  render() {
    return (
      <div>
      <SimpleImageSlider
        width={500}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
    );
  }
}
 
export default Projects;





