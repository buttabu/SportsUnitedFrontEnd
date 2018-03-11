import React, { Component } from 'react';
import { Button, Card, Header } from 'semantic-ui-react'

export default class SportaCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, handleCardPlacement } = this.props;
    // console.log("ITEMS IN SPORTA CARD", items);

    const cardList = items.map( (item) => { 
      const result = (<div className="col-md-3 sporta-card">
        <div className="col-md-7 padding-zero">
          <span className="card-label">{item.title}</span>
          
          <div className="ui two buttons">
            {item.type === "division" &&
              <Button basic color='green' onClick={ (e) => handleCardPlacement(e, [true, item.sid, item.type]) }>add</Button>
            }
            
            {(item.type === "team" || item.type === "athlete") && 
              <Button basic color='red' onClick={ (e) => handleCardPlacement(e, [false, item.sid, item.type]) }>remove</Button>
            }

          </div>
        </div>
        <div className="col-md-5">
          <div className="profile-circle"></div>
        </div>
      </div>);

      return(result)
    });

    return ( <div>{cardList}</div> );
  }
}
