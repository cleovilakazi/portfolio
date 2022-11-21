import React, { Component } from "react";
import Typical from "react-typical";
import './index.css'
import profile from '../images/mbali.jpg';

 
class Home extends Component {
  render() {
    return (
       <div className="main"> {/**home */}
        
        <div className="info"> {/**info */}
      <div className="fullName">
        <span className="name-text">
          Hello, <span className="highlighted-text">Cleopathra Mbali Mnisi here.</span>
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
    );
  }
}
 
export default Home;