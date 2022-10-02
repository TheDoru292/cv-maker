import React from "react";
import "../styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

Header.defaultProps = {
  title: "CV Maker",
};

export default Header;
