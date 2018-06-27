import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Footer extends Component {
  render() {

    const { userName, hasCityLoaded } = this.props;

    const style = !hasCityLoaded? "fixed" : null;

    return (
      <footer className={style}>
        <h1>Hi there {userName}</h1>
      </footer>
    )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.userName,
    hasCityLoaded: state.weatherData.name
  }
}

Footer.propTypes = {
  userName: Proptypes.string
}

export default connect(mapStateToProps)(Footer);
