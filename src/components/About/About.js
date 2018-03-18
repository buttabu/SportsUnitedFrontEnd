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
        </div>

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

        <Divider className={sm12md12 + " padding-zero heavy-divider-2"}/>
        </div>

        
        <div className="container-fluid about-timeline">
          <div className="col-sm-12 col-md-8 timeline">
            <div className="containertime left">
              <div className="content">
                <h2>2018</h2>
                <h4>January | Research</h4>
                <p>Throughout this month our research was divided into two parts. We reasearched the right development tools and technology to create our application.
                We also performed customer resarch to better understand our business and potential users</p>
              </div>
            </div>
            <div className="containertime right">
              <div className="content">
                <h4>February | Validation</h4>
                <p>This month is a cycle consisting of validating our customer reasearch and pivoting our startup into the right direction</p>
              </div>
            </div>
            <div className="containertime left">
              <div className="content">
                <h4>March | Development</h4>
                <p>This month is a cycle consisting of validating our customer reasearch and pivoting our startup into the right direction</p>
              </div>
            </div>
            <div className="containertime right">
              <div className="content">
                <h4>April | Testing Subjects</h4>
                <p>As we continue development, we seek recreational sports leagues that will test the beta version of our product</p>
              </div>
            </div>
            <div className="containertime left">
              <div className="content">
                <h4>May - August | Beta</h4>
                <p>Our beta version is tested by athletes and league organizers. Feedback is received in order to fully understand our customers and
                the direction for Sporta</p>
              </div>
            </div>
            <div className="containertime right">
              <div className="content">
                <h4>September | Production</h4>
                <p>Sporta is in business and let the game find you.</p>
              </div>
            </div>
          </div>
        <Divider className={sm12md12 + " padding-zero heavy-divider-2"}/>
        </div>

        <div className="container-fluid sporta-team">
          <span className="about-header">Sporta Team.</span>

          <div className="col-sm-12 col-md-12">
            <div className="col-xs-6 col-sm-4 col-md-2 col-md-offset-1 bottom-15">
              <div className="abu-photo bottom-15"></div>
              <h4>Abu B</h4>
              <p>Finance</p>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2 bottom-15">
              <div className="jayz-photo bottom-15"></div>
              <h4>Jay Z</h4>
              <p>Tech</p>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2 bottom-15">
              <div className="enzo-photo bottom-15"></div>
              <h4>Enzo Ames</h4>
              <p>CEO</p>
            </div>
            <div className="col-xs-6 col-sm-4 col-sm-offset-2 col-md-2 col-md-offset-0 bottom-15">
              <div className="akbar-photo bottom-15"></div>
              <h4>Akbar Mirza</h4>
              <p>Design</p>
            </div>
            <div className="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-0 col-md-2 col-md-offset-0 bottom-15">
              <div className="kris-photo bottom-15"></div>
              <h4>Kris Sighn</h4>
              <p>Operations</p>
            </div>
          </div>

        </div>

        {/*<div className={sm12md12 + " about-price-detail"}>      
        </div> */}

        
      </div>
    );
  }
}
