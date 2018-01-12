import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LeagueTable, TeamList } from 'components';

class TeamProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-profile">
        <Helmet title="Team Name" />

        <div className="jumbotron">
          <h1>Hello, World</h1>
          <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>

      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ }, dispatch)
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamProfile);
