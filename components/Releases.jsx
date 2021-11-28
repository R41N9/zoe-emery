import React from "react";


class Releases extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // releases outer box with green border
      <div id="releases" className="content box main-item">
        <h2 id="releases-title">ALL RELEASES</h2>
        <img id="top-right-flourish-releases" className="top-right flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
        <div id="downloads" className="box releases-item">
          <a id="dl-link-eris-eros" href="./music/darkBeat.mp3" className="download downloads-item" download>
            <img id="eris-eros" src="./imgs/zoe-emery-eris-eros.jpeg" alt="Eris Eros" width="100%"/>
          </a>
          <a id="dl-link-eris-eros-2" href="./music/darkBeat.mp3" className="download downloads-item" download>
            <img id="eris-eros-pt-2" src="./imgs/zoe-emery-eris-eros.jpeg" alt="Eris Eros, Pt. 2" width="100%"/>
          </a>
          <a id="dl-link-hydrochloria" href="./music/darkBeat.mp3" className="download downloads-item" download>
            <img id="hydrochloria" src="./imgs/zoe-emery-eris-eros.jpeg" alt="Hydrochloria" width="100%"/>
          </a>
        </div>
        <img id="bottom-left-flourish-releases" className="bottom-left flourish" src="./imgs/red-corner-zoe-emery.png" alt="flourish"/>
      </div>
    )
  }
}

export default Releases;
