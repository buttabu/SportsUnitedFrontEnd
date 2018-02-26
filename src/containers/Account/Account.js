import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AccountPage } from 'components';
import { load } from '../../actions/Auth/actions';
import { UserDetails } from 'containers';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    // If the user has loaded from the server no need to send request anymore
    if (!this.props.auth.isLoaded){
      this.props.actions.load()  
    }
  }

  render() {
    // console.log("\n === > PROPS IN ACCOUNT", this.props);
    const { auth } = this.props;
    const user = auth.user;

    const renderCredential = () => {
      const credential = auth.user.credential; 
      const cred = credential==="A" ? "Athlete" : (credential === "T" ? "Team Captain" : (credential === "L" ? "League Organizer" : "Admin") )
      return(
        <span>{cred}</span>
      )
    }

    const renderProfileCard = () => {
      return(
        <div className="col-sm-12 col-md-12 pop-genie profile-card">
          <div className="temp-bar">
            <div className="temp-circle">
            </div>
          </div>
          
          <div className="col-sm-12 col-md-12 profile-card-details">
            <h3>{auth.user.first_name + " " + auth.user.last_name}</h3>
            <span>Loves all sports</span>
            {renderCredential()}
          </div>
          
          <div className="col-sm-12 col-md-12 profile-card-status">
            <div className="col-sm-6 col-md-6">
              <span className="text-muted">status</span>            
            </div>
            <div className="col-sm-6 col-md-6">
              <span className="text-success">playing</span>            
            </div>
            
            <div className="col-sm-6 col-md-6">
              <span className="text-muted">sport</span>
            </div>

            <div className="col-sm-6 col-md-6">
              <span className="text-success">soccer</span>
            </div>

            <div className="col-sm-12 col-md-12">
              <span>New York, NY</span>
            </div>

          </div>

          <div className="col-sm-12 col-md-12 profile-card-views">
            <h2>7</h2>
            <span>profile views</span>
          </div>
        </div>
      )
    }

    return (
      <div className="account">
        <Helmet title="Account"/>
        {user.credential ?
          (<div className="container-fluid">
            <div className="col-sm-2 col-md-2">
              {renderProfileCard()}
            </div>
            
            <div className="col-sm-6 col-md-6">
              <AccountPage auth={auth}/>
            </div>

            <div className="col-sm-3 col-md-3">
              {/* SOME CONTENT HERE SUCH AS ADS, EVENTS, ETC*/}
            </div>

          </div>)
          : (<UserDetails />)
        }
      
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({load}, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
