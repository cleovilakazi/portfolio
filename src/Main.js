import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import About_Me from "./components/About_Me";
import Contact from "./components/Contact";
import Why_SovTech from "./components/Why_Sovtech";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Mbali Cleopathra Mnisi</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">About_Me</NavLink></li>
              <li><NavLink to="/why_sovtech">Why SovTech</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={About_Me}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/why_sovtech" component={Why_SovTech}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;