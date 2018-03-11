import React, { Component } from 'react';
import { Button, Divider, Transition, Search, Header} from 'semantic-ui-react';
import { SportaCard } from 'components';
import { reduxForm } from 'redux-form';
import { RenderInput, RenderButton } from 'utils/renderform';
import { source } from '../../utils/dummydata';
import { hasValue } from '../../utils/utilfunctions';
import validate from './CreateDivisionValidation';
import { Link } from 'react-router';
import _ from 'lodash';


class CreateDivisionForm extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false, 
      searchResults: [],
      value: "",
      selectedTeams: [],
      selectedAthletes: [],
      viewCurrentSelection: []
    }
  }

  resetComponent = () => {
    this.setState({ isLoading: false, searchResults: [], value: "" })
  }

  handleResultSelect = (e, props) => {
    // const selected = this.state.selectedTeams;
    // selected.push(props.result);
    // this.setState({ selectedTeams: selected }) 
  }

  handleFocus = (e, props) => {
    this.setState({ isLoading: false, searchResults: [], value: "" }) 
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({ isLoading: false, searchResults: _.filter(source, isMatch), })
    }, 500)
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

  handleCardPlacement = (e, data) => { // data = [false, 12, "athlete"]
    console.log("DATA INFO", data );
    if (data[0]){ // Add team from division
      console.log("+++ADDING TEAM FROM DIVISION");
    }
    else { // Remove athlete or team
      if (data[2] == "athlete"){
        let athletes = this.state.selectedAthletes;
        athletes = athletes.filter( (a) => a.sid !== data[1]);
        this.setState({ selectedAthletes: athletes});
      }
      else{
        let teams = this.state.selectedTeams;
        teams = teams.filter( (t) => t.sid !== data[1]);
        this.setState({ selectedTeams: teams}); 
      }
    }
  }

  handleSubmit = (e, values) => {
    // e.preventDefault();
  }

  render(){
    const { fields: { divisionName }, handleSubmit, error, serverError} = this.props;
    const { isLoading, value, searchResults, viewCurrentSelection, selectedTeams, selectedAthletes } = this.state;

    const mdsm_12 = "col-sm-12 col-md-12";

    const checkIfExistingValue = (obj, key, value) => {
      let result = false;
      obj.map( (item) => { if (item[key] === value) result = true });
      return result;
    }

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

    // ===============================
    // ====== DROP DOWN RESULTS ======
    // ===============================

    const renderResults = ({ title, sid, description, season, type }) => {
      const selected = { title: title, sid: sid, description: description, season: season, type: type}
      let invited = false;

      if (type === "athlete"){
        invited = checkIfExistingValue(this.state.selectedAthletes, "sid", sid);
      }
      else if (type === "team"){
        invited = checkIfExistingValue(this.state.selectedTeams, "sid", sid);
      }

      return [
        <div>
          {title && <div className='title'>{title}</div>}
          {description && <div className='description'>{description}</div>}
          {season && <div>{season}</div>}
          {type==="division" && <div className="chose-btn" onClick={(e) => this.handleSelected(e, selected)}>View Teams</div>}
    
          {!invited && type!=="division" && <div className="chose-btn" onClick={(e) => this.handleSelected(e, selected)}>Invite</div>}
          
        </div>,
        ]
    }

    // =========================
    // ====== SELECT TEAM ======
    // =========================

    const SelectTeam = () => {
      return(
        <div className="col-md-12 inner-pop-genie">
          <div className="col-md-12 padding-15">
            <h4>Select teams or athletes from anywhere in your league</h4>
            <Search loading={isLoading} onResultSelect={this.handleResultSelect} onFocus={this.handleFocus} onSearchChange={this.handleSearchChange} results={searchResults} value={value} resultRenderer={renderResults} {...this.props} />
          </div>

          {hasValue(viewCurrentSelection) && 
            <div className="col-md-12">
              <Divider />
              <h4>Currently Viewing [ {this.state.viewCurrentSelection[0].title} ]</h4>
            </div>
          }
          
          {hasValue(selectedTeams) && 
            <div className="col-md-12">
              <Divider />
              <h4>Selected Teams [{this.state.selectedTeams.length}]</h4>
              <SportaCard items={this.state.selectedTeams} handleCardPlacement={this.handleCardPlacement}/>
            </div>
          }

          {hasValue(selectedAthletes) && 
            <div className="col-md-12">
              <Divider />
              <h4>Selected Athletes [{this.state.selectedAthletes.length}]</h4>
              <SportaCard items={this.state.selectedAthletes} handleCardPlacement={this.handleCardPlacement}/>
            </div>
          }

        </div>
      )
    }

    // ====================
    // ====== RETURN ======
    // ====================

    return(
      <form className="col-md-12 pop-genie division-form" onSubmit={handleSubmit(this.handleSubmit)}>
        
        <RenderInput field={divisionName} outerClassName={"col-sm-12 col-md-9 inner-pop-genie form-field"} labelClassName={mdsm_12 + " text-label"} label={"Division Name"} inputClassName={mdsm_12} />
        {error && <p className="text-danger"><strong>{error}</strong></p>}

        {SelectTeam()}

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





          // <div className="col-md-12">
          //  <Header>State</Header>
          //  <pre>{JSON.stringify(this.state, null, 2)}</pre>
          //   {/*
          //   <Header>Options</Header>
          //   <pre>{JSON.stringify(source, null, 2)}</pre>*/}
          // </div>


