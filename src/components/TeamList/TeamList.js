import React, { Component } from 'react';
import { TeamCard } from 'components';

export default class TeamList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let container = []
    for (let i=0; i < 6; i++){
      container.push(<TeamCard />)
    }

    const league = "City League";

    return (
      <div className="team-list">
        <h2>Top Teams in {league}</h2>
        {container}
      </div>
    );
  }
}
