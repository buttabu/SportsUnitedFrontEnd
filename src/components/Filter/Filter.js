import React, { Component } from 'react';
import { Button, Checkbox, Search, Divider } from 'semantic-ui-react';
import { states, filterSet } from '../../utils/dummydata';
import { FilterBar } from 'components';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      category: { leagueChecked: true,  teamChecked: false,  athleteChecked: false },
      currentCategory: "league",
      isLoading: false,
      searchResult: [], 
      value: '' //initial value based on the location of the user
    };
  }

  handleCheckBox = (e, props) => {
    let current;
    let category = this.state.category;
    Object.keys(category).forEach( (key, index) => { // key: the name of the object key, index: the ordinal position of the key within the object 
      category[key] = false
    });
    
    switch(props.value){
      case 0:
        category.leagueChecked = true;
        current = "league";
        break;
      case 1:
        category.teamChecked = true;
        current = "team";
        break;
      case 2:
        category.athleteChecked = true;
        current = "athlete";
        break;
      default:
        break;
    }
    this.setState({category: category, currentCategory: current});
  }

  resetComponent = () => {
    this.setState({ isLoading: false, searchResult: [], value: "" })
  }

  handleResultSelect = (e, { result }) => { 
    this.setState({ value: result.name })
    //send server request here for leagues in the value location 
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({ isLoading: false, searchResult: _.filter(states, isMatch),
      })
    }, 500)
  }

  render() {
    const { category: {leagueChecked, teamChecked, athleteChecked}, searchResult, isLoading, value, currentCategory } = this.state;
    console.log("FILTER STATE", this.state);

    const renderResults = ({ name, abbreviation }) => {
      return [
        <div>
          {name && <div className='title'>{name}</div>}
          {abbreviation && <div className='description'>{abbreviation}</div>}
          {<div>4 cities covered</div>}
        </div>,
      ]
    }

    const renderCheckBox = (items) => {
      return (items.map( (item) => <Checkbox className="col-md-12 padding-zero" label={item} />))
    }

    const renderFilterSets = () => {
      const checkBoxes = filterSet.map( (cat) => {
        const setBoxes = [];
        if (cat.type === currentCategory){
          const boxes = cat.check_boxes.map( (checkbox) => {
            setBoxes.push(<div className="col-md-12 padding-zero filter-set"><h4>{checkbox.label}</h4>{renderCheckBox(checkbox.boxes)}</div>)
          })
        }
        return (setBoxes)
      })
      return(checkBoxes)
    }

    return(
      <div className="container league-filter">

        <div className="col-sm-2 col-md-2 pop-genie padding-15">
          
          <div className="col-md-12 padding-zero filter-search">
            <h4>Location</h4>
            <Search loading={isLoading} onResultSelect={this.handleResultSelect} onSearchChange={this.handleSearchChange} results={searchResult} value={value} resultRenderer={renderResults}/>
          </div>

          <div className="col-md-12 filter-category padding-zero">
            <h4>Select Category</h4>
            <Checkbox label="League" value={0} checked={leagueChecked} onClick={this.handleCheckBox} />
            <Checkbox label="Team" value={1} checked={teamChecked} onClick={this.handleCheckBox} />
            <Checkbox label="Athlete" value={2} checked={athleteChecked} onClick={this.handleCheckBox} />
          </div>

          {renderFilterSets()}
        </div>

        <div className="col-sm-10 col-md-10">
          <div className="col-md-12 pop-genie padding-15">
            <h4>Results</h4>
          </div>
        </div>

      </div>
    );
  }
}






