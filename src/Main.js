import React, { Component } from "react";


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import About_Me from "./components/About_Me";
import Projects from "./components/Projects";
import Why_SovTech from "./components/Why_Sovtech";
import './components/index.css'
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            
            <ul className="header">
              <li className="navlink"><NavLink to="/">Home</NavLink></li>
              <li className="navlink"><NavLink to="/stuff">About Me</NavLink></li>
              <li className="navlink"><NavLink to="/why_sovtech">Why SovTech</NavLink></li>
              <li className="navlink"><NavLink to="/projects">Projects</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={About_Me}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/why_sovtech" component={Why_SovTech}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;