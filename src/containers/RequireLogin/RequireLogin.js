import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { setRedirectUrl } from '../../actions/Auth/actions';

class RequireLogin extends React.Component {
  componentDidMount() {
    const { auth, currentURL, dispatch } = this.props;

    if (!auth.isLogedIn) {
      // set the current url/path for future redirection
      // then redirect (we use a React Router method)
      dispatch(setRedirectUrl(currentURL));
      browserHistory.replace("/")
    }
    // else { 
    //   dispatch(setRedirectUrl(currentURL));
    //   browserHistory.replace("/account")
    //   }
    }

  render() {
    console.log("PROPS IN REQUIRELOGIN", this.props)
    const { auth } = this.props;
    
    if (auth.isLogedIn) {
      return this.props.children
    } else {
      console.log("RENDER ELSE RequireLogin")
      return null
    }
  }
}

// Grab a reference to the current URL use `ownProps` to find the URL.
function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    // isAuthenticated: state.auth.isAuthenticated,
    // isVerified: state.auth.isVerified,
    // basicRegistration: state.auth.basicRegistration,
    // isCompliant: state.auth.isCompliant,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(RequireLogin)
