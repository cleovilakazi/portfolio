import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './index.css'
class Contact extends Component {
  render() {
    return (
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
    );
  }
}
 
export default Contact;