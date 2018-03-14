import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, Icon, Button, Popup, Form, Checkbox, Modal, Header } from 'semantic-ui-react'

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { auth } = this.props;
    // const credential = auth.user.credential; 
    // console.log("PROPS", this.props);
    // console.log("USER credential", credential)

    const renderCredential = () => {
      const cred = credential ==="A" ? "Athlete" : null
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

    const renderProfileCard = () => {
      const profileCard = (
       
        <div className="col-sm-12 col-md-12 col-lg-12 pop-genie profile">
        
          <div className="top-bar">
            <div className="circle col-xs-6 col-sm-12"></div>
          </div>
    
          
          <div className="col-sm-12 col-md-12 profile-details">
          <div className="edit-button">

          <Modal trigger={<Button icon='edit' />} basic size='small' closeIcon>
            <Header icon='edit' content='Update Information' />
            <Modal.Content>
            <p>Pleases Update your Information!!!!</p>
            </Modal.Content>
            <Modal.Actions>
            <Form>
            <Form.Field> <label>First Name</label> <input placeholder='First Name' /> </Form.Field>
            <Form.Field> <label>Last Name</label> <input placeholder='Last Name' /> </Form.Field>
            <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Button type='submit'>Submit</Button>
            </Form>

            </Modal.Actions>
        </Modal>

         </div>
            {(credential === "A") &&
              <div>
                <h3>{auth.user.first_name + " " + auth.user.last_name}</h3>
                <h4>UserName: {auth.user.username}</h4>
                <span className="text-muted">Multi-liner about athlete/team-captain</span>
              </div>
            }
            
            {renderCredential()}
          </div>
          
          <div className="col-sm-12 col-md-12 profile-status">
            
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

          <div className="col-sm-12 col-md-12 profile-views">
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
