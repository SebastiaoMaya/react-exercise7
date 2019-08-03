import React, { Component } from 'react';
import AddUser from '../components/add-user/AddUser';
import ErrorMsg from '../components/error-msg/ErrorMsg';
import UsersList from '../components/users-list/UsersList';
import './App.css';
import logo from './logo.svg';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: {},
    error: ''
  };

  clearErrorMessage = () => {
    this.setState({ error: '' });
    clearInterval(this.interval);
    this.interval = undefined;
  };

  addUser = user => {
    const { userName } = user;

    if (!this.state.users[userName.toLowerCase()]) {
      this.setState(currentState => {
        currentState.users[userName.toLowerCase()] = user;

        return { users: currentState.users };
      });
    } else {
      if (!this.interval) {
        this.setState({ error: `${userName} already exists` });

        //error message disappears after 3 seconds
        this.interval = setInterval(this.clearErrorMessage, 3000);
      }
    }
  };

  render() {
    const { users, error } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ReactND - Coding Practice</h1>
        </header>
        <div className='users-div'>
          <ErrorMsg errorMsg={error} />
          <AddUser handleAddUser={this.addUser} />
          <UsersList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
