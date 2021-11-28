import React from "react";


class Update extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="update" className="content box main-item item">
        <img id="update-img" src="./imgs/band-playing.jpeg" alt="Zoe Emery @ Scout Bar 11/21/2021" className="update-item item"/>
        <div id="bio-news" className="box update-item item">
          <p id="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices dui sapien eget.</p>
          <p id="news">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices dui sapien eget.</p>
        </div>
        <a id="dl-link-latest-release" href="./music/darkBeat.mp3" className="download update-item item" download>
          <img id="latest-release-img" src="./imgs/zoe-emery-somatic-symmetry.jpeg" alt="Somatic Symmetry, Out of My System, Etcetera"/>
          <span id="latest-release-indicator">Out Now...</span>
        </a>
      </div>
    )
  }
}

export default Update;
