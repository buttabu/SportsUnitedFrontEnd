import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './CreateDivisionValidation';
import { RenderInput, RenderButton } from 'utils/renderform';
import { Link } from 'react-router';
import { hasValue } from '../../utils/utilfunctions';
import { Button, Divider, Transition } from 'semantic-ui-react';

class CreateDivisionForm extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      selectTeam: false,
      inviteTeam: false 
    }
  }

  toggleVisibility = (e, props) => {
    if (props.value == 0){
      this.setState({ selectTeam: !this.state.selectTeam });
    }
    else if (props.value == 1){
      this.setState({ inviteTeam: !this.state.inviteTeam }); 
    }
  }

  handleSubmit = (values) =>{
    //values.preventDefault()
  }

  render(){
    const { fields: { divisionName }, handleSubmit, error, serverError} = this.props;
    const { selectTeam, inviteTeam } = this.state 
    const mdsm_12 = "col-sm-12 col-md-12";

    // ==========================
    // ====== SERVER ERROR ======
    // ==========================

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

    // =========================
    // ====== SELECT TEAM ======
    // =========================

    const SelectTeam = () => {
      return(
        <div className="col-md-12 padding-zero">
          <div className="col-md-4 pop-genie padding-15">
            <span className="text-label">Select your teams</span>
            <Button content={selectTeam ? 'Hide' : 'Show'} onClick={this.toggleVisibility} icon="add" value={0}/>
          </div>

          <Transition visible={selectTeam} animation='slide down' duration={400}>
            <div className="col-md-12 pop-genie">SELECT TEAMS HERE</div>
          </Transition>
        </div>
      )
    }

    // =========================
    // ====== INVITE TEAM ======
    // =========================

    const InviteNewTeams = () => {
      return(
        <div className="col-md-12 padding-zero">
          <div className="col-md-4 pop-genie padding-15">
            <span className="text-label">Invite new teams</span>
            <Button content={inviteTeam ? 'Hide' : 'Show'} onClick={this.toggleVisibility} icon="add" value={1}/>
          </div>

          <Transition visible={inviteTeam} animation='slide down' duration={400}>
            <div className="col-md-12 pop-genie">INVITE TEAMS HERE</div>
          </Transition>
        </div>
      )
    }

    // ====================
    // ====== RETURN ======
    // ====================

    return(
      <form className="col-md-12 pop-genie division-form" onSubmit={handleSubmit(this.handleSubmit)}>
        
        <RenderInput field={divisionName} outerClassName={"col-sm-12 col-md-9 padding-zero pop-genie form-field"} labelClassName={mdsm_12 + " text-label"} label={"Division Name"} inputClassName={mdsm_12} />
        {error && <p className="text-danger"><strong>{error}</strong></p>}

        {SelectTeam()}
        {InviteNewTeams()}

        <RenderButton className={mdsm_12 + " padding-zero"} buttonClassName={""} label={"Create"} />
        {handleServerError()}
      </form>
    )
  }
}

export default reduxForm({
  form: 'CreateDivisionForm',
  fields: ['divisionName'],
  validate: validate,
  forceUnregisterOnUnmount: true
})(CreateDivisionForm)

