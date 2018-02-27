import React, { Component } from 'react';
import { Link } from 'react-router';
import { Tab } from 'semantic-ui-react';


export default class AccountPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("ACCOUNT PAGE PROPS", this.props);

    const panes = [
      { menuItem: 'Home', render: () => <Tab.Pane attached={false}>Tab 1 account-page</Tab.Pane> },
      { menuItem: 'Messages', render: () => <Tab.Pane attached={false}>Tab 2 account-page</Tab.Pane> },
      { menuItem: 'Friends', render: () => <Tab.Pane attached={false}>Tab 3 account-page</Tab.Pane> },
    ]

    return (
      <div className="account-page">
        
        <div className="pop-genie top-tab">
          <Tab menu={ { secondary: true, pointing: true } } panes={panes}/>
        </div>

      </div>
    );
  }
}
