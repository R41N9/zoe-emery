import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Update from "./Update.jsx";
import Releases from "./Releases.jsx";
import ContactForm from "./ContactForm.jsx";
import Footer from "./Footer.jsx";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contact: false }
  }

  renderContent() {
    if (this.state.contact) {
      return (
        <ContactForm />
      )
    } else {
      return (
        <Update />

      )
    }
  }

  renderReleases() {
    if(!this.state.contact) {
      return (
        <Releases />
      )
    } else {
      return null;
    }
  }

  handleContactClick() {
    if (!this.state.contact) {
      this.setState({ contact: true });
    }
  }

  handleHomeClick() {
    if (this.state.contact) {
      this.setState({ contact: false });
    }
  }

  render() {
    return (
      <div id="main" className="box">
        <Header handleContactClick={this.handleContactClick.bind(this)} handleHomeClick={this.handleHomeClick.bind(this)} contact={this.state.contact} />
        {this.renderContent()}
        {this.renderReleases()}
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
