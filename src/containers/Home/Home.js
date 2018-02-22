import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HomePage, LoginForm, Loader } from 'components';
import { load, loginSaveUser } from '../../actions/Auth/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount(){
    if(this.props.auth.isLogedOut){
      this.props.actions.load();
    }
  }

  updateDimensions = () => {
    let winWidth = window.innerWidth; //let winWidth = $(window).width();
    let winHeight = window.innerHeight; //let winHeight = $(window).height();
    this.setState({width: winWidth, height: winHeight});
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    // console.log("PROPS IN HOME", this.props);
    return (
      <div className="home">
        <Helmet title="Home" />
        
        <HomePage height={this.state.height} width={this.state.width}/>

        {this.props.auth.isLogedOut &&
          <div>
            <div className="register-sporta">
              <Link to="/register">
                <span className="sporta-btn">REGISTER WITH SPORTA</span>
              </Link>
            </div>
            {this.props.auth.isFetching ? <Loader className="col-xs-12 col-sm-6 col-md-4 col-lg-4"/> :
              <LoginForm outerClassName={"col-xs-12 col-sm-6 col-md-4 col-lg-4"} serverError={this.props.auth.error} {...this.props.actions} />
            }
          </div>
        }

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loginSaveUser, load }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

            



