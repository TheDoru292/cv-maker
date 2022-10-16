import React from "react";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      cityName: "",
      from: "",
      to: "",
      degree: "",
      description: "",
      educationForm: "hidden",
      list: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.cancelButtonClk = this.cancelButtonClk.bind(this);
    this.setDefaultValues = this.setDefaultValues.bind(this);
    this.addSchool = this.addSchool.bind(this);
  }

  cancelButtonClk() {
    this.setState({
      educationForm: "hidden",
    });
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.setState(
      {
        educationForm: "hidden",
        schoolName: "",
        cityName: "",
        from: "",
        to: "",
        degree: "",
        description: "",
      },
      () => {
        console.log(`${this.state.educationForm} ${this.state.schoolName}`);
      }
    );
  }

  addSchool() {
    let schoolItem = {
      schoolName: this.state.schoolName,
      cityName: this.state.cityName,
      from: this.state.from,
      to: this.state.to,
      degree: this.state.degree,
      description: this.state.description,
    };
    let variable = this.state.list.concat(schoolItem);
    this.setState(
      {
        list: variable,
      },
      () => {
        console.log(this.state.list);
      }
    );

    this.setDefaultValues();
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

  handleClick(value) {
    this.setState({
      educationForm: value,
    });
  }

  render() {
    let { schoolName, cityName, from, to, degree, description, list } =
      this.state;

    return (
      <div className="cv-education">
        <h2 className="cv-title">Education</h2>
        <div className="cv-list-container">
          <ul className="cv-list">
            {list.map((item) => {
              return (
                <li className="cv-education">
                  <p key={item.schoolName}>
                    {item.schoolName}, {item.cityName}
                  </p>
                  <p className="cv-list-role" key={item.degree}>
                    {item.degree}
                  </p>
                  <p key={item.from}>
                    {item.from} - {item.to}
                  </p>
                  <p key={item.description}>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className={
            "education-button " +
            (this.state.educationForm === "hidden" ? "show" : "hidden")
          }
          onClick={(e) => this.handleClick("show")}
        >
          + Add Education
        </button>
        <div className={"cv-form " + this.state.educationForm}>
          <p>
            <label htmlFor="school-name">University or School Name</label>
            <input
              type="text"
              name="schoolName"
              id="school-name"
              placeholder="School Name"
              onChange={this.handleChange}
              value={schoolName}
            ></input>
          </p>
          <p>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="cityName"
              id="city"
              placeholder="City"
              onChange={this.handleChange}
              value={cityName}
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
              onChange={this.handleChange}
              value={from}
            ></input>
            <input
              type="text"
              name="to"
              id="date-to"
              placeholder="YYYY or Present"
              onChange={this.handleChange}
              value={to}
            ></input>
          </p>
          <p>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Degree"
              onChange={this.handleChange}
              value={degree}
            ></input>
          </p>
          <p>
            <label htmlFor="description">
              Further Descriptions or Achievements
            </label>
            <textarea
              id="description"
              name="description"
              onChange={this.handleChange}
              value={description}
            ></textarea>
          </p>
          <p className={"button-grid education-button"}>
            <button onClick={this.cancelButtonClk}>Cancel</button>
            <button onClick={this.addSchool}>+ Add Education</button>
          </p>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Education;