import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HomePage, HomeProfileCard } from 'components';
import { load } from '../../actions/Auth/actions';
import { UserDetails } from 'containers';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    // If the user has loaded from the server no need to send request anymore
    if (!this.props.auth.isLoaded){
      this.props.actions.load()  
    }
  }

  render() {
    // console.log("\n === > PROPS IN Home", this.props);
    const { auth } = this.props;
    const user = auth.user;

    return (
      <div className="home">
        <Helmet title="Home"/>
        {user.credential ?
          (<div className="container">
            
            <div className="hidden-xs col-sm-3 col-md-3 col-lg-2">
              <HomeProfileCard auth={auth} />
            </div>
            
            <div className="col-xs-12 col-sm-8 col-md-7 col-lg-7">
              <HomePage auth={auth}/>
            </div>

            <div className="hidden-xs hidden-sm col-md-2 col-lg-3">
              <div className="pop-genie some-content">
              </div>
            </div>
          
          </div>)

          : (<UserDetails />)
        }
      
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({load}, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
