import React, { Component } from 'react';
import { Link } from 'react-router';
import { Photo } from 'components';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {height, width} = this.props;
    console.log(" ======== PROPS IN HOMEPAGE: ", this.props);
    const tempIMG = "https://static1.squarespace.com/static/55ea2481e4b0902fc052322c/55edff23e4b05e517b4fca88/55edffb5e4b0f3b1af6ebc7f/1441660864583/ENZ_4604-5.jpg?format=1500w"
    const messageHeight = Math.round(height / 4) - 50;

    return (
      <div className="homepage">

        <Photo className="background" photoClassName="background-photo" src={tempIMG} parentsHeight={height} />
        
        <div className="sporta-message col-xs-10 col-sm-10 col-md-5 col-lg-5" style={{top: messageHeight + 'px'}}>
          <span>A Centralized Platform to Connect Leagues, Teams and Players</span>
        </div>

      </div>
    );
  }
}

