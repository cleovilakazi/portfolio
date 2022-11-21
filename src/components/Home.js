import React, { Component } from "react";
import Typical from "react-typical";
import './index.css'
import profile from '../images/mbali.jpg';

 
class Home extends Component {
  render() {
    return (
      <div>
       <div className="main"> {/**home */}
        
        <div className="info"> {/**info */}
      <div className="fullName">
        <span className="name-text">
          Hello, <span className="highlighted-text">Cleopathra Mbali Mnisi </span> here.
        </span>
      </div>
      <div className="profession">
        <h1 className="profession-text">
          <Typical
          loop={1}
          steps={[
            "Full Stack Software Engineer",1,
          ]}
          />
        </h1>
        <div className="profession-des">
          <p className="profession-description">
            Specializes mainly in web app development and mobile app development.
          </p>
        </div>
        
      </div>
      </div>  
      <div className="photo">{/**photo */}
          <img src={profile} alt="profile" width={150}></img>
        </div>
      </div>
      <footer>
        <div className="box-icons">
        <a href="https://twitter.com/CleopathraCodes">
          <i className="fa fa-twitter the-icons"></i>
        </a>
        <a href="https://www.linkedin.com/in/cleopathra-mnisi-638184211">
          <i className="fa fa-linkedin the-icons"></i>
        </a>
        <a href="https://github.com/cleovilakazi">
          <i className="fa fa-github the-icons"></i>
        </a>
        <a href="mailto: mmnisi021@student.wethinkcode.co.za">
          <i className="fa fa-envelope-o the-icons"></i>
        </a>
        <a href="tel: +27732244927">
          <i className="fa fa-mobile the-icons"></i>
        </a>
        </div>
      </footer>
      
      </div>
    );
  }
}
 
export default Home;