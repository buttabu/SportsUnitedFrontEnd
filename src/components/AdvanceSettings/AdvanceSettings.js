import React, { Component } from 'react';
import { Link } from 'react-router';
import { Dropdown } from 'semantic-ui-react';

export default class AdvanceSettings extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e, props) => {
    console.log("change", e);
    console.log("change", props);
    const option = props.value;
    console.log("option", option);
    switch (option){
      case 1:
        window.location.assign(`/profile/${this.props.auth.user.username}`);
        break;
      case 2:
        window.location.assign("/account/settings/");
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
    console.log("PROPS IN ACCOUNT SETTINS", this.props);

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


//render: () => <Link to={`/profile/${auth.user.username}`}></Link> 





// const { Button, Container, Divider, Dropdown, Label} = semanticUIReact

// const options = [
//   { value: 'all', text: 'All' },
//   { value: 'articles', text: 'Articles' },
//   { value: 'products', text: 'Products' },
// ]

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'all' }
//   }
  
//   reset() {
//     this.setState({ value: undefined })
//   }
  
//   setProducts() {
//     this.setState({ value: 'products' })
//   }
  
//   setValue(e, data) {
//     this.setState({ value: data.value })
//   }
  
//   render() {
//     const { value } = this.state
    
//     return (
//       <Container>
//         <Label content={`Current: ${value}`} />
        
//         <Divider />
        
//         <Dropdown onChange={this.setValue.bind(this)} options={options} selection value={value} />
        
//         <Divider />
        
//         <Button content='Reset' onClick={this.reset.bind(this)} />
//         <Button content='Set products' onClick={this.setProducts.bind(this)} />

//       </Container>
//     )
//   }
// }

// // ----------------------------------------
// // Render to DOM
// // ----------------------------------------
// const mountNode = document.createElement('div')
// document.body.appendChild(mountNode)

// ReactDOM.render(<App />, mountNode)