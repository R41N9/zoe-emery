import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Update from "./Update.jsx";
import Releases from "./Releases.jsx";
import ContactForm from "./ContactForm.jsx";
import Art from "./Art.jsx";
import Footer from "./Footer.jsx";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: "home" }
  }

  renderContent() {
    if (this.state.page === "contact") {
      return (
        <ContactForm />
      )
    } else if (this.state.page === "home") {
      return (
        <Update />
      )
    } else if (this.state.page === "art") {
      return (
        <Art />
      )
    }
  }

  renderReleases() {
    if(this.state.page === "home") {
      return (
        <Releases />
      )
    } else {
      return null;
    }
  }

  handleContactClick() {
    this.setState({ page: "contact" });
  }

  handleHomeClick() {
    this.setState({ page: "home" });
  }

  handleArtClick() {
    this.setState({ page: "art" });
  }

  render() {
    return (
      <div id="main" className="box">
        <Header handleContactClick={this.handleContactClick.bind(this)} handleHomeClick={this.handleHomeClick.bind(this)} handleArtClick={this.handleArtClick.bind(this)} page={this.state.page} />
        {this.renderContent()}
        {this.renderReleases()}
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
