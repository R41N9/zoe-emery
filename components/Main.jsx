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
    this.renderContent = this.renderContent.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  renderContent() {
    if (this.state.contact) {
      return (
        <ContactForm />
      )
    } else {
      return (
        <Update />
        <Releases />
      )
    }
  }

  handleContentClick() {
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
      <div id="main">
        <Header handleContentClick={handleContentClick} handleHomeClick={handleHomeClick}/>
        {renderContent()}
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
