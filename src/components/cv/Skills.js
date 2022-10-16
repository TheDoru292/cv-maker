import React from "react";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skillsForm: "hidden",
      skill: "",
      list: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.cancelButtonClk = this.cancelButtonClk.bind(this);
    this.setDefaultValues = this.setDefaultValues.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }

  handleClick(value) {
    this.setState({
      skillsForm: value,
    });
  }

  cancelButtonClk() {
    this.setState({
      skillsForm: "hidden",
    });

    this.setDefaultValues();
  }

  setDefaultValues() {
    this.setState({
      skill: "",
    });
  }

  addSkill() {
    let skill = {
      skill: this.state.skill,
    };
    let variable = this.state.list.concat(skill);

    this.setState(
      {
        list: variable,
      },
      () => {
        console.log(this.state.list);
      }
    );
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

  render() {
    let { skill, list } = this.state;

    return (
      <div className="cv-skills form">
        <h2 className="cv-title">Skills</h2>
        <div className="cv-list-container">
          <ul className="cv-skills-list">
            {list.map((item) => {
              return <li key={item.skill}>{item.skill}</li>;
            })}
          </ul>
        </div>
        <button
          className={
            "skills-button " +
            (this.state.skillsForm === "hidden" ? "show" : "hidden")
          }
          onClick={(e) => this.handleClick("show")}
        >
          + Add Skills
        </button>
        <div className={"cv-form " + this.state.skillsForm}>
          <p>
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              name="skill"
              id="skills"
              value={skill}
              placeholder="Type your skills here"
              onChange={this.handleChange}
            ></input>
          </p>
          <p className="button-grid">
            <button onClick={this.cancelButtonClk}>Cancel</button>
            <button onClick={this.addSkill}>+ Add Skills</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Skills;