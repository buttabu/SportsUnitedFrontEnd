import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AthleteCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="col-md-6">
        <div className="athlete-card panel panel-default">
          <div className="panel-heading">
            <div className="athlete-logo text-center">
                <img src="https://placehold.it/100" alt="athlete name" className="img-circle" />
              </div>
            <h3 className="panel-title"> athlete Name </h3>
          </div>
          <div className="panel-body">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <Link to="/athletes/profile/1">
              <a className="btn btn-primary">
                See More
              </a>
            </Link>
          </div>
        </div>
      </div>
      
    );
  }
}
