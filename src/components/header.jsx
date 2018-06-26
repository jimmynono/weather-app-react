import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../store/constants';

class Header extends Component {
  render () {
    return (
      <header className="App-header">
        <div className="App-header-user-info">
          {this.props.userName && <h2>Welcome: {this.props.userName}</h2>}
          {!this.props.userName && <h2>Login Please</h2>}
          {this.props.showInput  && <form onSubmit={this.props.submit}>
            <label>
              Name:
              <input value={this.props.inputValue || ''} onChange={this.props.inputChanged} />
            </label>
          </form>}
          {!this.props.userName && <button onClick={this.props.onLoginClick}>LOGIN</button>}
          {this.props.userName && <button onClick={this.props.onLogoutClick}>LOGOUT</button>}
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
