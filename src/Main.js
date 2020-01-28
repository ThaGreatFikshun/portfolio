 //linking the created Navigation links and also 
 //packaging everything into a container
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">KNOW ME</NavLink></li>
            <li><NavLink to="/contact">LETS CONNECT </NavLink></li>
            <li><NavLink to="/workshop">WORKSHOPS</NavLink></li>
            <li><NavLink to="/internship">INTERNSHIP</NavLink></li>
          </ul>
          <center><h1>My-Simple-React-Portfolio</h1>
          <p>Welcome to my Portifolio 2020 Edition I am Fikshun</p></center>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;