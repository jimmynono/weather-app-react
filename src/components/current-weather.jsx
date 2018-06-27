import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/weather-icons.css';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import utils from '../helpers/utils';

class CurrentWeather extends Component {
  render() {
    const {
      showButton,
      cityName,
      currentTemp,
      icon,
      highTemp,
      lowTemp,
      cityId,
      currentTime
    } = this.props;

    return(
      <div className="current-temp">
          <h1>Currently in...</h1>
          <h2>{cityName}</h2>
          <p className="current-temperature">{Math.round(currentTemp)}&deg;</p>
          <span className={utils.iconFinder(currentTime, icon)}></span>
          <p>HIGH: {Math.round(highTemp)}&deg;</p>
          <p>LOW: {Math.round(lowTemp)}&deg;</p>
          {showButton && <Link to={`/details/${cityId}`}><button>Details...</button></Link>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cityName: state.weatherData.name,
    currentTemp: state.weatherData.main.temp,
    highTemp: state.weatherData.main.temp_max,
    lowTemp: state.weatherData.main.temp_min,
    icon: state.weatherData.weather[0].id,
    cityId: state.weatherData.id,
    currentTime: state.weatherData.dt
  }
}

CurrentWeather.propTypes = {
  cityName: Proptypes.string,
  currentTemp: Proptypes.number,
  highTemp: Proptypes.number,
  lowTemp: Proptypes.number,
  icon: Proptypes.number,
  cityId: Proptypes.number
}

export default connect(mapStateToProps)(CurrentWeather);
