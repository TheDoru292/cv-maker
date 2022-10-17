import React from "react";

const uniqid = require("uniqid");

class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      workItem: "",
      companyName: "",
      cityName: "",
      from: "",
      to: "",
      role: "",
      description: "",
      workForm: "hidden",
      list: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeFromArray = this.removeFromArray.bind(this);
  }

  componentDidMount() {
    this.cancelButtonClk = this.cancelButtonClk.bind(this);
    this.setDefaultValues = this.setDefaultValues.bind(this);
    this.addWork = this.addWork.bind(this);
  }

  handleClick(value) {
    this.setState({
      workForm: value,
    });
  }

  removeFromArray(id) {
    const { list } = this.state;

    for (let key in list) {
      if (list[key].id === id) {
        let index = list.indexOf(list[key]);
        let newList = list.slice(0, index);
        this.setState({
          list: newList,
        });
      }
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

  addWork() {
    let workItem = {
      companyName: this.state.companyName,
      cityName: this.state.cityName,
      from: this.state.from,
      to: this.state.to,
      role: this.state.role,
      description: this.state.description,
      id: uniqid(),
    };
    let variable = this.state.list.concat(workItem);
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

  cancelButtonClk() {
    this.setState({
      workForm: "hidden",
    });
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.setState(
      {
        workForm: "hidden",
        companyName: "",
        cityName: "",
        from: "",
        to: "",
        role: "",
        description: "",
      },
      () => {
        console.log(`${this.state.workForm} ${this.state.companyName}`);
      }
    );
  }

  render() {
    const { companyName, cityName, from, to, role, description, list } =
      this.state;

    return (
      <div className="cv-work form">
        <h2 className="cv-title">Work Experiences</h2>
        <div className="cv-list-container">
          <ul className="cv-list">
            {list.map((item) => {
              return (
                <li key={item.id} className="cv-work">
                  <p>
                    {item.companyName}, {item.cityName}
                  </p>
                  <p className="cv-list-role">{item.role}</p>
                  <p>
                    {item.from} - {item.to}
                  </p>
                  <p>{item.description}</p>
                  <button onClick={(e) => this.removeFromArray(item.id)}>
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
            (this.state.workForm === "hidden" ? "show" : "hidden")
          }
          onClick={(e) => this.handleClick("show")}
        >
          + Add Work Experience
        </button>
        <div className={"cv-form " + this.state.workForm}>
          <p>
            <label htmlFor="company-name">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="company-name"
              placeholder="Company Name"
              onChange={this.handleChange}
              value={companyName}
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
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Role"
              onChange={this.handleChange}
              value={role}
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
          <p className={"button-grid work-button"}>
            <button onClick={this.cancelButtonClk}>Cancel</button>
            <button onClick={this.addWork}>+ Add Work Experience</button>
          </p>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Work;
