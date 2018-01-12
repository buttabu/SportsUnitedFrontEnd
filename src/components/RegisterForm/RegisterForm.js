import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './RegisterValidation';
import { RenderInput, RenderSelect, RenderButton } from 'utils/renderform';
import { Link } from 'react-router';

class RegisterForm extends Component{
  constructor(props) {  
    super(props);
  }

  handleSubmit = (values) =>{
    //values.preventDefault()
    console.log("RegisterForm VALUES:", values);
    this.props.resetForm();
    //this.props.register(values);
  }

  render(){
    const { fields: { credential, firstname, lastname, username, email, password, confirmpassword }, handleSubmit, error} = this.props; 
    const mdsm_12 = "col-sm-12 col-md-12";
    const credentialOptions = [ 
      {label:'Athlete', value:'p', name:'credential'}, 
      {label:'Team Captain', value:'t', name:'credential'},
      {label:'League Organizer', value:'l', name:'credential'}
    ];

    return(
      <div className="register-form col-sm-12 col-md-6 col-md-offset-3">
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <RenderSelect field={credential} value={credential.value} options={credentialOptions} labelClassName={mdsm_12} label={"Who are you?"} inputClassName={mdsm_12} {...credential}/>
          <RenderInput field={firstname} labelClassName={mdsm_12} label={"First Name"} inputClassName={mdsm_12} />
          <RenderInput field={lastname} labelClassName={mdsm_12} label={"Last Name"} inputClassName={mdsm_12} />
          <RenderInput field={username} labelClassName={mdsm_12} label={"username"} inputClassName={mdsm_12} />
          <RenderInput field={email} labelClassName={mdsm_12} label={"Email"} inputClassName={mdsm_12} />
          <RenderInput field={password} labelClassName={mdsm_12} label={"Password"} inputClassName={mdsm_12} type={"password"} />
          <RenderInput field={confirmpassword} labelClassName={mdsm_12} label={"Confirm Password"} inputClassName={mdsm_12} type={"password"} />
          {error && <p className="text-danger"><strong>{error}</strong></p>}
          <RenderButton className={mdsm_12} buttonClassName={""} label={"Submit"} />
        </form>
      </div>
    )
  }
}


export default reduxForm({
  form: 'RegisterForm',
  fields: ['credential', 'firstname', 'lastname', 'username', 'email', 'password', 'confirmpassword'],  
  validate: validate,
  forceUnregisterOnUnmount: true,
})(RegisterForm)





