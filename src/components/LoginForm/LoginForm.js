import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import LoginValidation from './LoginValidation';
import { RenderInput, RenderButton } from 'utils/renderform';
import { Link } from 'react-router';

class LoginForm extends Component{
  constructor(props) {
    super(props);
  }

  handleSubmit = (values) =>{
    //values.preventDefault()
    this.props.resetForm();
    //this.props.login(values);
    console.log("LOGINFORM VALUES:", values);
  }

  render(){
    const { fields: { email, password }, handleSubmit, error, outerClassName} = this.props; 
    const mdsm_12 = "col-sm-12 col-md-12";

    return(
      <div className={outerClassName}>
        <h4 className="text-center">Log In</h4>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <RenderInput field={email} labelClassName={mdsm_12} label={"Email"} inputClassName={mdsm_12} />
          <RenderInput field={password} labelClassName={mdsm_12} label={"Password"} inputClassName={mdsm_12} type={"password"} />
          {error && <p className="text-danger"><strong>{error}</strong></p>}
          <RenderButton className={mdsm_12} buttonClassName={""} label={"Submit"} />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password'],
  validate: LoginValidation,
  forceUnregisterOnUnmount: true
})(LoginForm)





