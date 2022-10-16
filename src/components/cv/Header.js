import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="cv-header">
        <div className="cv-header-name">
          <h1>First Name</h1>
          <h1>Last Name</h1>
        </div>
        <div className="cv-header-meta">
          <p>Address</p>
          <p>Github</p>
          <p>Linked.in</p>
          <p>Phone</p>
        </div>
        <div className="cv-header-role">
          <p className="cv-header-role-text">Current Role</p>
        </div>
        <hr></hr>
        <hr></hr>
      </div>
    );
  }
}

export default Header;
