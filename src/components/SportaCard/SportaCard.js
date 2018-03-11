import React, { Component } from 'react';
import { Button, Card, Header } from 'semantic-ui-react';

export default class SportaCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, handleCardPlacement } = this.props;
    // console.log("ITEMS IN SPORTA CARD", items);
    const type = items.type;

    const cardList = items.selection.map( (sel) => { 
      const result = (<div className="col-md-3 sporta-card">
        <div className="col-md-7 padding-zero">
          <span className="card-label">{sel.title}</span>
          
          <div className="ui two buttons">
            {type === "division" &&
              <Button basic color='green' onClick={ (e) => handleCardPlacement(e, {inserted: true, obj: sel}) }>add</Button>
            }
            
            {(type === "team" || type === "athlete") && 
              <Button basic color='red' onClick={ (e) => handleCardPlacement(e, {inserted: false, obj: sel}) }>remove</Button>
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
