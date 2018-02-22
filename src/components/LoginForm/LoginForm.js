import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import LoginValidation from './LoginValidation';
import { RenderInput, RenderButton } from 'utils/renderform';
import { Link } from 'react-router';
import { hasValue } from '../../utils/utilfunctions';

class LoginForm extends Component{
  constructor(props) {
    super(props);
  }

  handleSubmit = (values) =>{
    //values.preventDefault()
    this.props.loginSaveUser(values, "login");
    // console.log("LOGINFORM VALUES:", values);
  }

  render(){
    // console.log("PROPS IN LOGIN", this.props);
    const { fields: { email, password }, handleSubmit, error, outerClassName, serverError} = this.props; 
    const mdsm_12 = "col-sm-12 col-md-12";

    const handleServerError = () =>{
      let returnedError = "";
      if (hasValue(serverError)){
        try{ 
          const errorType = serverError.non_field_errors[0];
          returnedError = <p className="text-danger"><strong>{errorType}</strong></p>;
        }
        catch(error){
          //Do Nothing
        }
      }
      return returnedError;
    }

    return(
      <div className={outerClassName}>
        <h4 className="text-center">Log In</h4>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <RenderInput field={email} labelClassName={mdsm_12} label={"Email"} inputClassName={mdsm_12} />
          <RenderInput field={password} labelClassName={mdsm_12} label={"Password"} inputClassName={mdsm_12} type={"password"} />
          {error && <p className="text-danger"><strong>{error}</strong></p>}
          {handleServerError()}
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





