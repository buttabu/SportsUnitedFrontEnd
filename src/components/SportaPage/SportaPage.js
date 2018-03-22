import React, { Component } from 'react';
import { Photo, BetaForm } from 'components';

export default class SportaPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {height, width} = this.props;
    const tempIMG = "https://static1.squarespace.com/static/55ea2481e4b0902fc052322c/55edff23e4b05e517b4fca88/55edffb5e4b0f3b1af6ebc7f/1441660864583/ENZ_4604-5.jpg?format=1500w"
    // const messageHeight = Math.round(height / 4) - 50;

    return (
      <div className="sporta-page">
        <Photo className="sporta-background" photoClassName="background-photo" src={tempIMG} parentsHeight="" />
        {/*<div className="sporta-message col-xs-10 col-sm-10 col-md-5 col-lg-5">
          <span>A simple platform to connect you to the best leagues in town</span>
        </div>
        */}
        <div className="sporta-page-top col-md-12">
          <div className="sporta-message col-xs-12 col-sm-12 col-md-6">
            <p>Matching you to the best sports leagues in town.</p>
          </div>
          
          <BetaForm contactsporta={this.props.contactsporta}/>
          
        </div>

      </div>
    );
  }
}
