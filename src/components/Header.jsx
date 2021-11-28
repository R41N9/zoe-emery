import React from "react";
import HomeButton from "./HomeButton.jsx";
import ContactButton from "./ContactButton.jsx";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNav() {
    if (this.props.contact) {
      return (
        <HomeButton handleHomeClick={this.props.handleHomeClick} />
      )
    } else {
      return (
        <ContactButton handleContactClick={this.props.handleContactClick} />
      )
    }
  }

  render() {
    return (
      <div id="header" className="content box main-item item">
        <div id="header-top-row">
          <h2 id="genre" className="header-top-row-item item">HTX GOTHCORE</h2>
          {this.renderNav()}
        </div>
        <img id="top-right-flourish-header" className="top-right flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
        <h1 id="title" className="header-item item">Zo&euml; Emery</h1>
        <img id="bottom-left-flourish-header" className="bottom-left flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
      </div>
    )
  }
}

export default Header;
