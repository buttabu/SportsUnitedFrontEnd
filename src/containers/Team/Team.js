import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TeamList } from 'components';
import { Link } from 'react-router';
import { Photo } from 'components';

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tempIMG = "https://static1.squarespace.com/static/55ea2481e4b0902fc052322c/55edff23e4b05e517b4fca88/55ee0227e4b05778ab0635b4/1441661505864/ENZ_4914-4.jpg?format=1500w";
    return (
      <div className="team">
        <Helmet title="Teams" />
      
          <div className="league-header"> {/* THIS HAS LEAGUE CSS | TEMPORARY */}
            <div className="header-item col-xs-12 col-sm-5 col-md-5">
              <h2 className="title">Sporta | Teams </h2>
              <h1 className="subtitle">Join a team with just one click or register your team</h1>
              <p>create an account and get in contact with leagues</p>
            
              <Link to="/register">
                <span className="league-register-btn">REGISTER WITH SPORTA</span>
              </Link>
            </div>

            <div className="header-image col-xs-12 col-sm-7 col-md-7">
              <Photo className="team-photo" photoClassName="t-photo" src={tempIMG} parentsHeight={""} />
            </div>
          </div>

        <div className="col-md-8">
          <TeamList />
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

export default connect(mapStateToProps, mapDispatchToProps)(Team);
