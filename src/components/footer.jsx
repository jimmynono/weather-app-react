import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1>Hi there {this.props.user}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Footer);
