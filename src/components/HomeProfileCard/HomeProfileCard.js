import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeProfileCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { auth } = this.props;
    const credential = auth.user.credential; 

    const renderCredential = () => {
      const cred = credential ==="A" ? "Athlete" : (credential === "T" ? "Team Captain" : (credential === "L" ? "League" : "Admin") )
      return(
        <span>{cred}</span>
      )
    }

    const renderCardRow = (label, outerClassName, innerClassName) => {
      return(
        <div className={outerClassName}>
          <span className={innerClassName}>{label}</span>            
        </div>
      )
    }

    const renderProfileCard = () => {
      const profileCard = (
        <div className="col-sm-12 col-md-12 pop-genie profile-card">
          <div className="temp-bar">
            <div className="temp-circle"></div>
          </div>
          
          <div className="col-sm-12 col-md-12 profile-card-details">
            {(credential === "A" || credential === "T") &&
              <div>
                <h3>{auth.user.first_name + " " + auth.user.last_name}</h3>
                <span className="text-muted">One-liner about athlete/team-captain</span>
              </div>
            }
            {credential === "L" &&
              <div>
                <h3>League Name</h3>
                <span>One-liner about League</span>
              </div>
            }
            
            {renderCredential()}
          </div>
          
          <div className="col-sm-12 col-md-12 profile-card-status">
            
            {credential === "A" &&
              <div>
                {renderCardRow("status", "col-sm-6 col-md-6 padding-zero", "text-muted")}
                {renderCardRow("playing", "col-sm-6 col-md-6 padding-zero", "text-success")}
                {renderCardRow("sport", "col-sm-6 col-md-6 padding-zero", "text-muted")}
                {renderCardRow("soccer", "col-sm-6 col-md-6 padding-zero", "text-success")}
              </div>
            }

            {credential === "L" &&
              <div>
                {renderCardRow("status", "col-sm-6 col-md-6 padding-zero", "text-muted")}
                {renderCardRow("Open Registration", "col-sm-6 col-md-6 padding-zero", "text-success")}
                {renderCardRow("sport", "col-sm-6 col-md-6 padding-zero", "text-muted")}
                {renderCardRow("soccer", "col-sm-6 col-md-6 padding-zero", "text-success")}
              </div>
            }

            {renderCardRow("New York, NY", "col-sm-12 col-md-12", "")}

          </div>

          <div className="col-sm-12 col-md-12 profile-card-views">
            <h2>7</h2>
            <span>profile views</span>
          </div>

        </div>)

      return(profileCard)
    }

    return (
      <div className="home-profile-card">
        {renderProfileCard()}
      </div>
    );
  }
}
