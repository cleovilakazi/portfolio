import React, { Component } from "react";
import Typical from "react-typical";

class Why_SovTech extends Component {
    render() {
      return (
        <div>

          <div className="sovBox">
          <Typical className="sovTitle"
          loop={1}
          steps={[
            "Why I want to join SovTech",1,
          ]}
          />
          </div>
          <div ></div>
        </div>
      );
    }
  }
   
  export default Why_SovTech;