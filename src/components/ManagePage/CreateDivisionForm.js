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
      selectTeam: false,
      inviteTeam: false,
      isLoading: false, 
      results: [],
      value: ''
    }
  }

  resetComponent = () => {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleResultSelect = (e, { result }) => { 
    this.setState({ value: result.title }) 
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({ isLoading: false, results: _.filter(source, isMatch), })
    }, 500)
  }

  toggleVisibility = (e, props) => {
    if (props.value == 0){
      this.setState({ selectTeam: !this.state.selectTeam });
    }
    else if (props.value == 1){
      this.setState({ inviteTeam: !this.state.inviteTeam }); 
    }
  }

  handleSubmit = (e, values) => {
    e.preventDefault();
  }

  render(){
    const { fields: { divisionName }, handleSubmit, error, serverError} = this.props;
    const { selectTeam, inviteTeam } = this.state;
    const { isLoading, value, results } = this.state;

    const mdsm_12 = "col-sm-12 col-md-12";


    const renderResults = ({ title, description, season }) => [
      <div key='content' className='content'>
        {title && <div className='title'>{title}</div>}
        {description && <div className='description'>{description}</div>}
        {season && <div>{season}</div>}
      </div>,
    ]

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
        <div className="col-md-12 pop-genie padding-zero">
          <div className="col-md-12 padding-15">
            <span className="text-label"> Select teams from anywhere in your league </span>
            <Search loading={isLoading} onResultSelect={this.handleResultSelect} onSearchChange={this.handleSearchChange} results={results} value={value} resultRenderer={renderResults} {...this.props} />
          </div>

          
          <div className="col-md-12">
            <Header>State</Header>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
            {/*
            <Header>Options</Header>
            <pre>{JSON.stringify(source, null, 2)}</pre>*/}
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









// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))

// export default class SearchExampleStandard extends Component {
//   componentWillMount() {
//     this.resetComponent()
//   }

//   resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

//   handleResultSelect = (e, { result }) => this.setState({ value: result.title })

//   handleSearchChange = (e, { value }) => {
//     this.setState({ isLoading: true, value })

//     setTimeout(() => {
//       if (this.state.value.length < 1) return this.resetComponent()

//       const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
//       const isMatch = result => re.test(result.title)

//       this.setState({
//         isLoading: false,
//         results: _.filter(source, isMatch),
//       })
//     }, 500)
//   }

//   render() {
//     const { isLoading, value, results } = this.state

//     return (
//       <Grid>
//         <Grid.Column width={8}>
//           <Search
//             loading={isLoading}
//             onResultSelect={this.handleResultSelect}
//             onSearchChange={this.handleSearchChange}
//             results={results}
//             value={value}
//             {...this.props}
//           />
//         </Grid.Column>
//         <Grid.Column width={8}>
//           <Header>State</Header>
//           <pre>{JSON.stringify(this.state, null, 2)}</pre>
//           <Header>Options</Header>
//           <pre>{JSON.stringify(source, null, 2)}</pre>
//         </Grid.Column>
//       </Grid>
//     )
//   }
// }
