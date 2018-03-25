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
    this.setState({betaFormSent: true});
    const result = {
      name: values.name,
      email: values.email,
      credential: values.credential.value,
      message: values.message,
      beta: true
    }
    this.props.contactsporta(result);
  }

  render(){
    // console.log("PROPS IN BETA FORM", this.props);
    const { fields: { name, email, credential, message }, values, handleSubmit, error} = this.props; 
  
    const smmd12 = "col-xs-12 col-sm-12 col-md-12";
    const smmd4 = "col-xs-12 col-sm-4 col-md-4";
    const credentialOptions = [ 
      {label:'Athlete', value:'A', name:'credential'}, 
      {label:'Team Captain', value:'T', name:'credential'},
      {label:'League Organizer', value:'L', name:'credential'},
      {label:'Other', value:'O', name:'credential'}
    ];

    const renderSuccess = () => {
      return(
        <div className="col-sm-12 col-md-12">
          <span className="beta-form-title">Thank you for registering to our beta! We will be in touch soon</span>
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
            <RenderTextBox field={message} rows={1} outerClassName={"col-xs-12 col-sm-12 col-md-12 message-field padding-zero"} placeholder={"Message"} textAreaClassName={smmd12} />
            {error && <p className="text-danger"><strong>{error}</strong></p>}
            <RenderButton className={"col-xs-4 col-sm-3 col-md-4 pull-right"} buttonClassName={"beta-btn"} label={"Register"} />
          </form>
        </div>
      );
    }

    return(
      <div className="beta-form col-xs-12 col-sm-12 col-md-5"> 
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





