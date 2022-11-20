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
import './components/index.css'
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            
            <ul className="header">
              <li className="navlink"><NavLink to="/">Home</NavLink></li>
              <li className="navlink"><NavLink to="/stuff">About_Me</NavLink></li>
              <li className="navlink"><NavLink to="/why_sovtech">Why SovTech</NavLink></li>
              <li className="navlink"><NavLink to="/contact">Contact</NavLink></li>
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