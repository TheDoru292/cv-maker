import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameInput: false,
      lastNameInput: false,
      addressInput: false,
      githubInput: false,
      linkedinInput: false,
      phoneInput: false,
      roleInput: false,
      firstName: "First Name",
      lastName: "Last Name",
      address: "Address",
      github: "Github",
      linkedin: "Linked.in",
      phone: "Phone",
      role: "Current Role",
    };

    this.changeToInput = this.changeToInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  changeToInput(stateVar) {
    console.log(stateVar);

    if (this.props.mode === "edit") {
      this.setState(
        {
          [stateVar]: true,
        },
        () => {
          console.log(this.state.firstNameInput);
        }
      );
    }
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(`New ${e.target.name} state: ${e.target.value}`);
      }
    );
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.setState({
        [e.target.className]: false,
      });
    }
  }

  render() {
    let {
      firstNameInput,
      lastNameInput,
      addressInput,
      githubInput,
      linkedinInput,
      phoneInput,
      roleInput,
    } = this.state;

    let { firstName, lastName, address, github, linkedin, phone, role } =
      this.state;

    return (
      <div className="cv-header">
        <div className="cv-header-name">
          {firstNameInput === false ? (
            <h1 onClick={(e) => this.changeToInput("firstNameInput")}>
              {firstName}
            </h1>
          ) : (
            <input
              name="firstName"
              className="firstNameInput"
              value={firstName}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
          )}
          {lastNameInput === false ? (
            <h1 onClick={(e) => this.changeToInput("lastNameInput")}>
              {lastName}
            </h1>
          ) : (
            <input
              name="lastName"
              className="lastNameInput"
              value={lastName}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
          )}
        </div>
        <div className="cv-header-meta">
          {addressInput === false ? (
            <p onClick={(e) => this.changeToInput("addressInput")}>{address}</p>
          ) : (
            <input
              name="adress"
              className="addressInput"
              value={address}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            ></input>
          )}
          {githubInput === false ? (
            <p onClick={(e) => this.changeToInput("githubInput")}>{github}</p>
          ) : (
            <input
              name="github"
              className="githubInput"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              value={github}
            ></input>
          )}
          {linkedinInput === false ? (
            <p onClick={(e) => this.changeToInput("linkedinInput")}>
              {linkedin}
            </p>
          ) : (
            <input
              name="linkedin"
              className="linkedinInput"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              value={linkedin}
            ></input>
          )}
          {phoneInput === false ? (
            <p onClick={(e) => this.changeToInput("phoneInput")}>{phone}</p>
          ) : (
            <input
              name="phone"
              className="phoneInput"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              value={phone}
            ></input>
          )}
        </div>
        <div className="cv-header-role">
          {roleInput === false ? (
            <p
              onClick={(e) => this.changeToInput("roleInput")}
              className="cv-header-role-text"
            >
              {role}
            </p>
          ) : (
            <input
              name="role"
              className="roleInput"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onFocus={console.log("hi")}
              onBlur={this.handleKeyDown}
              value={role}
            ></input>
          )}
        </div>
        <hr></hr>
        <hr></hr>
      </div>
    );
  }
}

export default Header;
