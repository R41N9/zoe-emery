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
        <div id="header-top-row">
          <h2 id="genre" className="header-top-row-item">HTX GOTHCORE</h2>
          <button id="contact-button" className="nav-button header-top-row-item">CONTACT</button>
        </div>
        <img id="top-right-flourish-header" className="top-right flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
        <h1 id="title" className="header-item">Zo&euml; Emery</h1>
        <img id="bottom-left-flourish-header" className="bottom-left flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
      </div>
    )
  }
}

export default Header;
