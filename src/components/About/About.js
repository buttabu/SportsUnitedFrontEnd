import React, {Component} from 'react';
import { Divider, Icon } from 'semantic-ui-react';
import { Photo } from 'components';

export default class About extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const sm12md12 = "col-sm-12 col-md-12";
    const flying_goalie = "https://static1.squarespace.com/static/55ea2481e4b0902fc052322c/55edff23e4b05e517b4fca88/55edffc2e4b03d3d6e7aa526/1441660886352/ENZ_4621-7.jpg?format=1000w"

    return (
      <div className="about-sporta">
        <div className="container-fuild">
          <span className="about-header">Let the game find you.</span>
          
          
          <Photo className="col-sm-6 col-md-6 about-photo" photoClassName="img-responsive golie-photo" src={flying_goalie} parentsHeight={""} />
          
          
          <div className="col-sm-6 col-md-6">
            <span className="inner-title">Find the nearest and best recreational league for you based on your preference</span>
            <p className="text-muted bottom-15">The features we provide for athletes and free of charge, we aim to build a community around sports. This idea originated from our love for sports
            and wanting everyone to fully enjoy the game. These features will aim to bring a sense of professionalism to the game, while keeping it very social
            and interactive</p>
            <div className={sm12md12 + " bottom-15 icon-text"}>
              <Icon name={"users"} size={"large"} />
              <span className="text-label">Socialize and meet new people</span>
            </div>
            
            <div className={sm12md12 + " bottom-15 icon-text"}>
              <Icon name={"bar chart"} size={"large"} />
              <span className="text-label">We'll keep track of your statistics, progress and achievements</span>
            </div>

            <div className={sm12md12 + " bottom-15 icon-text"}>
              <Icon name={"soccer"} size={"large"} />
              <span className="text-label">Play with other athletes that share the same skill level as you</span>
            </div>
            
          </div>



          <Divider className={sm12md12 + " padding-zero heavy-divider"}/>



          <div className="container">
            
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <span className="about-sub-header">Problems managing your league? Sporta has a solution for you.</span>
            </div>
            <div className="col-sm-12 col-md-12 bottom-15">
              <div className="manager-photo bottom-15"></div>
            </div>
            <div className="col-sm-6 col-md-6 margin-b15">
              <span className="inner-title">League under control.</span>
              <p className="text-muted">We aim to become the "one size fits all" application for recreational sport leagues. League managers spend a lot of time organizing 
              teams, booking fields, finding referees, and communicating to people - that they forget to market their league and attend to what their players actually need. Join Sporta
              to experience all our tools and spend more time enjoying the game and less time with logistics</p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 about-box">
              <div className="col-xs-6 col-sm-6 col-md-4 bottom-15 icon-text">
                <Icon name={"checkmark"} size={"large"} />
                <span className="text-label">Book Fields</span>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 bottom-15 icon-text">
                <Icon name={"checkmark"} size={"large"} />
                <span className="text-label">Find Referees</span>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 bottom-15 icon-text">
                <Icon name={"checkmark"} size={"large"} />
                <span className="text-label">Schedule Games</span>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 bottom-15 icon-text">
                <Icon name={"checkmark"} size={"large"} />
                <span className="text-label">Manage Teams</span>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 bottom-15 icon-text">
                <Icon name={"checkmark"} size={"large"} />
                <span className="text-label">Take Payments</span>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 bottom-15 icon-text">
                <Icon name={"checkmark"} size={"large"} />
                <span className="text-label">Track Stats</span>
              </div>
            </div>

          </div>

          <Divider className={sm12md12 + " padding-zero heavy-divider-2"}/>
          
          <div className={sm12md12 + " about-price-detail"}>

          </div>

        </div>



        
      </div>
    );
  }
}
