import React, { Component } from 'react';
import CityChooser from './city-chooser';
import CurrentWeather from './current-weather';
import FiveDayForecast from './five-day-forecast';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Home extends Component {
  render() {

    const { chosenCity } = this.props;

    return (
      <div className="home-wrapper">
        {!chosenCity && <CityChooser />}
        {chosenCity && <div>
          <CurrentWeather showButton={true} />
          <FiveDayForecast />
        </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chosenCity: state.weatherData.name
  }
}

Home.propTypes = {
  chosenCity: Proptypes.string
}

export default connect(mapStateToProps)(Home);
