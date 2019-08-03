import React, { Component } from 'react';

export default class AddUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  createDefaultUser = () => {
    const { firstName, lastName, userName } = this.state;

    return {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      numberOfGames: 0
    };
  };

  addUser = event => {
    const { handleAddUser } = this.props;
    event.preventDefault();

    handleAddUser(this.createDefaultUser());
  };

  isAnyInputEmpty = () => {
    const { firstName, lastName, userName } = this.state;
    return firstName === '' || lastName === '' || userName === '';
  };

  render() {
    const { firstName, lastName, userName } = this.state;

    return (
      <form onSubmit={this.addUser}>
        <label>
          First Name:
          <input
            type='text'
            name='firstName'
            id='firstNameInput'
            value={firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Second Name:
          <input
            type='text'
            name='lastName'
            id='lastNameInput'
            value={lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type='text'
            name='userName'
            id='userNameInput'
            value={userName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button disabled={this.isAnyInputEmpty()}>Add</button>
      </form>
    );
  }
}
