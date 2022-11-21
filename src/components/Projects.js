import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './index.css'
import SimpleImageSlider from "react-simple-image-slider";
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


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
      <div className="projects">
        <div className="slide-show">
      <SimpleImageSlider
        width={600}
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>
      </div>
      <div>
        <h2 className="overview">Project Overview</h2>
        <div className="overview-box">
        
          <Card 
            style={{
            background: "plum",
      }}
      >
      <CardContent>
        <div >
      <Typography >
      <p className="overview-des">
          One of the projects that I have been able to complete is called <strong>WeShare/ExpenseShare.</strong>
          <br/>
          <br/>

          The project is basically an app that allows a user to request a payment from someone <br/>
          who owes them.
          <br/>
          <br/>
          For Example:
          <br/>
          Say for instance you go out to dinner with your peers and you end up <br/>
          paying bill, you can use the 
          app to send the amount owed to you, by entering the <br/>person's email
          address, the amount 
          they owe you and when you expect them to pay <br/>you back.
          Also you can view your outstanding payment requests, the payments<br/>
           you still need to make 
          and the total expenses made within a time period.
          <br/>
          <br/>

          The project is built using:
          <ul >
            <li className="project-tools">Java api</li>
            <li className="project-tools">Javascript</li>
            <li className="project-tools">HTML and CSS</li>
            <li className="project-tools">HandleBars.js</li>

          </ul>
          
        </p>
        
        
      </Typography>
      </div>

      </CardContent>
   </Card>
          </div>
      </div>
    </div>
    );
  }
}
 
export default Projects;





