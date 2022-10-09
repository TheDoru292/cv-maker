import React from "react";
import "../styles/content.css";

import Work from "./cv/Work";
import Header from "./cv/Header";
import Skills from "./cv/Skills";
import Education from "./cv/Education";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      workForm: "hidden",
      educationForm: "hidden",
      skillsForm: "hidden",
    };
  }

  render() {
    return (
      <div className="content">
        <div className="cv">
          <Header />
          <Work />
          <Education />
          <Skills />
        </div>
      </div>
    );
  }
}

export default Content;
