import React from "react";
import "../styles/content.css";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.createForm = this.createForm.bind(this);
  }

  createForm(formName) {
    console.log(formName);
  }

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
              <p>Github</p>
              <p>Linked.in</p>
              <p>Phone</p>
            </div>
            <div className="cv-header-role">
              <p className="cv-header-role-text">Current Role</p>
            </div>
          </div>
          <hr></hr>

          <div className="cv-work">
            <h2 className="cv-title">Work Experiences</h2>
            <button
              className="work-button"
              onClick={(e) => this.createForm("work")}
            >
              + Add Work Experience
            </button>
          </div>
          <hr></hr>

          <div className="cv-education">
            <h2 className="cv-title">Education</h2>
            <button
              className="education-button"
              onClick={(e) => this.createForm("education")}
            >
              + Add Education
            </button>
          </div>
          <hr></hr>

          <div className="cv-skills">
            <h2 className="cv-title">Skills</h2>
            <button
              className="skills-button"
              onClick={(e) => this.createForm("skills")}
            >
              + Add Skills
            </button>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Content;
