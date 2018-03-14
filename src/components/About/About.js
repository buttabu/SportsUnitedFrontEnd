import React, {Component} from 'react';
import { Divider, Icon } from 'semantic-ui-react';

export default class About extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const sm12md12 = "col-sm-12 col-md-12";

    return (
      <div className="about-sporta">
        <Divider className={sm12md12} />
        <div className={sm12md12}>
          <span className="about-header">Let the game find you.</span>
          <div className="col-md-6">
            <div className="pic-box"></div>
          </div>
          <div className="col-md-6">
            <span className="inner-title">Find the nearest and best recreational league for you based on your preference</span>
            <div className={sm12md12}>
              <Icon name={"users"} size={"large"} />
              <span>Socialize and meet new people</span>
            </div>
            <div className={sm12md12}>
              <Icon name={"bar chart"} size={"large"} />
              <span>We'll keep track of your statistics</span>
            </div>
            <div className={sm12md12}>
              <Icon name={"soccer"} size={"large"} />
              <span>We'll keep track of your statistics</span>
            </div>
            

          </div>
        </div>
        
      </div>
    );
  }
}
