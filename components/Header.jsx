import React from "react";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNav() {
    if (this.props.contact) {
      return (
        <HomeButton />
      )
    } else {
      return (
        <ContactButton />
      )
    }
  }

  render() {
    return (
      <div id="header" className="content box main-item">
        <h2 id="genre" className="header-item">HTX GOTHCORE</h2>
        <button id="contact-button" className="nav-button header-item">CONTACT</button>
        <img id="top-right-flourish-header" className="top-right flourish header-item" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
        <h1 id="title" className="header-item">Zo&euml; Emery</h1>
        <img id="bottom-left-flourish-header" className="bottom-left flourish header-item" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
      </div>
    )
  }
}

export default Header;
