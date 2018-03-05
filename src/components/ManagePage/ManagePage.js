import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { CreateDivisionForm } from 'components';

export default class ManagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    }
  }
  
  handleItemClick = (e, props) => {
    this.setState({ activeItem: props.value });
  }

  render() {
    const {auth} = this.props;
    const { activeItem } = this.state
    const credential = auth.user.credential; 

    const renderActiveItemContent = () => {
      switch (activeItem){
        case 0:
          return (<CreateDivisionForm />)
        case 1:
          return (<div className="some-content"></div>)
        case 2:
          return (<div className="some-content"></div>)
        case 3:
          return (<div className="some-content"></div>)
        default:
          break;
      }
    }

    return (
      <div className="manage-page">
        
        <div className="col-md-12">
          <div className="col-md-3 pop-genie">
            <div><span>Current Divison</span></div>
            <div><span>Division 1</span></div>
          </div>
        </div>

        <div className="col-md-12">

          <Menu pointing secondary vertical className="col-md-3 padding-zero">
            <div className="pop-genie">
              <Menu.Item name='Create Division' active={activeItem === 0} value={0} onClick={this.handleItemClick} />
              <Menu.Item name='Manage Divisions' active={activeItem === 1} value={1} onClick={this.handleItemClick} />
              <Menu.Item name='Manage Teams' active={activeItem === 2} value={2} onClick={this.handleItemClick} />
              <Menu.Item name='Athlete & Team Search' active={activeItem === 3} value={3} onClick={this.handleItemClick} />
            </div>
          </Menu>
          
          <div className="col-md-9">
            {renderActiveItemContent()}
          </div>

        </div>

      </div>
    );
  }
}
