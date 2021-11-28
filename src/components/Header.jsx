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
        <div id="links" className="box">
          <a id="insta-link" className="link" href="https://www.instagram.com/zoe.emery.music/?hl=en"><img id="insta-link-img" className="link-img" src="./imgs/instagram-logo.png" alt="insta logo"/></a>
          <a id="twitter-link" className="link" href="https://twitter.com/dysdaimonia"><img id="twitter-link-img" className="link-img" src="./imgs/twitter-logo.png" alt="twitter logo"/></a>
          <a id="fb-link" className="link" href="https://www.facebook.com/ZoeEmeryMusic"><img id="fb-link-img" className="link-img" src="./imgs/facebook-logo.png" alt="facebook logo"/></a>
        </div>
        <img id="bottom-left-flourish-header" className="bottom-left flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
      </div>
    )
  }
}

export default Header;
