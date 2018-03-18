import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './BetaValidation';
import { RenderInput, RenderSelect, RenderTextBox, RenderButton } from 'utils/renderform';

class BetaForm extends Component{
  constructor(props) {  
    super(props);
    this.state = {
      betaFormSent: false
    }
  }

  handleSubmit = (e, values) =>{
    // e.preventDefault()
    this.props.resetForm();
    this.setState({betaFormSent: true})
    // this.props.register(values);
  }

  render(){
    console.log(" === > PROPS IN BetaForm", this.props);
    console.log(" === > STATE IN BetaForm", this.state);
    
    const { fields: { name, email, credential, message }, values, handleSubmit, error} = this.props; 
  
    const smmd12 = "col-sm-12 col-md-12";
    const smmd4 = "col-xs-4 col-sm-4 col-md-4";
    const credentialOptions = [ 
      {label:'Athlete', value:'p', name:'credential'}, 
      {label:'Team Captain', value:'t', name:'credential'},
      {label:'League Organizer', value:'l', name:'credential'},
      {label:'Other', value:'o', name:'credential'}
    ];

    const renderSuccess = () => {
      return(
        <div className="col-sm-12 col-md-12">
          <span className="beta-form-title">Thank you for registering to our beta! we will get in contact with you as soon as possible</span>
        </div>
      );
    }

    const renderFormFields = () => {
      return(
        <div>
          <span className="beta-form-title">Beta Registration</span>
          <form onSubmit={handleSubmit((e)=> this.handleSubmit(e, values))}>
            <RenderInput field={name} outerClassName={smmd4 + " form-field padding-zero"} placeholder={"Name"} inputClassName={smmd12} />
            <RenderInput field={email} outerClassName={smmd4 + " form-field padding-zero"} placeholder={"Email"} inputClassName={smmd12} />
            <RenderSelect field={credential} outerClassName={smmd4 + " form-field padding-zero"} value={credential.value} options={credentialOptions} placeholder={"Who are you?"} inputClassName={smmd12} {...credential}/>
            <RenderTextBox field={message} rows={3} outerGroupClassName={smmd12 + " message-field padding-zero"} placeholder={"Write us a message"} textAreaClassName={smmd12} />
            {error && <p className="text-danger"><strong>{error}</strong></p>}
            <RenderButton className={"col-md-4"} buttonClassName={"beta-btn"} label={"Register"} />
          </form>
        </div>
      );
    }

    return(
      <div className="beta-form col-xs-12 col-sm-12 col-md-6"> 
        {this.state.betaFormSent ? (renderSuccess()) : (renderFormFields()) }
      </div>
    )
  }
}


export default reduxForm({
  form: 'BetaForm',
  fields: ['name', 'email', 'credential', 'message'],  
  validate: validate,
  forceUnregisterOnUnmount: true,
  // handleSubmit: this.handleSubmit
})(BetaForm)




