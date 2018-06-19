import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      user: 'James'
    }))
  }

  render () {
    return (
      <header className="App-header">
        {this.state.user && <h2>Welcome: {this.state.user}</h2>}
        {!this.state.user && <button onClick={this.handleClick}>LOGIN</button>}
        <span className="wi wi-day-sunny App-logo" alt="logo" />
        <h1 className="App-title">Weather</h1>
      </header>
    )
  }
}

export default Header;
