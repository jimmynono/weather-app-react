import React, { Component } from 'react';
import CityChooser from './city-chooser';
import CurrentWeather from './current-weather';
import FiveDayForecast from './five-day-forecast';
// import forecastBuilder from '../helpers/utils.js';
import { connect } from 'react-redux';

class Home extends Component {
  render() {

    const { chosenCity } = this.props;

    return (
      <div>
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

export default connect(mapStateToProps)(Home);
