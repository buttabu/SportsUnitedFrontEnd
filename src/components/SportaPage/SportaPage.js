import React, { Component } from 'react';
import { Photo, BetaForm } from 'components';
import { Button, Modal } from 'semantic-ui-react'

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
            <p>Seamlessly manage your league and we'll connect the right athletes to you</p>
            <p className="margin-t30">Register and be Sporta</p>
          </div>
          
          <div className="hidden-xs">
            <BetaForm contactsporta={this.props.contactsporta}/>
          </div>

          <Modal className="beta-modal" trigger={<Button className="beta-btn-2 hidden-sm hidden-md hidden-lg">Beta Registration</Button>} dimmer={"blurring"} size={"small"} closeIcon>
            <BetaForm contactsporta={this.props.contactsporta}/>    
          </Modal>

        </div>

      </div>
    );
  }
}

// <p>Need to manage or expand your league?</p>
// <p>Looking for the right team to play in?</p>
// <p>Seamlessly league management for those in charge and matching athletes to the best sports leagues in town.</p>
// 