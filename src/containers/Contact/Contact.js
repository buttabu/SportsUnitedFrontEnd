import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { RenderInput, RenderButton, RenderSelect, RenderTextBox } from '../../utils/renderform';
import { hasValue } from '../../utils/utilfunctions';
import ContactValidation from './ContactValidation';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      formSent: false
    }
  }

handleSubmit = (values) => {
  console.log("Contact Form Values", values);
  this.setState({formSent: true})
}

  render() {
    console.log("PROPS CONTACT", this.props);
    const {fields: { name, email, credential, message }, handleSubmit, error, serverError } = this.props;
    const outerClassName = "col-xs-12 col-sm-12 col-md-12 padding-zero";
    const smmd12 = "col-xs-12 col-sm-12 col-md-12";
    const credentialOptions = [ 
      {label:'Athlete', value:'p', name:'credential'}, 
      {label:'Team Captain', value:'t', name:'credential'},
      {label:'League Organizer', value:'l', name:'credential'},
      {label:'Other', value:'o', name:'credential'}
    ];    

    const renderFormSuccess = () => {
      return(
        <div className="col-sm-12 col-md-12">
          <span className="form-title">Thank you for contacting us !</span>
        </div>
      );
    }

    const renderForm = () => {
      return(
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <span className="form-title">Please contact us regarding any questions, partnerships, beta registration, ideas, collaborations, etc.</span>
          </div>
          <form className="col-xs-12 col-sm-6 col-md-6 padding-15" onSubmit={handleSubmit(this.handleSubmit)}>
            <RenderInput field={name} outerClassName={outerClassName} labelClassName={smmd12} label={"Full Name"} inputClassName={smmd12} />
            <RenderInput field={email} outerClassName={outerClassName} labelClassName={smmd12} label={"Email"} inputClassName={smmd12} />
            <RenderSelect field={credential} outerClassName={outerClassName} value={credential.value} labelClassName={smmd12} label={"Tell us who you are"} options={credentialOptions} inputClassName={smmd12} {...credential}/>
            <RenderTextBox field={message} outerClassName={outerClassName} label={"Message"} rows={3} labelClassName={smmd12} textAreaClassName={smmd12} />
            {error && <p className="text-danger"><strong>{error}</strong></p>}
            <RenderButton className={smmd12} buttonClassName={"col-xs-4 col-sm-3 col-md-2"} label={"Send"} />
          </form>

        </div>
      );
    }

    return (
      <div className="container pop-genie">
        <div className="col-sm-12 col-md-12">
          {this.state.formSent ? (renderFormSuccess()) : (renderForm()) }
        </div>
      </div>
    )
  }
}

export default reduxForm({
form: 'Contact',
fields: ['name','email','credential', 'message'],
validate: ContactValidation,
forceUnregisterOnUnmount: true,
})(Contact)
