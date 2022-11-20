import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
class Contact extends Component {
  render() {
    return (
      <div>
        <a href="https://twitter.com/CleopathraCodes">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/cleopathra-mnisi-638184211">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/cleovilakazi">
          <i className="fa fa-github"></i>
        </a>
        <a href="mailto: mmnisi021@student.wethinkcode.co.za">
          <i className="fa fa-envelope-o"></i>
        </a>
        <a href="tel: +27732244927">
          <i className="fa fa-mobile"></i>
        </a>
      </div>
    );
  }
}
 
export default Contact;