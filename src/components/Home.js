import React, { Component } from "react";
import Typical from "react-typical";
 
class Home extends Component {
  render() {
    return (
      <div>
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
            "Full Stack Software Engineer",1
          ]}
          />

        </h1>
        
      </div>
      </div>
    );
  }
}
 
export default Home;