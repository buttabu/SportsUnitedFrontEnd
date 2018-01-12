import React, { Component } from 'react';
import { Link } from 'react-router';
// import {  } from 'components';

export default class LeagueTable extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    const mockTeams = [
      {
        name: 'CCNY Ballers',
        gamesPlayed: 1,
        wins: 1,
        ties: 0,
        losses: 0,
        goalsForAgainst: 5,
        goalsDifferential: 1.0,
        points: 30
      },
      {
        name: 'CCNY Ballers',
        gamesPlayed: 1,
        wins: 1,
        ties: 0,
        losses: 0,
        goalsForAgainst: 5,
        goalsDifferential: 1.0,
        points: 30
      }
    ];

    const renderTeamRow = (team) => {
      return (
        <tr>
          <td>{team.name}</td>
          <td>{team.gamesPlayed}</td>
          <td>{team.wins}</td>
          <td>{team.ties}</td>
          <td>{team.losses}</td>
          <td>{team.goalsForAgainst}</td>
          <td>{team.goalsDifferential}</td>
          <td>{team.points}</td>
        </tr>
      );
    };

    return (
      <div className="league-table table-responsive">
        <h2>League Rankings</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <colgroup>
              <col id="team-name-col"/>
              <col id="games-played-col"/>
              <col id="wins-col"/>
              <col id="ties-col"/>
              <col id="losses-col"/>
              <col id="goals-for-against-col"/>
              <col id="goal-differential-col"/>
              <col id="points-col"/>
            </colgroup>
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Games Played</th>
                <th>Wins</th>
                <th>Ties</th>
                <th>Losses</th>
                <th>+ / -</th>
                <th>Goal Differential</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {mockTeams.map((team) => renderTeamRow(team))}
            </tbody>
          </table>
        </div>
      </div>
      
    );
  }
}
