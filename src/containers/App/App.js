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
import { load as loadAuth, logout } from '../../actions/Auth/actions';

import '../../helpers/app.css';
import '../../helpers/css/home.css';
import '../../helpers/css/league.css';
import '../../helpers/css/athlete.css';
import '../../helpers/css/team.css';
import '../../helpers/css/login.css';
import '../../helpers/css/register.css';

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
    console.log('\n\n ====> App.js NEXTPROPS: ', nextProps);
    if (!this.props.auth.user && nextProps.auth.user) {
      if (nextProps.auth.user.is_active || nextProps.auth.user.username){ 
        console.log(" -=-=-=-=- USER CONFIRMED EMAIL OR LOGGING IN -=-=-=-=- ");
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
    console.log('\n\n ====> App.js PROPS: ', this.props);
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

              <LinkContainer to="/leagues">
                <NavItem>Leagues</NavItem>
              </LinkContainer>

              <LinkContainer to="/teams">
                <NavItem>Teams</NavItem>
              </LinkContainer>

              <LinkContainer to="/athletes">
                <NavItem>Athletes</NavItem>
              </LinkContainer>

              {!user && (
                <LinkContainer to="/register">
                  <NavItem>Register</NavItem>
                </LinkContainer>
              )}

              {user && (
                <LinkContainer to="/logout">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    {' '}
                    Logout{' '}
                  </NavItem>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/account">
                  <NavItem>Account</NavItem>
                </LinkContainer>
              )}
            </Nav>
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
