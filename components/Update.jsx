import React from "react";


class Update extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="update" className="content">
        <img id="update-img" src="./imgs/zoe-emery-show.html" alt="Zoe Emery @ Scout Bar 11/21/2021"/>
        <p id="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices dui sapien eget. Vulputate ut pharetra sit amet aliquam id diam. Id cursus metus aliquam eleifend mi in nulla.</p>
        <p id="news">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices dui sapien eget. Vulputate ut pharetra sit amet aliquam id diam. Id cursus metus aliquam eleifend mi in nulla.</p>
        <a href="./music/darkBeat.mp3" download>
          <img id="latest-release" src="./imgs/zoe-emery-somatic-symmetry.jpeg" alt="Somatic Symmetry, Out of My System, Etcetera"/>
          <span id="latest-release-indicator">Out Now...</span>
        </a>
      </div>
    )
  }
}

export default Update;