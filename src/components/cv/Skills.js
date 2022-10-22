import React, { useState } from "react";

const uniqid = require("uniqid");

function Skills(props) {
  const [skillsForm, setSkillsForm] = useState("hidden");
  const [skill, setSkill] = useState("");
  const [list, setList] = useState([]);

  function removeFromArray(id) {
    for (let key in list) {
      if (list[key].id === id) {
        let index = list.indexOf(list[key]);
        let newList = list.slice(0, index);
        setList(newList);
      }
    }
  }

  function handleClick(value) {
    setSkillsForm(value);
  }

  function cancelButtonClk() {
    setSkillsForm("hidden");
    setDefaultValues();
  }

  function setDefaultValues() {
    setSkillsForm("hidden");
    setSkill("");
  }

  function addSkill() {
    let skillItem = {
      skill: skill,
      id: uniqid(),
    };

    let variable = list.concat(skillItem);
    setList(variable);
    setDefaultValues();
  }

  function handleChange(e) {
    setSkill(e.target.value);
  }

  return (
    <div className="cv-skills form">
      <h2 className="cv-title">Skills</h2>
      <div className="cv-list-container">
        <ul className="cv-skills-list">
          {list.map((item) => {
            return (
              <li key={item.id}>
                <div className="cv-skills-list-container">
                  <p>{item.skill}</p>
                  <button
                    className={props.mode === "edit" ? "show" : "hidden"}
                    onClick={(e) => removeFromArray(item.id)}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className={
          "skills-button " +
          (props.mode === "edit"
            ? skillsForm === "hidden"
              ? "show"
              : "hidden"
            : "hidden")
        }
        onClick={(e) => handleClick("show")}
      >
        + Add Skills
      </button>
      <div className={"cv-form " + skillsForm}>
        <p>
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            name="skill"
            id="skills"
            value={skill}
            placeholder="Type your skills here"
            onChange={handleChange}
          ></input>
        </p>
        <p className="button-grid">
          <button onClick={cancelButtonClk}>Cancel</button>
          <button onClick={addSkill}>+ Add Skills</button>
        </p>
      </div>
    </div>
  );
}

export default Skills;
