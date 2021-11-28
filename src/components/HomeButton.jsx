import React from "react";


class HomeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button id="home-button" className="nav-button header-top-row-item item" onClick={this.props.handleHomeClick}>HOME</button>
    )
  }
}

export default HomeButton;
