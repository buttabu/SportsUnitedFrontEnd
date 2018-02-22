import React from 'react';
import { reduxForm } from 'redux-form';
import validate from './UserDetailsValidation';
import { RenderInput, RenderButton } from 'utils/renderform';

const WizardFormSecondPage = (props) => {
  const { handleSubmit, nextPage, previousPage, fields: { username } } = props;
  const smmd_12 = "col-sm-12 col-md-12";

  return (
    <div>
      <h4 className="text-center">Pick an awesome username</h4>
      <form onSubmit={(e) => nextPage(e, props.values)}>
        
        <RenderInput field={username} labelClassName={smmd_12} label={"username"} inputClassName={smmd_12} />
        
        <div className="col-sm-4 col-md-4">
          <button type="button" className="btn btn-default" onClick={previousPage}>Back</button>
        </div>

        <div className="col-sm-4 col-md-4">
          <button type="button" className="btn btn-default" onClick={(e)=> nextPage(e, null)}>Decide Later</button>
        </div>
        
        <RenderButton className={"col-sm-4 col-md-4"} buttonClassName={""} label={"verify and continue"} />
      
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
})(WizardFormSecondPage)