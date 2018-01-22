import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register, verifyEmail } from '../../actions/Auth/actions';
import { RegisterForm } from 'components';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (this.props.params.token){
      // This means user has clicked on the confimation link on sent to his email.
      this.props.actions.verifyEmail(this.props.params.token);
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("IN REGISTER componentWillReceiveProps props", this.props);
    console.log("IN REGISTER componentWillReceiveProps nextProps", nextProps);
    // Must write errors that come from the server such as user already exists with that email or passoword is too small or common
  }

  render() {
    return (
      <div className="register">
        {this.props.params.token ?
        (<div className="col-sm-12 col-md-6 col-md-offset-3 panel panel-default">
          <h4>Making sure you are who you say you are</h4>
          {/*SHOW LOADER HERE*/}
        </div>) : (<RegisterForm {...this.props.actions}/>)
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ register, verifyEmail }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);











