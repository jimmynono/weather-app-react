import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {

    const { userName } = this.props;

    return (
      <footer>
        <h1>Hi there {userName}</h1>
      </footer>
    )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

export default connect(mapStateToProps)(Footer);
