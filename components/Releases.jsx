import React from "react";


class Releases extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="releases" className="content">
        <h2 id="releases-title">ALL RELEASES</h2>
        <a href="./music/darkBeat.mp3" download>
          <img id="eris-eros" src="./imgs/zoe-emery-eris-eros.jpeg" alt="Eris Eros"/>
        </a>
        <a href="./music/darkBeat.mp3" download>
          <img id="eris-eros-pt-2" src="./imgs/zoe-emery-eris-eros.jpeg" alt="Eris Eros, Pt. 2"/>
        </a>
        <a href="./music/darkBeat.mp3" download>
          <img id="hydrochloria" src="./imgs/zoe-emery-eris-eros.jpeg" alt="Hydrochloria"/>
        </a>
      </div>
    )
  }
}

export default Releases;
