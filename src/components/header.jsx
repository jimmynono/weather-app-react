import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      showInput: false,
      value: ''
    }

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.setState({
      showInput: true
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // redux codes
  }

  render () {
    return (
      <header className="App-header">
        <div className="App-header-user-info">
          {this.props.user && <h2>Welcome: {this.props.user}</h2>}
          {!this.props.user && <h2>Login Please</h2>}
          {this.state.showInput && <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>}
          {!this.props.user && <button onClick={this.handleLoginClick}>LOGIN</button>}
          {this.props.user && <button onClick={this.props.onLogoutClick}>LOGOUT</button>}
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
