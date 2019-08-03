import React from 'react';

export default function User(props) {
  const { user, showGames } = props;

  const userMessage = showGames => {
    if (showGames) {
      return <li>{`${user.userName} played ${user.numberOfGames} games.`}</li>;
    } else {
      return <li>{`${user.userName} played * games.`}</li>;
    }
  };

  return userMessage(showGames);
}
