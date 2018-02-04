import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AccountPage } from 'components';
import { load } from '../../actions/Auth/actions';

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

    return (
      <div className="account">
        <Helmet title="Account" />

        <AccountPage auth={auth}/>
        
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
