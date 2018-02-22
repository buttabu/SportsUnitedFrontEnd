import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserDetailsForm, AccountPage } from 'components';

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("\n === > PROPS IN USERDETAILS", this.props);
    const { auth } = this.props;
    const user = auth.user

    return (
      <div className="container user-details">
        <Helmet title="Account-Details" />
        <div className="col-sm-12 col-md-6 col-md-offset-3 panel panel-default">
          <UserDetailsForm auth={this.props.auth} {...this.props.actions}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
