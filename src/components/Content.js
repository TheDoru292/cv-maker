import React, { useState } from "react";
import "../styles/content.css";

import Work from "./cv/Work";
import Header from "./cv/Header";
import Skills from "./cv/Skills";
import Education from "./cv/Education";

function Content() {
  const [currentMode, setCurrentMode] = useState("edit");

  function handleClick(value) {
    setCurrentMode(value);
  }

  return (
    <div className="content">
      <div className="cv">
        <div className="cv-mode-picker">
          <button
            className="cv-mode-picker-button"
            onClick={(e) => handleClick("edit")}
          >
            Editing
          </button>
          <button
            className="cv-mode-picker-button"
            onClick={(e) => handleClick("preview")}
          >
            Preview
          </button>
        </div>
        <Header mode={currentMode} />
        <Work mode={currentMode} />
        <Education mode={currentMode} />
        <Skills mode={currentMode} />
      </div>
    </div>
  );
}

export default Content;
