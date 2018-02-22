import React, { Component } from 'react';
import { LeagueCheckbox } from 'components';
import { Button } from 'semantic-ui-react';


export default class LeagueFilter extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }
  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }
  createCheckbox = label => (
    <LeagueCheckbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )
  createCheckboxes = (e) => (
    e.map(this.createCheckbox)
   
  )
  render() {
    const filterObjs = [
    { title:'Field Size', info: ['100 Yards', '80 Yards','Other']},
    { title:'Team Size', info: ['11 vs 11', '8 vs 8','6 vs 6','4 vs 4']},
    { title:'Individual Registeration Price', info: ['$ 100', '$ 220','$ 300', 'Other']},
    { title:'Team Registeration Price', info: ['$ 14,000', '$ 10,000','$ 8,000','Other']},
    { title:'Goal Size', info: ['732m x 2.44m (Offical Size)','Other']}
  ];
  return (
    <div>
      <div className="col-md-12">
        <h1><strong>Search</strong></h1>    
          <form onSubmit={this.handleFormSubmit} >
            {filterObjs.map(filterObj => <div key={filterObj.title}>
            <h4 className="filter-objs">{filterObj.title}</h4>
            {this.createCheckboxes(filterObj.info)}
            </div>)
            }
                <Button>Search</Button>
          </form>          
      </div>
    </div>
  );
  }
}