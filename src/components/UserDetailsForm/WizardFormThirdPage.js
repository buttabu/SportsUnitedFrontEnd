import React from 'react';
import { reduxForm } from 'redux-form';
import validate from './UserDetailsValidation';
import { RenderInput, RenderButton } from 'utils/renderform';

const WizardFormThirdPage = (props) => {
  const { handleSubmit, previousPage, fields: { firstName, lastName } } = props;
  const smmd_12 = "col-sm-12 col-md-12";

  return (
    <div>
      <h4 className="text-center">Almost there</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <RenderInput field={firstName} labelClassName={smmd_12} label={"First Name"} inputClassName={smmd_12} />
        <RenderInput field={lastName} labelClassName={smmd_12} label={"Last Name"} inputClassName={smmd_12} />
        <div className="col-sm-6 col-md-6">
          <button type="button" className="btn btn-default" onClick={previousPage}>Back</button>
        </div>
        <RenderButton className={"col-sm-6 col-md-6"} buttonClassName={"pull-right"} label={"Done"} />
      
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  fields: ['credential', 'username', 'firstName', 'lastName'],  
  // fields: ['firstName', 'lastName'],  
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: validate
})(WizardFormThirdPage)