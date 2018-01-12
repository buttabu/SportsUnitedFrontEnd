import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../../actions/Auth/actions';
import { RegisterForm } from 'components';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="register">  
        <RegisterForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ register }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);











