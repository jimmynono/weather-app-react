import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../store/constants';

class Header extends Component {
  render () {

    const {
      userName,
      showInput,
      inputValue,
      submit,
      inputChanged,
      onLoginClick,
      onLogoutClick
    } = this.props;

    return (
      <header className="App-header">
        <div className="App-header-user-info">
          {userName && <h2>Welcome: {userName}</h2>}
          {!userName && <h2>Login Please</h2>}
          {showInput  && <form onSubmit={submit}>
            <label>
              Name:
              <input value={inputValue || ''} onChange={inputChanged} />
            </label>
          </form>}
          {!userName && <button onClick={onLoginClick}>LOGIN</button>}
          {userName && <button onClick={onLogoutClick}>LOGOUT</button>}
        </div>
        <div className="App-header-logo">
          <span className="wi wi-day-sunny App-logo" alt="logo" />
          <h1 className="App-title">Weather</h1>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    inputValue: state.inputValue,
    userName: state.userName,
    showInput: state.showInput
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoginClick: () => {
      const action = {
        type: constants.LOGIN
      }
      dispatch(action);
    },
    onLogoutClick: () => {
      const action = {
        type: constants.LOGOUT
      }
      dispatch(action);
    },
    inputChanged: (evt) => {
      const action = {
        type: constants.INPUT_CHANGE,
        text: evt.target.value
      }
      dispatch(action)
    },
    submit: (evt) => {
      evt.preventDefault();
      const action = {
        type: constants.UPDATE_NAME
      }
      dispatch(action);
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
