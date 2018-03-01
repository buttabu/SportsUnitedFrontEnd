import React, { Component } from 'react';
import { Link } from 'react-router';
import { Tab } from 'semantic-ui-react';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {auth} = this.props;
    const credential = auth.user.credential; 

    const renderPanes = () => {
      const panes = [
        { menuItem: 'Feed', render: () => <Tab.Pane attached={false}>Tab 1 account-page</Tab.Pane> },
        { menuItem: 'Messages', render: () => <Tab.Pane attached={false}>Tab 2 account-page</Tab.Pane> },
        { menuItem: 'Friends', render: () => <Tab.Pane attached={false}>Tab 3 account-page</Tab.Pane> },
      ]

      // adding more tabs based on user
      // if (credential==="L"){
      //   panes.push({ menuItem: 'Friends', render: () => <Tab.Pane attached={false}>Tab 3 account-page</Tab.Pane> })
      // }

      return(panes)
    }

    return (
      <div className="home-page">
        
        <div className="pop-genie top-tab">
          <Tab menu={ { secondary: true, pointing: true } } panes={renderPanes()}/>
        </div>

      </div>
    );
  }
}
