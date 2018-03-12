import React, { Component } from 'react';
import { Button, Divider, Transition, Search, Header} from 'semantic-ui-react';
import { SportaCard } from 'components';
import { reduxForm } from 'redux-form';
import { RenderInput, RenderButton } from 'utils/renderform';
import { source } from '../../../utils/dummydata';
import { hasValue, checkExistance } from '../../../utils/utilfunctions';
import validate from './CreateDivisionValidation';
import { Link } from 'react-router';
import _ from 'lodash';


export default class SelectTeams extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false, 
      searchResults: [],
      value: "",
    }
  }

  resetComponent = () => {
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

  render(){
    const { handleSelected, handleCardPlacement, viewCurrentSelection, selectedTeams, selectedAthletes } = this.props;
    const { isLoading, value, searchResults, } = this.state;

    // ===============================
    // ====== DROP DOWN RESULTS ======
    // ===============================

    const renderResults = ({ title, sid, description, season, type, teams=null }) => {
      const selected = { title: title, sid: sid, description: description, season: season, type: type, teams: teams}
      let invited = false;

      if (type === "athlete"){
        invited = checkExistance(selectedAthletes, "sid", sid);
      }
      else if (type === "team"){
        invited = checkExistance(selectedTeams, "sid", sid);
      }

      return [
        <div>
          {title && <div className='title'>{title}</div>}
          {description && <div className='description'>{description}</div>}
          {season && <div>{season}</div>}
          {type==="division" && <div className="chose-btn" onClick={(e) => this.props.handleSelected(e, selected)}>View Teams</div>}
    
          {!invited && type!=="division" && <div className="chose-btn" onClick={(e) => this.props.handleSelected(e, selected)}>Invite</div>}
          
        </div>,
      ]
    }

    // ====================
    // ====== RETURN ======
    // ====================

    return(
        <div className="col-md-12 padding-zero">
          <div className="col-md-12 padding-15">
            <h4>Select teams or athletes from anywhere in your league</h4>
            <Search loading={isLoading} onSearchChange={this.handleSearchChange} results={searchResults} value={value} resultRenderer={renderResults}  />
          </div>

          {hasValue(viewCurrentSelection) && 
            <div className="col-md-12">
              <h4>Currently Viewing [ {viewCurrentSelection[0].title} ]</h4>
              <SportaCard items={{type: "division", selection: viewCurrentSelection[0].teams}} handleCardPlacement={handleCardPlacement} />
            </div>
          }
          
          {hasValue(selectedTeams) && 
            <div className="col-md-12">
              <Divider />
              <Divider />
              <h4>Selected Teams [{selectedTeams.length}]</h4>
              <SportaCard items={{type: "team", selection: selectedTeams}} handleCardPlacement={handleCardPlacement}/>
            </div>
          }

          {hasValue(selectedAthletes) && 
            <div className="col-md-12">
              <Divider />
              <h4>Selected Athletes [{selectedAthletes.length}]</h4>
              <SportaCard items={{type: "athlete", selection: selectedAthletes}} handleCardPlacement={handleCardPlacement}/>
            </div>
          }
        </div>
      )
  }
}






          // <div className="col-md-12">
          //  <Header>State</Header>
          //  <pre>{JSON.stringify(this.state, null, 2)}</pre>
          //   {/*
          //   <Header>Options</Header>
          //   <pre>{JSON.stringify(source, null, 2)}</pre>*/}
          // </div>


