import React from "react";


class ContactButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button id="contact-button" className="nav-button header-top-row-item item" onClick={this.props.handleContactClick}>CONTACT</button>
    )
  }
}

export default ContactButton;
