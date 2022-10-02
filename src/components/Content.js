import React from "react";
import "../styles/content.css";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="cv">
          <div className="cv-header">
            <div className="cv-header-name">
              <h1>First Name</h1>
              <h1>Last Name</h1>
            </div>
            <div className="cv-header-meta">
              <p>Address</p>
              <p>Adress</p>
              <p>Github</p>
              <p>Linked.in</p>
              <p>Phone</p>
            </div>
            <div className="cv-header-role">
              <p>Current Role</p>
            </div>
            <hr></hr>
          </div>

          <div className="cv-work">
            <h2 className="cv-title">Work Experiences</h2>
            <button>Add Work Experience</button>
            <hr></hr>
          </div>

          <div className="cv-education">
            <h2 className="cv-title">Education</h2>
            <button>Add Education</button>
            <hr></hr>
          </div>

          <div className="cv-skills">
            <h2 className="cv-title">Skills</h2>
            <button>Add Skills</button>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
