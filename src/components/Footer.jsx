import React from "react";


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer id="footer" className="main-item box item">
        <small id="footer-text" className="footer-item item">&copy; COPYRIGHT ZO&Euml; EMERY 2021<br />SITE BY IAIN FURSTENWERTH</small>
      </footer>
    )
  }
}

export default Footer;
