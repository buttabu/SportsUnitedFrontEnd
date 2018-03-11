import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProfileCard } from 'components';
import { load } from '../../actions/Auth/actions';
import { UserDetails } from 'containers';
import { Card, Icon, Message, } from 'semantic-ui-react'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if (this.props.params.username){
      alert("VERFY ATHLETE PROFILE ACTION");
    }
  }

  render() {
    const { auth } = this.props;
    const user = auth.user;
    const credential = auth.user.credential; 
    return (
      <div className="home">
        <Helmet title="Home"/>
        {user.credential ?
          (<div className="container-fluid">
            
            
            <div className="hidden-xs col-sm-3 col-md-8 col-lg-8">
              <ProfileCard auth={auth} />
            </div>
          
            {/* Message */}
            <div className="hidden-xs col-sm-3 col-md-4 col-lg-4">
              <div className="pop-genie">
              <Message>
              <Message.Header>New Messages</Message.Header>
              <Message.List>
                <Message.Item>Next Match: Randall's Island 4:00 PM (Team A vs Team B)</Message.Item>
                <Message.Item>League Owners wants {auth.user.first_name} to be a Team Captain</Message.Item>
              </Message.List>
            </Message>
              </div>
            </div>
        

          {/* Dashboard */}
          <div className="hidden-xs col-sm-3 col-md-8 col-lg-8">
          <div className="pop-genie">
          <h3 className="text-align">Your Dashboard</h3>
          </div>
          </div>


            {/* <div className="hidden-xs col-sm-3 col-md-10">
              <h3>{this.props.params.username}</h3>
                <span className="text-muted">2 liner about athlete/team-captain</span>
            </div> */}
          
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


//with semantic card
// import React from 'react'
// import { Card, Icon } from 'semantic-ui-react'

// const extra = (
//   <a>
//     <Icon name='user' />
//     16 Friends
//   </a>
// )

// const Profile = () => (
//   <Card
//     image='/assets/images/avatar/large/elliot.jpg'
//     header= 'Abu Butt'
//     meta='Friend'
//     description='Abu Butt is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//     extra={extra}
//   />
// )

// export default Profile