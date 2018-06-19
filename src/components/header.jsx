import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  render () {
    return (
      <header className="App-header">
        {this.props.user && <h2>Welcome: {this.props.user}</h2>}
        {!this.props.user && <button onClick={this.props.onLoginClick}>LOGIN</button>}
        {this.props.user && <button onClick={this.props.onLogoutClick}>LOGOUT</button>}
        <span className="wi wi-day-sunny App-logo" alt="logo" />
        <h1 className="App-title">Weather</h1>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoginClick: () => {
      const action = {
        type: 'LOGIN'
      }
      dispatch(action);
    },
    onLogoutClick: () => {
      const action = {
        type: 'LOGOUT'
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
