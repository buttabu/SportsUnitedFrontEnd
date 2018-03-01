import React, { Component } from 'react';
import { Link } from 'react-router';
import { Dropdown } from 'semantic-ui-react';

export default class AdvanceSettings extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e, props) => {
    const option = props.value;
    switch (option){
      case 1:
        window.location.assign(`/profile/${this.props.auth.user.username}`);
        break;
      case 2:
        window.location.assign("/home/settings/");
        break;
      case 4:
        this.props.logout();
        break;
      default:
        break;
    }
  }

  render() {
    const { auth } = this.props;

    const trigger = ( <div className="settings-label"><div className="small-circle"></div><i className="big angle down icon"></i></div> )
    
    const options = [
      { key: 'user', text: 'Profile', icon: 'user', value: 1},
      { key: 'settings', text: 'Settings', icon: 'settings', value: 2 },
      { key: 'help', text: 'Help', icon: 'question', value: 3 },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out', value: 4 },
    ]

    return (
      <div className="col-sm-2 col-md-1 advance-settings">
        <Dropdown trigger={trigger} options={options} pointing='top right' icon={null} onChange={ (e, props) => this.handleChange(e, props)} value={null} selectOnBlur={false} />
      </div>    
    );
  }
}
