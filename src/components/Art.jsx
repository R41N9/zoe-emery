import React from "react";


class Art extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="art" className="content box">
        <h2 id="art-title" className="art-item item">ART</h2>
        <img id="art-1" className="art-item art-img item" src="./imgs/zoe-emery-somatic-symmetry.jpeg"/>
        <img id="art-2" className="art-item art-img item" src="./imgs/zoe-emery-somatic-symmetry.jpeg"/>
        <img id="art-3" className="art-item art-img item" src="./imgs/zoe-emery-somatic-symmetry.jpeg"/>
        <img id="art-4" className="art-item art-img item" src="./imgs/zoe-emery-somatic-symmetry.jpeg"/>
        <img id="art-5" className="art-item art-img item" src="./imgs/zoe-emery-somatic-symmetry.jpeg"/>
        <img id="art-6" className="art-item art-img item" src="./imgs/zoe-emery-somatic-symmetry.jpeg"/>
      </div>
    )
  }
}

export default Art;
