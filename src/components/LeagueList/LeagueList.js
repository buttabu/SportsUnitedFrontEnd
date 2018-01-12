import React, { Component } from 'react';
import { LeagueCard } from 'components';

export default class LeagueList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let container = []
    for (let i=0; i < 6; i++){
      container.push(<LeagueCard />)
    }
    return (
      <div className="container league-list">
        <h2>Top Leagues in NYC</h2>
        {container}
      </div>
    );
  }
}
