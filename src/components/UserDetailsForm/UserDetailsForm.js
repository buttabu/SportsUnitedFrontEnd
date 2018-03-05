import React, { Component } from 'react';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import { hasValue } from '../../utils/utilfunctions';
import { SubmissionError } from 'redux-form';

export default class UserDetailsForm extends Component{
  constructor(props) {  
    super(props);
    this.state = {
      page: 1,
      error: ""
    }
  }

  nextPage = (e, values) => {
    e.preventDefault()
    console.log("\n\n FIRST PAGE values", values);    
    // this.props.actions.validateUsername(values.username);
    this.setState({ page: this.state.page + 1 }) // need to remove this line later
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    console.log("\nUserDetailsForm e:", e);
    // this.props.resetForm();
    // this.props.actions(values);
  }

  render(){
    console.log("\n\n PROPS IN USERDETAILSFORM", this.props);
    return (
      <div>
        {this.state.page === 1 && <WizardFormFirstPage nextPage={this.nextPage}/>}
        {this.state.page === 2 && <WizardFormSecondPage previousPage={this.previousPage} nextPage={this.nextPage}/>}
        {this.state.page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={this.handleSubmit} />}
      </div>
    )
  }
}








//   render(){
//     console.log(" === > PROPS IN UserDetailsForm", this.props);
//     console.log(" === > STATE IN UserDetailsForm", this.state);
    
//     // const { fields: { credential, firstname, lastname, username, email, password, confirmpassword }, handleSubmit, error} = this.props; 
//     const { fields: { credential, username, firstname, lastname }, handleSubmit, error, values} = this.props; 
//     const smmd_12 = "col-sm-12 col-md-12";
//     const credentialOptions = [ 
//       {label:'Athlete', value:'p', name:'credential'}, 
//       {label:'Team Captain', value:'t', name:'credential'},
//       {label:'League Organizer', value:'l', name:'credential'}
//     ];


//     const renderUserDetailsForm = () => {
//       return(
//         <div>
//           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//             <h4>Lets begin with some basic info . . .</h4>
//           </div>
//           <form onSubmit={handleSubmit((e)=> this.handleSubmit(e, values))}>
//             <RenderSelect field={credential} value={credential.value} options={credentialOptions} labelClassName={smmd_12} label={"Who are you?"} inputClassName={smmd_12} {...credential}/>
//             <RenderInput field={username} labelClassName={smmd_12} label={"username"} inputClassName={smmd_12} /> */}
            
//             {/*<RenderInput field={firstname} labelClassName={smmd_12} label={"First Name"} inputClassName={smmd_12} />
//             <RenderInput field={lastname} labelClassName={smmd_12} label={"Last Name"} inputClassName={smmd_12} /> */}
            
//             {error && <p className="text-danger"><strong>{error}</strong></p>}
//             <RenderButton className={smmd_12} buttonClassName={""} label={"Submit"} />
//           </form>
//         </div>
//       );
//     }

//     return(
//       <div className="register-form col-sm-12 col-md-6 col-md-offset-3 panel panel-default">
//         {renderUserDetailsForm() }
//       </div>
//     )
//   }
// }



// export default reduxForm({
//   form: 'UserDetailsForm',
//   // fields: ['credential', 'firstname', 'lastname', 'username', 'email', 'password', 'confirmpassword'],  
//   fields: ['credential', 'username', 'firstname', 'lastname'],  
//   validate: validate,
//   forceUnregisterOnUnmount: true,
//   // handleSubmit: this.handleSubmit
// })(UserDetailsForm)








