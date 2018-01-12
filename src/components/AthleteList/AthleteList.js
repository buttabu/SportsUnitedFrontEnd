import React, { Component } from 'react';
import { AthleteCard } from 'components';

export default class AthleteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let container = []
    for (let i=0; i < 6; i++){
      container.push(<AthleteCard />)
    }

    return (
      <div className="container athlete-list">
        <h2>Top Athletes in NYC</h2>
        {container}
      </div>
    );
  }
}
