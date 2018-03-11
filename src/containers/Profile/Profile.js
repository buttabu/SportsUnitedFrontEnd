import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProfileCard } from 'components';
import { load } from '../../actions/Auth/actions';
import { UserDetails } from 'containers';
import { Message, Advertisement, List, Header } from 'semantic-ui-react'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    if (this.props.params.username){
      console.log("VERFY ATHLETE PROFILE USERNAME: " + this.props.params.username);
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
          (
          <div className="container">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
              <ProfileCard auth={auth} />
            </div>
          
            {/* Message */}
            <div className="hidden-xs col-sm-4 col-md-4 col-lg-4">
              <div className="pop-genie">
              <Message>
              <Message.Header>New Messages</Message.Header>
              <Message.List>
                <Message.Item>Next Match: Randall's Island 4:00 PM (Team A vs Team B)</Message.Item>
                <Message.Item>League Owners wants {auth.user.first_name} to be a Team Captain</Message.Item>
              </Message.List>
            </Message>
              </div>

              <div className="advertisement hidden-xs hidden-sm hidden-md col-lg-3">  
              <h3>Advertisement</h3>
              <Advertisement unit='medium rectangle' test='Ad' />
              </div> 
              
            </div>
            

          {/* Dashboard */}
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-8">
          <div className="pop-genie">
          <Header as='h1'>Dashboard</Header>
          <List>
          <Header as='h2'><List.Item>History</List.Item></Header> <List.Description size="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa risus, interdum ac mauris vel, posuere consectetur tortor. Donec ultrices sem non augue hendrerit, gravida imperdiet felis pulvinar. Nam et risus sapien. Pellentesque et sem efficitur, consequat tortor vel, mattis risus. Donec rhoncus lacinia enim, sit amet venenatis risus venenatis ut. Sed ultricies ipsum at porta convallis.</List.Description>
          <Header as='h2'><List.Item>Skills</List.Item></Header> <List.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa risus, interdum ac mauris vel, posuere consectetur tortor. Donec ultrices sem non augue hendrerit, gravida imperdiet felis pulvinar. Nam et risus sapien. Pellentesque et sem efficitur, consequat tortor vel, mattis risus. Donec rhoncus lacinia enim, sit amet venenatis risus venenatis ut. Sed ultricies ipsum at porta convallis.</List.Description>
          <Header as='h2'><List.Item>Connections</List.Item></Header><List.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa risus, interdum ac mauris vel, posuere consectetur tortor. Donec ultrices sem non augue hendrerit, gravida imperdiet felis pulvinar. Nam et risus sapien. Pellentesque et sem efficitur, consequat tortor vel, mattis risus. Donec rhoncus lacinia enim, sit amet venenatis risus venenatis ut. Sed ultricies ipsum at porta convallis.</List.Description>
          </List>
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