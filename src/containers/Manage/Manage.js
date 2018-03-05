import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ManagePage } from 'components';
import { load } from '../../actions/Auth/actions';

class Manage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { auth } = this.props;
    const user = auth.user;

    return (
      <div className="mange">
        <Helmet title="Manage"/>
          <div className="container">
            
            <div className="col-md-12 col-lg-12 manage-menu">
              <ManagePage auth={this.props.auth} />
            </div>
            
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ load }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
