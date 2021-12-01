import React from "react";
import Genre from "./Genre.jsx";
import HomeButton from "./HomeButton.jsx";
import ContactButton from "./ContactButton.jsx";
import ArtButton from "./ArtButton.jsx";


class HeaderTopRow extends React.Component {
  constructor(props){
    super(props);
    this.renderNav = this.renderNav.bind(this)
  }

  renderNav() {
    if (this.props.page === "contact") {
      return (
        <div id="header-top-row" className="box">
          <Genre />
          <HomeButton handleHomeClick={this.props.handleHomeClick} />
          <ArtButton handleArtClick={this.props.handleArtClick} />
        </div>
      )
    } else if (this.props.page === "home") {
      return (
        <div id="header-top-row" className="box">
          <Genre />
          <ContactButton handleContactClick={this.props.handleContactClick} />
          <ArtButton handleArtClick={this.props.handleArtClick} />
        </div>
      )
    } else if (this.props.page === "art") {
      return (
        <div id="header-top-row" className="box">
          <Genre />
          <HomeButton handleHomeClick={this.props.handleHomeClick} />
          <ContactButton handleContactClick={this.props.handleContactClick} />
        </div>
      )
    }
  }

  render() {
    return (
      <div id="header-top-row-wrapper" className="box">
        {this.renderNav()}
      </div>
    )
  }
}

export default HeaderTopRow;
