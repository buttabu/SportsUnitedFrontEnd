import React, { Component } from 'react';
import { SelectTeams } from 'components';
import { reduxForm } from 'redux-form';
import { RenderInput, RenderButton } from 'utils/renderform';
import { hasValue, checkExistance } from '../../../utils/utilfunctions';
import validate from './CreateDivisionValidation';

class CreateDivisionForm extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      selectedTeams: [],
      selectedAthletes: [],
      viewCurrentSelection: []
    }
  }

  handleSelected = (e, selected) => {
    let temp = [];
    switch(selected.type){
      case "division":
        temp.push(selected);
        this.setState({ viewCurrentSelection: temp });
        break;
      case "team":
        temp = this.state.selectedTeams;
        temp.push(selected);
        this.setState({ selectedTeams: temp }); 
        break;
      case "athlete":
        temp = this.state.selectedAthletes;
        temp.push(selected);
        this.setState({ selectedAthletes: temp });
        break;
      default:
        break;
    }
  }

  handleCardPlacement = (e, data) => { // data = {inserted: bool, obj: object}
    e.preventDefault()
    if (data.inserted){ // Add team from division
      if (!checkExistance(this.state.selectedTeams, "sid", data.obj.sid)){
        const temp = this.state.selectedTeams;
        temp.push(data.obj)
        this.setState({selectedTeams: temp})
      }
    }
    else { // Remove athlete or team
      if (data.obj.type == "athlete"){
        let athletes = this.state.selectedAthletes;
        athletes = athletes.filter( (a) => a.sid !== data.obj.sid);
        this.setState({ selectedAthletes: athletes});
      }
      else{
        let teams = this.state.selectedTeams;
        teams = teams.filter( (t) => t.sid !== data.obj.sid);
        this.setState({ selectedTeams: teams}); 
      }
    }
  }

  handleSubmit = (e, values) => {
    // e.preventDefault();
    console.log("PROPS CREATEDIVISION FORM", this.props);
    console.log("STATE CREATEDIVISION FORM", this.state);
  }

  render(){
    const { fields: { divisionName }, handleSubmit, error, serverError} = this.props;
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

    // ====================
    // ====== RETURN ======
    // ====================

    return(
      <form className="col-md-12 pop-genie division-form" onSubmit={handleSubmit(this.handleSubmit)}>
        
        <RenderInput field={divisionName} outerClassName={"col-sm-12 col-md-9 padding-zero"} labelClassName={mdsm_12 + " text-label"} label={"Division Name"} inputClassName={mdsm_12} />
        {error && <p className="text-danger"><strong>{error}</strong></p>}

        <SelectTeams handleSelected={this.handleSelected} handleCardPlacement={this.handleCardPlacement} viewCurrentSelection={this.state.viewCurrentSelection} selectedTeams={this.state.selectedTeams} selectedAthletes={this.state.selectedAthletes}/>

        <RenderButton className={mdsm_12} buttonClassName={""} label={"Create"} />
        {handleServerError()}

      </form>
    )
  }
}

export default reduxForm({
  form: 'CreateDivisionForm',
  fields: ['divisionName'],
  validate: validate,
  forceUnregisterOnUnmount: false
})(CreateDivisionForm)





          // <div className="col-md-12">
          //  <Header>State</Header>
          //  <pre>{JSON.stringify(this.state, null, 2)}</pre>
          //   {/*
          //   <Header>Options</Header>
          //   <pre>{JSON.stringify(source, null, 2)}</pre>*/}
          // </div>


