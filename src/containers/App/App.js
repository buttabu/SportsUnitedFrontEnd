import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import config from 'config';
import { asyncConnect } from 'redux-connect';

import { isLoaded as isAuthLoaded } from 'redux/modules/auth';
import { load as loadAuth, logoutRemoveUser as logout } from '../../actions/Auth/actions';

import { AdvanceSettings } from 'components';

import '../../helpers/app.css';
import '../../helpers/css/home.css';
import '../../helpers/css/explore.css';
import '../../helpers/css/athlete.css';
import '../../helpers/css/team.css';
import '../../helpers/css/login.css';
import '../../helpers/css/register.css';
import '../../helpers/css/loader.css';
import '../../helpers/css/account.css';
import '../../helpers/css/advance_settings.css';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    return Promise.all(promises);
  }
}])

@connect(
  (state, ownProps) => ({
    auth: state.auth,
    params: ownProps.params,
    location: ownProps.location
  }),
  { logout, pushState: push })

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    auth: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    console.log("====> App.js NEXTPROPS: ", nextProps);
    const isLoggingIn = nextProps.auth.user ? (nextProps.auth.user.request_login && !nextProps.auth.user.request_load) : false;
    const isLoading = nextProps.auth.user ? (!nextProps.auth.user.request_login && nextProps.auth.user.request_load): false;

    if (!this.props.auth.user && nextProps.auth.user) {
      if (isLoggingIn){
        console.log(" -=-=-=-=- LOGGING IN -=-=-=-=- ");
        this.props.pushState('/account'); 
      }
      else if (isLoading){
        console.log(" -=-=-=-=- LOADING USER DETAILS -=-=-=-=- ");
      }
      else if (nextProps.auth.user.new_register){
        console.log(" -=-=-=-=- NEWLY REGISTERED -=-=-=-=- ");
        this.props.pushState('/account');  
      }
    }
    else if (this.props.auth.user && !nextProps.auth.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    console.log("====> App.js PROPS: ", this.props);
    const { user } = this.props.auth;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: 'black' }}>
                <div className={styles.brand} /> {/*  {styles.brand} */}
                <span>SPORTA</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

           <Navbar.Collapse>
            <Nav navbar>

              <LinkContainer to="/explore">
                <NavItem>Explore</NavItem>
              </LinkContainer>

              {!user && (
                <LinkContainer to="/register">
                  <NavItem>Register</NavItem>
                </LinkContainer>
              )}

              {/*{user && (
                <LinkContainer to="/logout">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    {' '}
                    Logout{' '}
                  </NavItem>
                </LinkContainer>
              )}*/}

              {user && (
                <LinkContainer to="/account">
                  <NavItem>Account</NavItem>
                </LinkContainer>
              )}
            </Nav>
            {user && (
              <AdvanceSettings {...this.props}/>
            )}
          </Navbar.Collapse>

        </Navbar>

        <div className="app-content"> {/* {styles.appContent} */}
          {this.props.children}
        </div>

        {/*
        <div className="well text-center">
          FOOTER
        </div>
        */}


      </div>
    );
  }
}
