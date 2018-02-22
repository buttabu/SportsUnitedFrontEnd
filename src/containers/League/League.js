import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LeagueList } from 'components';
import { Photo } from 'components';
import { Link } from 'react-router';
import { load } from '../../actions/Auth/actions';
import { LeagueFilter } from 'components';

class League extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(this.props.auth.isLogedOut){
      this.props.actions.load()
    }
  }

  render() {
    const tempIMG = "https://static1.squarespace.com/static/55ea2481e4b0902fc052322c/55edff23e4b05e517b4fca88/55edffa9e4b03d3d6e7aa499/1441660857702/ENZ_4585-2.jpg?format=1500w";
    return (
      <div className="league">
        <Helmet title="Leagues" />
          
          <div className="league-header">
            <div className="header-item col-xs-12 col-sm-5 col-md-5">
              <h2 className="title">Sporta | Leagues </h2>
              <h1 className="subtitle">A simple platform to find the best league for you</h1>
              <p >create an account and get in contact with leagues</p>
            
              <Link to="/register">
                <span className="league-register-btn">REGISTER WITH SPORTA</span>
              </Link>

            </div>

            <div className="header-image col-xs-12 col-sm-7 col-md-7">
              <Photo className="league-photo" photoClassName="l-photo" src={tempIMG} parentsHeight={""} />
            </div>

          </div>
          <div className="top-header">
            <h1>Top Leagues in <span className="top-header-name">Sporta!!!</span></h1>
          </div>

          <div className="col-md-3 col-lg-3">
            <LeagueFilter />
          </div>

          {/*<div className="col-md-8">
            <LeagueList />
          </div> */}

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

export default connect(mapStateToProps, mapDispatchToProps)(League);
