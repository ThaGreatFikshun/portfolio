import React, { Component } from "react";
import logo from './hacker.png';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>ABOUT ME</h2>
        <img src="hacker.png" height="100" width="80"></img>
        <p>I am a full stack Developer i am an undergraduate in United States International University-Africa
          pursuing my Bsc in Applied computer technology and Concentrating in Networking and Forensics, and minor 
        in software developement.
        </p>
        <h2>Programming Languages</h2>
        <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>NODEJS</li>
        <li>JAVA</li>
        </ul>

      </div>
    );
  }
}
 
export default Home;