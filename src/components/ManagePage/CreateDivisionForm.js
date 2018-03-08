import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './CreateDivisionValidation';
import { RenderInput, RenderButton } from 'utils/renderform';
import { Link } from 'react-router';
import { hasValue } from '../../utils/utilfunctions';
import { Button, Divider, Transition } from 'semantic-ui-react';
import { Search, Header } from 'semantic-ui-react';
import { source } from '../../utils/dummydata';
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
      viewCurrentSelection: ""
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

  handleSubmit = (e, values) => {
    // e.preventDefault();
  }

  handleViewCurrentSelection = (e, selected) => {
    this.setState({ viewCurrentSelection: selected })
  }

  handleInvited = (e, selected) => {
    if (selected.type === "team"){
      const temp = this.state.selectedTeams;
      temp.push(selected);
      this.setState({ selectedTeams: temp }) 
    }
    else{
      const temp = this.state.selectedAthletes;
      temp.push(selected);
      this.setState({ selectedAthletes: temp }) 
    }
    
  }

  render(){
    const { fields: { divisionName }, handleSubmit, error, serverError} = this.props;
    const { isLoading, value, searchResults, viewCurrentSelection, selectedTeams, selectedAthletes } = this.state;

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

    // ===============================
    // ====== DROP DOWN RESULTS ======
    // ===============================

    const renderResults = ({ title, sid, description, season, type }) => {
      const selected = { title: title, sid: sid, description: description, season: season, type: type } 
      return [
        <div>
          {title && <div className='title'>{title}</div>}
          {description && <div className='description'>{description}</div>}
          {season && <div>{season}</div>}
          {type==="division" && <div className="chose-btn" onClick={(e) => this.handleViewCurrentSelection(e, selected)}>View Teams</div>}
          {type!=="division" && <div className="chose-btn" onClick={(e) => this.handleInvited(e, selected)}>Invite</div>}
        </div>,
        ]
    }

    // =========================
    // ====== SELECT TEAM ======
    // =========================

    const SelectTeam = () => {
      return(
        <div className="col-md-12 pop-genie padding-zero">
          <div className="col-md-12 padding-15">
            <span className="text-label"> Select teams from anywhere in your league </span>
            <Search loading={isLoading} onResultSelect={this.handleResultSelect} onFocus={this.handleFocus} onSearchChange={this.handleSearchChange} results={searchResults} value={value} resultRenderer={renderResults} {...this.props} />
          </div>

          <div className="col-md-12">
            <span className="text-label">Currently Viewing</span>
            {hasValue(viewCurrentSelection) && 
              <pre>{JSON.stringify(this.state.viewCurrentSelection, null, 2)}</pre>
            }
          </div>

          <div className="col-md-12">
            <span className="text-label">Selected Teams</span>
            {hasValue(selectedTeams) && 
              <pre>{JSON.stringify(this.state.selectedTeams, null, 2)}</pre>
            }
          </div>

          <div className="col-md-12">
            <span className="text-label">Selected Athletes</span>
            {hasValue(selectedAthletes) && 
              <pre>{JSON.stringify(this.state.selectedAthletes, null, 2)}</pre>
            }
          </div>

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
          </div>

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










          // <div className="col-md-12">
          //  <Header>State</Header>
          //  <pre>{JSON.stringify(this.state, null, 2)}</pre>
          //   {/*
          //   <Header>Options</Header>
          //   <pre>{JSON.stringify(source, null, 2)}</pre>*/}
          // </div>


