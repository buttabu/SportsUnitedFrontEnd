import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, Icon, Button, Popup, Form, Checkbox, Modal, Header } from 'semantic-ui-react'

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { auth } = this.props;
    const credential = auth.user.credential; 

    const renderCredential = () => {
      const cred = credential ==="A" ? "Athlete" : "Admin"
      return(
        <span>{cred}</span>
      )
    }

    const renderCardRow = (label, outerClassName, innerClassName) => {
      return(
        <div className={outerClassName}>
          <span className={innerClassName}>{label}</span>            
        </div>
      )
    }
    const handleClick = () => {
    return (<Form>
    <Form.Field> <label>First Name</label> <input placeholder='First Name' /> </Form.Field>
    <Form.Field> <label>Last Name</label> <input placeholder='Last Name' /> </Form.Field>
    <Form.Field> <Checkbox label='I agree to the Terms and Conditions' /></Form.Field>
    <Button type='submit'>Submit</Button>
    </Form>
  )
    }
    const renderProfileCard = () => {
      const profileCard = (
       
        <div className="col-sm-12 col-md-12 col-lg-12 pop-genie profile-card1">
        
          <div className="temp-bar1">
            <div className="temp-circle1"></div>
          </div>
    
        
          
          <div className="col-sm-12 col-md-12 col-lg-12 profile-card-details1">
          <div className="edit-button">

          <Modal trigger={<Button icon='edit' />} basic size='small'>
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
            </Modal.Content>
            <Modal.Actions>
            <Form>
            <Form.Field> <label>First Name</label> <input placeholder='First Name' /> </Form.Field>
            <Form.Field> <label>Last Name</label> <input placeholder='Last Name' /> </Form.Field>
            <Form.Field> <Checkbox label='I agree to the Terms and Conditions' /></Form.Field>
            <Button type='submit'>Submit</Button>
            </Form>
            {/* <Button basic color='red' inverted>
                <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted>
                <Icon name='checkmark' /> Yes
            </Button> */}
            </Modal.Actions>
        </Modal>

          {/* <button onClick={this.handleClick}> Click me </button> */}
            {/* <Popup onClick={this.handleChange} trigger={<Button icon='edit' />} content='Edit Your Information'/> */}
         </div>
            {(credential === "A") &&
              <div>
                <h3>{auth.user.first_name + " " + auth.user.last_name}</h3>
                <h4>User Name: {auth.user.username}</h4>
                <span className="text-muted">Multi-liner about athlete/team-captain</span>
              </div>
            }
            
            {renderCredential()}
          </div>
          
          <div className="col-sm-12 col-md-12 profile-card-status1">
            
            {credential === "A" &&
              <div>
                {renderCardRow("Status", "col-sm-6 col-md-6 padding-zero", "text-muted")}
                {renderCardRow("Playing", "col-sm-6 col-md-6 padding-zero", "text-success")}
                {renderCardRow("Sport", "col-sm-6 col-md-6 padding-zero", "text-muted")}
                {renderCardRow("Soccer", "col-sm-6 col-md-6 padding-zero", "text-success")}
              </div>
            }
            {renderCardRow("New York, NY", "col-sm-12 col-md-12", "")}
          </div>

          <div className="col-sm-12 col-md-12 profile-card-views1">
            <h2>5</h2>
            <span>Profile Views</span>
          </div>

        </div>)

      return(profileCard)
    }
    return (
      <div >
        {renderProfileCard()}
      </div>
    );
  }
}
