import React from "react";


class ArtButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button id="art-button" className="nav-button header-top-row-item item" onClick={this.props.handleArtClick}>ART</button>
    )
  }
}

export default ArtButton;
