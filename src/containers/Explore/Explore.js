import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { load } from '../../actions/Auth/actions';
import { Photo, Filter, Loader } from 'components';

class Explore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tempIMG = "https://static1.squarespace.com/static/55ea2481e4b0902fc052322c/55edff23e4b05e517b4fca88/55edffa9e4b03d3d6e7aa499/1441660857702/ENZ_4585-2.jpg?format=1500w";

    const renderExplore = () => {
      return(
        <div>
          <div className="explore-header">
            <div className="header-item col-xs-12 col-sm-5 col-md-5">
              <h2 className="title">Sporta | Explore </h2>
              <h1 className="subtitle">A simple platform to find the best league for you</h1>
              {this.props.auth.isLogedOut &&
                <div>
                  <p>create an account and get in contact with any leagues, teams or athletes</p>
                  <Link to="/register">
                    <span className="explore-register-btn">REGISTER WITH SPORTA</span>
                  </Link>
                </div>
              }
            </div>

            <div className="header-image col-xs-12 col-sm-7 col-md-7">
              <Photo className="explore-photo" photoClassName="e-photo" src={tempIMG} parentsHeight={""} />
            </div>
          </div>
        <Filter />
      </div>
      )
    }

    return(
      <div className="Explore">
        <Helmet title="Explore" />
        {this.props.auth.isFetching ? <Loader /> : renderExplore()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
