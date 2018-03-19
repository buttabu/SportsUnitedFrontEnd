import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { RenderInput, RenderButton, RenderTextBox } from '../../utils/renderform';
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
  console.log("We have received your message and we will get in touch shortly. Thanks!");
  this.setState({formSent: true})
}

  render() {
    const {fields: { firstName, lastName, email, company, message }, handleSubmit, error, outerClassName, serverError } = this.props;
    const mdsm_12 = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
    const md ="col-md-4 col-lg-4";

    const renderFormSuccess = () => {
      return(
        <div className="col-sm-12 col-md-12 col-lg-12">
          <span className="form-title">We have received your message and we will get in touch shortly. Thanks!</span>
        </div>
      );
    }

    const renderForm = () => {
      return(
        <div>
        <h4 className="header">CONTACT SPORTA</h4>

        {/* <div className="col-sm-12 col-md-12 col-lg-12"> */}
        <form onSubmit={handleSubmit(this.handleSubmit)}>
        <RenderInput field={firstName} labelClassName={mdsm_12} label={"First Name"} inputClassName={md} />
        <RenderInput field={lastName} labelClassName={mdsm_12} label={"Last Name"} inputClassName={md} />
        <RenderInput field={email} labelClassName={mdsm_12} label={"Email"} inputClassName={md} />
        <RenderInput field={company} labelClassName={mdsm_12} label={"Company"} inputClassName={md} />
        <RenderInput field={message} labelClassName={mdsm_12} label={"Message"}placeholder={"Any message"} inputClassName={md} />

            {error && <p className="text-danger"> <strong>{errie}</strong></p>}

        <RenderButton className="col-xs-12 col-sm-12 col-md-9 col-lg-9 send-btn" buttonClassName={""} label={"Send"} />
        </form>
        {/* </div> */}
        </div>
      );
    }



    return (
      <div className="container pop-genie">
      <div className="col-sm-12 col-md-12 col-lg-12">
      {this.state.formSent ? (renderFormSuccess()) : (renderForm()) }
      </div>
      </div>
    )
  }
}
export default reduxForm({
form: 'ContactForm',
fields: ['firstName', 'lastName','email','company', 'message'],
validate: ContactValidation,
forceUnregisterOnUnmount: true,
})(Contact)
