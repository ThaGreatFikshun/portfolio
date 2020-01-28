import React, { Component } from "react";
 
class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <p>The following are the projects i undertook while in Campus:</p>
        <ol>
          <li>KAKAMEGA YOUTHS PROJECT</li>
          <p>I worked on the youth empowerment project that was meant to notifying the kakamega 
            youths on basis of the available jobs in Kakamega County.</p>
          <li>Online Polling System</li>
          <p>this is a system that is for live voting that allowed the students view the voting results and progress
          . The system was created using react js, Node JS for the localhost and Json file for storage inorder to reduce
          the storage space on the memory.
          </p>
        </ol>
      </div>
    );
  }
}
 
export default Projects;