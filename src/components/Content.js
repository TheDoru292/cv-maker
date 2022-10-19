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
      currentMode: "edit",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({
      currentMode: value,
    });
  }

  render() {
    return (
      <div className="content">
        <div className="cv">
          <div className="cv-mode-picker">
            <button
              className="cv-mode-picker-button"
              onClick={(e) => this.handleClick("edit")}
            >
              Editing
            </button>
            <button
              className="cv-mode-picker-button"
              onClick={(e) => this.handleClick("preview")}
            >
              Preview
            </button>
          </div>
          <Header mode={this.state.currentMode} />
          <Work mode={this.state.currentMode} />
          <Education mode={this.state.currentMode} />
          <Skills mode={this.state.currentMode} />
        </div>
      </div>
    );
  }
}

export default Content;
