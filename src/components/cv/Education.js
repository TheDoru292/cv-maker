import React, { useState } from "react";

const uniqid = require("uniqid");

function Education(props) {
  const [school, setSchool] = useState({
    schoolName: "",
    cityName: "",
    from: "",
    to: "",
    degree: "",
    description: "",
    id: uniqid(),
  });
  const [educationForm, setEducationForm] = useState("hidden");
  const [list, setList] = useState([]);

  function cancelButtonClk() {
    setEducationForm("hidden");
    setDefaultValues();
  }

  function setDefaultValues() {
    setSchool({
      schoolName: "",
      cityName: "",
      from: "",
      to: "",
      degree: "",
      description: "",
    });
    setEducationForm("hidden");
  }

  function removeFromArray(id) {
    for (let key in list) {
      if (list[key].id === id) {
        let index = list.indexOf(list[key]);
        let newList = list.slice(0, index);
        setList(newList);
      }
    }
  }

  function addSchool() {
    let variable = list.concat(school);
    setList(variable);
    setDefaultValues();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSchool((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleClick(value) {
    setEducationForm(value);
  }

  return (
    <div className="cv-education">
      <h2 className="cv-title">Education</h2>
      <div className="cv-list-container">
        <ul className="cv-list">
          {list.map((item) => {
            return (
              <li key={item.id} className="cv-education">
                <p className="grid-fc-fr">
                  {item.schoolName}, {item.cityName}
                </p>
                <p className="cv-list-role grid-sc-fr">{item.degree}</p>
                <p className="grid-fc-sr">
                  {item.from} - {item.to}
                </p>
                <p className="grid-sc-sr">{item.description}</p>
                <button
                  className={
                    "grid-tc-tr " + (props.mode === "edit" ? "show" : "hidden")
                  }
                  onClick={(e) => removeFromArray(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className={
          "education-button " +
          (props.mode === "edit"
            ? educationForm === "hidden"
              ? "show"
              : "hidden"
            : "hidden")
        }
        onClick={(e) => handleClick("show")}
      >
        + Add Education
      </button>
      <div className={"cv-form " + educationForm}>
        <p>
          <label htmlFor="school-name">University or School Name</label>
          <input
            type="text"
            name="schoolName"
            id="school-name"
            placeholder="School Name"
            onChange={handleChange}
            value={school.schoolName}
          ></input>
        </p>
        <p>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="cityName"
            id="city"
            placeholder="City"
            onChange={handleChange}
            value={school.cityName}
          ></input>
        </p>
        <p className={"cv-form-date"}>
          <label htmlFor="date-from">From</label>
          <label htmlFor="date-to">To</label>
          <input
            type="text"
            name="from"
            id="date-from"
            placeholder="YYYY"
            onChange={handleChange}
            value={school.from}
          ></input>
          <input
            type="text"
            name="to"
            id="date-to"
            placeholder="YYYY or Present"
            onChange={handleChange}
            value={school.to}
          ></input>
        </p>
        <p>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Degree"
            onChange={handleChange}
            value={school.degree}
          ></input>
        </p>
        <p>
          <label htmlFor="description">
            Further Descriptions or Achievements
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={school.description}
          ></textarea>
        </p>
        <p className={"button-grid education-button"}>
          <button onClick={cancelButtonClk}>Cancel</button>
          <button onClick={addSchool}>+ Add Education</button>
        </p>
      </div>
      <hr></hr>
    </div>
  );
}

export default Education;
