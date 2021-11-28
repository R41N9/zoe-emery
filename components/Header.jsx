import React from "react";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header" className="content">
        <h2 id="genre">HTX GOTHCORE</h2>
        <button id="contact-button nav-button">CONTACT</button>
        <h1 id="title">Zo&euml; Emery</h1>
        <img id="bottom-left-flourish" className="flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
        <img id="top-right-flourish" className="flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
      </div>
    )
  }
}

export default Header;
