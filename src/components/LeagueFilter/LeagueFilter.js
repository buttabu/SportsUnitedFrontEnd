import React, { Component } from 'react';
import { LeagueCheckbox } from 'components';
import { Button } from 'semantic-ui-react';

export default class LeagueFilter extends Component {
constructor() {
  super();
  this.state = { leagueChecked: false, teamChecked: false, athleteChecked: false };
}
componentWillMount = () => {
   this.selectedCheckboxes = new Set(); }
handleChange = () => {
  this.setState({ leagueChecked: !this.state.leagueChecked, teamChecked: !this.state.teamChecked,
    athleteChecked: !this.state.athleteChecked }) 
}
handleFormSubmit = formSubmitEvent => {    
      formSubmitEvent.preventDefault();
       for (const checkbox of this.selectedCheckboxes) { console.log(checkbox, 'is selected.');}
       }
toggleCheckbox = label => {
      if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);} 
      else { this.selectedCheckboxes.add(label); }
    }
createCheckbox = label => ( <LeagueCheckbox label={label} handleCheckboxChange={this.toggleCheckbox} key={label} /> )
   createCheckboxes = (e) => ( e.map(this.createCheckbox) )

render() {
   const filterLeagues = [
        { title:'Field Size', info: ['100 Yards', '80 Yards','Other']},
        { title:'Goal Size', info: ['732m x 2.44m (Offical Size)','Other']}
      ];
      const filterTeams = [
        { title:'Team Size', info: ['11 vs 11', '8 vs 8','6 vs 6','4 vs 4']},
        { title:'Team Registeration Price', info: ['$ 14,000', '$ 10,000','$ 8,000','Other']},
      ];
      const filterDefaults = [
        { title:'Individual Registeration Price', info: ['$ 100', '$ 220','$ 300', 'Other']},
      ];
      {/* function for toggle checkboxes */} 
      const renderCheckboxes = (values) => {
        return(
        <div> 
            {values.map(value => <div key={value.title}>
              <h4 className="filter-objs">{value.title}</h4>
              {this.createCheckboxes(value.info)}
             </div>)
             }
        </div>
        )
      }

      {/* league content */}  
  const leagueContent = this.state.leagueChecked ? <div> { renderCheckboxes(filterLeagues) } </div> : <div> { renderCheckboxes(filterDefaults) } </div> ;
     {/* team content */}  
  const teamContent = this.state.teamChecked  ? <div> { renderCheckboxes(filterTeams) } </div> : null;

  return(
  <div>
   
     <h1><strong>Search</strong></h1> 
     
     <div>
      <h4 className="filter-objs">Category</h4>
       <br />        
      {/* league */}   
      <div>
        <input type="checkbox" onChange={this.handleChange}  leagueChecked={ this.state.leagueChecked } />
        <label>Leagues</label>
      </div>
      {/* teams */}
      <div>
        <input type="checkbox" onChange={this.handleChange} teamChecked={ this.state.teamChecked } />
        <label>Teams</label>
      </div>
      {/* athletes */}
      {/* <div>
        <input type="checkbox" onChange={this.handleChange} athleteChecked={ this.state.athleteChecked } />
        <label>Athletes</label>
      </div> */}
    </div>
      
    <form onSubmit={this.handleFormSubmit} >
    {leagueContent}
     <Button>Search</Button>
    </form>
  </div>
  );
}
}