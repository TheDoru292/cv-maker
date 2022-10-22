import React, { useState } from "react";

function Header(props) {
  const [input, setInput] = useState({
    firstNameInput: false,
    lastNameInput: false,
    addressInput: false,
    githubInput: false,
    linkedinInput: false,
    phoneInput: false,
    roleInput: false,
  });

  const [text, setText] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    address: "Address",
    github: "Github",
    linkedin: "Linked.in",
    phone: "Phone",
    role: "Current Role",
  });

  function changeToInput(stateVar) {
    if (props.mode === "edit") {
      setInput((prevState) => ({ ...prevState, [stateVar]: true }));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setText((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      setInput((prevState) => ({
        ...prevState,
        [e.target.className]: false,
      }));
    }
  }

  return (
    <div className="cv-header">
      <div className="cv-header-name">
        {input.firstNameInput === false ? (
          <h1 onClick={(e) => changeToInput("firstNameInput")}>
            {text.firstName}
          </h1>
        ) : (
          <input
            name="firstName"
            className="firstNameInput"
            value={text.firstName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></input>
        )}
        {input.lastNameInput === false ? (
          <h1 onClick={(e) => changeToInput("lastNameInput")}>
            {text.lastName}
          </h1>
        ) : (
          <input
            name="lastName"
            className="lastNameInput"
            value={text.lastName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></input>
        )}
      </div>
      <div className="cv-header-meta">
        {input.addressInput === false ? (
          <p onClick={(e) => changeToInput("addressInput")}>{text.address}</p>
        ) : (
          <input
            name="address"
            className="addressInput"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={text.address}
          ></input>
        )}
        {input.githubInput === false ? (
          <p onClick={(e) => changeToInput("githubInput")}>{text.github}</p>
        ) : (
          <input
            name="github"
            className="githubInput"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={text.github}
          ></input>
        )}
        {input.linkedinInput === false ? (
          <p onClick={(e) => changeToInput("linkedinInput")}>{text.linkedin}</p>
        ) : (
          <input
            name="linkedin"
            className="linkedinInput"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={text.linkedin}
          ></input>
        )}
        {input.phoneInput === false ? (
          <p onClick={(e) => changeToInput("phoneInput")}>{text.phone}</p>
        ) : (
          <input
            name="phone"
            className="phoneInput"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={text.phone}
          ></input>
        )}
      </div>
      <div className="cv-header-role">
        {input.roleInput === false ? (
          <p
            onClick={(e) => this.changeToInput("roleInput")}
            className="cv-header-role-text"
          >
            {text.role}
          </p>
        ) : (
          <input
            name="role"
            className="roleInput"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={console.log("hi")}
            onBlur={handleKeyDown}
            value={text.role}
          ></input>
        )}
      </div>
      <hr></hr>
      <hr></hr>
    </div>
  );
}

export default Header;
