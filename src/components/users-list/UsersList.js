import PropTypes from 'prop-types';
import React, { Component } from 'react';
import User from '../user/User';

export default class UsersList extends Component {
  state = {
    showNumberOfGames: true
  };

  static propTypes = {
    users: PropTypes.object.isRequired
  };

  getNumberOfGamesBtnName = () => {
    return this.state.showNumberOfGames
      ? 'Hide the Number of Games Played'
      : 'Show the Number of Games Played';
  };

  handleNumberOfGamesButton = () => {
    this.setState(currentState => ({
      showNumberOfGames: !currentState.showNumberOfGames
    }));
  };

  areUsersEmpty = () => {
    const { users } = this.props;

    return Object.keys(users).length === 0 && users.constructor === Object;
  };

  showListOfUsers = users => {
    return Object.keys(users).map(key => (
      <User
        key={users[key].userName}
        user={users[key]}
        showGames={this.state.showNumberOfGames}
      />
    ));
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <button
          className='smallButton'
          onClick={this.handleNumberOfGamesButton}
          disabled={this.areUsersEmpty()}
        >
          {this.getNumberOfGamesBtnName()}
        </button>
        <ol>{this.showListOfUsers(users)}</ol>
      </div>
    );
  }
}
