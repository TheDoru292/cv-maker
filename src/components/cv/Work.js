import React, { useState } from "react";

const uniqid = require("uniqid");

function Work(props) {
  const [work, setWork] = useState({
    companyName: "",
    cityName: "",
    from: "",
    to: "",
    role: "",
    description: "",
    id: uniqid(),
  });
  const [workForm, setWorkForm] = useState("hidden");
  const [list, setList] = useState([]);

  function handleClick(value) {
    setWorkForm(value);
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

  function handleChange(e) {
    const { name, value } = e.target;

    setWork((prevState) => ({ ...prevState, [name]: value }));
  }

  function addWork() {
    let variable = list.concat(work);
    setList(variable);
    setDefaultValues();
  }

  function cancelButtonClk() {
    setWorkForm("hidden");
    setDefaultValues();
  }

  function setDefaultValues() {
    setWork({
      companyName: "",
      cityName: "",
      from: "",
      to: "",
      role: "",
      description: "",
    });
    setWorkForm("hidden");
  }

  return (
    <div className="cv-work form">
      <h2 className="cv-title">Work Experiences</h2>
      <div className="cv-list-container">
        <ul className="cv-list">
          {list.map((item) => {
            return (
              <li key={item.id} className="cv-work">
                <p className="grid-fc-fr">
                  {item.companyName}, {item.cityName}
                </p>
                <p className="cv-list-role grid-sc-fr">{item.role}</p>
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
          "work-button " +
          (props.mode === "edit"
            ? workForm === "hidden"
              ? "show"
              : "hidden"
            : "hidden")
        }
        onClick={(e) => handleClick("show")}
      >
        + Add Work Experience
      </button>
      <div className={"cv-form " + workForm}>
        <p>
          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="company-name"
            placeholder="Company Name"
            onChange={handleChange}
            value={work.companyName}
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
            value={work.cityName}
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
            value={work.from}
          ></input>
          <input
            type="text"
            name="to"
            id="date-to"
            placeholder="YYYY or Present"
            onChange={handleChange}
            value={work.to}
          ></input>
        </p>
        <p>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Role"
            onChange={handleChange}
            value={work.role}
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
            value={work.description}
          ></textarea>
        </p>
        <p className={"button-grid work-button"}>
          <button onClick={cancelButtonClk}>Cancel</button>
          <button onClick={addWork}>+ Add Work Experience</button>
        </p>
      </div>
      <hr></hr>
    </div>
  );
}

export default Work;
