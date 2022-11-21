import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';

 
class About_Me extends Component {
  render() {
    return (
      <div className="me">
        <h2 className="abt-me">About Me</h2>
        <div className="description">
        <br/>
        <br/>
        <p className="des-par"> I am a <strong>full stack software engineer </strong>
          who is about to complete her course in 
          December 2022.
          <br/>
          <br/>
          I am very <strong>passionate</strong> about what I do and 
          it <strong>shows in the results I deliver.</strong>
          <br/>
          <br/>
          <strong>What seperates me from the rest is that I am: </strong>
          <ul className="valuesList">
            <li>Result-Oriented</li>
            <li>Adaptable</li>
            <li>Accountable</li>
            <li>Responsible</li>
          </ul>
          <br/>
          I am able to <strong>work well in both a team as well as an individual</strong>, 
          as I believe I have <strong>strong self motivation.</strong>
          <br/>
          <br/>
          <strong>What made me fall in love with this career path </strong> 
          is how I have always loved to solve problems. 
          </p>
          </div>
          <div className="skills">
            <h3 className="skills-heading">Skills</h3>
            <div className="skills-container">
            <img className="skill-icon" src="https://img.icons8.com/color/48/000000/java.png" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/color/48/000000/javascript.png" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/color/48/000000/python" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/color/48/000000/html-5" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/color/48/gitlab.png" alt="skill" title="gilab"/>
            <img className="skill-icon" src="https://img.icons8.com/color/48/docker.png" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/color/48/000000/git.png" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/glyph-neue/48/ffffff/github.png "alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/color/48/flutter.png" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/color/48/dart.png" alt="skill" />
            <img className="skill-icon" src="https://img.icons8.com/color/48/sql.png" alt="skill" />
           
            
            </div>
          </div>
      </div>  
    );
  }
}
export default About_Me;