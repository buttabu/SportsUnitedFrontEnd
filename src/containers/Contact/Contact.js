import React, { Component } from 'react';
import { reduxForm, reset } from 'redux-form';
import { RenderInput, RenderButton } from '../../utils/renderform';
import { hasValue } from '../../utils/utilfunctions';
import ContactValidation from './ContactValidation';

class Contact extends Component {
  constructor(props){
    super(props);
  }

handleSubmit = (values) => {
  console.log("Contact Form Values", values);
  this.props.resetForm();
  console.log("We have received your message and will get in touch shortly. Thanks!");
}

  render() {
    const {fields: { firstName, lastName, email, company, message }, handleSubmit, error, outerClassName, serverError } = this.props;
    const mdsm_12 = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
    const md ="col-md-4 col-lg-4";

    const handleServerError = () =>{
      let returnedError = "";
      if (hasValue(serverError)){
        try{
          const errorType = serverError.non_field_errors[0];
          returnedError = <p className="text-danger"><strong>{errorType}</strong></p>;
        }
        catch(error){

        }
      }
      return returnedError;
    }
    

    return (
      <div className="container pop-genie">
      <div className={outerClassName}>
      <h4 className="header">CONTACT SPORTA</h4>

      <div className="col-sm-12 col-md-12 col-lg-12">
      <form className="form" onSubmit={handleSubmit(this.handleSubmit)}>
      <RenderInput field={firstName} labelClassName={mdsm_12} label={"First Name"} inputClassName={md} />
      <RenderInput field={lastName} labelClassName={mdsm_12} label={"Last Name"} inputClassName={md} />
      <RenderInput field={email} labelClassName={mdsm_12} label={"Email"} inputClassName={md} />
      <RenderInput field={company} labelClassName={mdsm_12} label={"Company"} inputClassName={md} />
      <RenderInput field={message} labelClassName={mdsm_12} label={"Any Message"} inputClassName={md} />

          {error && <p className="text-danger"> <strong>{errie}</strong></p>}
          {handleServerError()}
      <RenderButton className="col-xs-12 col-sm-12 col-md-9 col-lg-9 send-btn" buttonClassName={""} label={"Send"} />
      </form>
      </div>
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


