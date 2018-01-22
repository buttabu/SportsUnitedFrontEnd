import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './RegisterValidation';
import { RenderInput, RenderSelect, RenderButton } from 'utils/renderform';
import { Link } from 'react-router';

class RegisterForm extends Component{
  constructor(props) {  
    super(props);
    this.state = {
      registrationWasSent: false
    }
  }

  handleSubmit = (e, values) =>{
    // e.preventDefault()
    console.log("\nRegisterForm VALUES:", values);
    this.props.resetForm();
    this.setState({registrationWasSent: true})
    this.props.register(values);
  }

  render(){
    console.log(" === > PROPS IN REGISTERFORM", this.props);
    console.log(" === > STATE IN REGISTERFORM", this.state);
    
    // const { fields: { credential, firstname, lastname, username, email, password, confirmpassword }, handleSubmit, error} = this.props; 
    const { fields: { email, password1, password2 }, handleSubmit, error, values} = this.props; 
    const mdsm_12 = "col-sm-12 col-md-12";
    // const credentialOptions = [ 
    //   {label:'Athlete', value:'p', name:'credential'}, 
    //   {label:'Team Captain', value:'t', name:'credential'},
    //   {label:'League Organizer', value:'l', name:'credential'}
    // ];

    const renderCheckEmail = () => {
      return(
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4>We sent you an email ! Please confirm your email to continue with the registration process</h4>
        </div>
      );
    }

    const renderInitialRegistration = () => {
      return(
        <div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h4>Please register your email to continue with your athlete, team, or league profile</h4>
          </div>
          <form onSubmit={handleSubmit((e)=> this.handleSubmit(e, values))}>
            {/*<RenderSelect field={credential} value={credential.value} options={credentialOptions} labelClassName={mdsm_12} label={"Who are you?"} inputClassName={mdsm_12} {...credential}/>
            <RenderInput field={firstname} labelClassName={mdsm_12} label={"First Name"} inputClassName={mdsm_12} />
            <RenderInput field={lastname} labelClassName={mdsm_12} label={"Last Name"} inputClassName={mdsm_12} /> 
            <RenderInput field={username} labelClassName={mdsm_12} label={"username"} inputClassName={mdsm_12} /> */}
            <RenderInput field={email} labelClassName={mdsm_12} label={"Email"} inputClassName={mdsm_12} />
            <RenderInput field={password1} labelClassName={mdsm_12} label={"Password"} inputClassName={mdsm_12} type={"password"} />
            <RenderInput field={password2} labelClassName={mdsm_12} label={"Confirm Password"} inputClassName={mdsm_12} type={"password"} />
            {error && <p className="text-danger"><strong>{error}</strong></p>}
            <RenderButton className={mdsm_12} buttonClassName={""} label={"Submit"} />
          </form>
        </div>
      );
    }

    return(
      <div className="register-form col-sm-12 col-md-6 col-md-offset-3 panel panel-default">
        {this.state.registrationWasSent ? (renderCheckEmail()) : (renderInitialRegistration()) }
      </div>
    )
  }
}


export default reduxForm({
  form: 'RegisterForm',
  // fields: ['credential', 'firstname', 'lastname', 'username', 'email', 'password', 'confirmpassword'],  
  fields: ['email', 'password1', 'password2'],  
  validate: validate,
  forceUnregisterOnUnmount: true,
  // handleSubmit: this.handleSubmit
})(RegisterForm)





