import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { load } from '../../actions/Auth/actions';

class Supporters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let container = []

    const Cards = () => {
      return(
        <div>
        <div className="col-md-4 col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">
          </div>
          <div className="panel-body">
            <h4>League Organizer</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          </div>
        </div>
        </div>
       </div>
      )
    }

    for (let i=0; i < 6; i++){
      container.push(Cards())
    }
    
    const renderSupporters = () => {
      return(
        // {/* main div */}
        <div>
    
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        
        
        {/* top supporter information */}
        <div className="supporter-info">
        {/* left supporter information */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h4 className="text-center"><span>SUPPORTERS: 58</span></h4>
          </div>

          {/* right supporter information */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h4 className="text-center"><span>SUPPORTING: 51</span></h4>
          </div>
        </div>


        {/* bottom content */}
        <div className="col-sm-10 col-md-12 col-lg-12">
        
        {/* header */}
        <div className="bottom-header">
        <h4 className="text-center">Start Connecting With People</h4>
        </div>
        </div>

        {/* card */}
        <div className="col-xs-6 col-sm-12 col-md-12 col-lg-12 support-cards">
        {container}
         </div>
        {/* card finish */}

        </div>
      </div>
      )
    }

    return(
      <div className="container pop-genie">
      <div className="col-sm-12 col-md-12">
        {renderSupporters()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Supporters);
