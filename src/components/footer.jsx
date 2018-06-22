import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1>Hi there {this.props.userName}</h1>
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
