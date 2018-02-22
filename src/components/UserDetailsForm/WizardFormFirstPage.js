import React from 'react';
import { reduxForm } from 'redux-form';
import validate from './UserDetailsValidation';
import { RenderSelect, RenderButton } from 'utils/renderform';

const WizardFormFirstPage = (props) => {
  const { nextPage, handleSubmit, fields: { credential } } = props;
  const smmd_12 = "col-sm-12 col-md-12";
  const credentialOptions = [ 
    {label:'Athlete', value:'a', name:'credential'}, 
    {label:'Team Captain', value:'t', name:'credential'},
    {label:'League Organizer', value:'l', name:'credential'}
  ];

  return (
    <div>
      <h4 className="text-center">We need a few more details before we get you started</h4>
      <form onSubmit={(e) => nextPage(e, props.values)}>
        <RenderSelect field={credential} value={credential.value} options={credentialOptions} labelClassName={smmd_12} label={"Who are you?"} inputClassName={smmd_12} {...credential}/>
        
        <RenderButton className={smmd_12} buttonClassName={"pull-right"} label={"continue"} />
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  fields: ['credential', 'username', 'firstName', 'lastName'],  
  // fields: ['credential', 'username'],  
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: validate
})(WizardFormFirstPage)