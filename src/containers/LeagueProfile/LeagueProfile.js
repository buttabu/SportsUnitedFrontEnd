import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LeagueTable, TeamList } from 'components';

class LeagueProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="league-profile container">
        <Helmet title="League Name" />
        <div className="row">
          <div className="col-md-8">
            {/* League Header
                - includes league name
                - includes league profile
                - includes quick bio
                - includes league join button  */}
            
            {/* League Rankings Here */}
            <LeagueTable />

            {/* Upcoming Matches */}
            <TeamList />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeagueProfile);
