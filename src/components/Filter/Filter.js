import React, { Component } from 'react';
import { LeagueCheckbox } from 'components';
import { Button, Checkbox } from 'semantic-ui-react';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      category: { leagueChecked: false,  teamChecked: false,  athleteChecked: false } 
    };
  }

  handleCheckBox = (e, props) => {
    let category = this.state.category;
    Object.keys(category).forEach( (key, index) => { // key: the name of the object key, index: the ordinal position of the key within the object 
      category[key] = false
    });

    switch(props.value){
      case 0:
        category.leagueChecked = true
        break;
      case 1:
        category.teamChecked = true
        break;
      case 2:
        category.athleteChecked = true
        break;
      default:
        break;
    }
    this.setState({category: category})
  }

  render() {
    const { category: {leagueChecked, teamChecked, athleteChecked} } = this.state;

    return(
      <div className="container league-filter">

        <div className="col-md-2 pop-genie padding-15">
          <h4>Select Category</h4>
          <Checkbox checked={leagueChecked} onClick={this.handleCheckBox} className="col-md-12 padding-zero" label="League" value={0}/>
          <Checkbox checked={teamChecked} onClick={this.handleCheckBox} className="col-md-12 padding-zero" label="Team" value={1}/>
          <Checkbox checked={athleteChecked} onClick={this.handleCheckBox} className="col-md-12 padding-zero" label="Athlete" value={2}/>
        </div>

        <div className="col-md-10">
          <div className="col-md-12 pop-genie padding-15">
            <h4>Results</h4>
          </div>
        </div>

      </div>
    );
  }
}