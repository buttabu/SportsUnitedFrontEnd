import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AthleteList } from 'components';
import { Photo } from 'components';
import { Link } from 'react-router';

class Athlete extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tempIMG = "https://static1.squarespace.com/static/55ea2481e4b0902fc052322c/55edff23e4b05e517b4fca88/55edffc2e4b03d3d6e7aa526/1441660886352/ENZ_4621-7.jpg?format=1500w";
    return (
      <div className="athlete">
        <Helmet title="Athletes" />

          <div className="athlete-header">
            <div className="athlete-message col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <span>Find the league that best fits your abilities</span>
            </div>
            
            <div className="a-header-image">
              <Photo className="athlete-photo" photoClassName="img-responsive" src={tempIMG} parentsHeight={""} />
            </div>

          </div>

          <div className="col-md-8">
            <AthleteList />
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

export default connect(mapStateToProps, mapDispatchToProps)(Athlete);
