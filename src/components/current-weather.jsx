import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/weather-icons.css';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import utils from '../helpers/utils';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.moonPhaseIcon = this.moonPhaseIcon.bind(this);
  }

  moonPhaseIcon(phase) {
    switch (phase) {
      case "Full Moon":
        return "full";
      case "First Quarter":
        return "first-quarter";
      case "Last Quarter":
        return "third-quarter";
      case "New Moon":
        return "new";
      default:
        return "new"
    }
  }

  render() {
    const {
      showButton,
      cityName,
      currentTemp,
      icon,
      highTemp,
      lowTemp,
      cityId,
      currentTime,
      moonPhase
    } = this.props;

    return(
      <div className="current-temp">
        <h1>Currently in...</h1>
        <h2>{cityName}</h2>
        <p className="current-temperature">{Math.round(currentTemp)}&deg;</p>
        <span className={utils.iconFinder(currentTime, icon)}></span>
        <p>HIGH: {Math.round(highTemp)}&deg;</p>
        <p>LOW: {Math.round(lowTemp)}&deg;</p>
        <span className={`wi wi-moon-${this.moonPhaseIcon(moonPhase)} moon-phase`}>{moonPhase}</span>
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
    currentTime: state.weatherData.dt,
    moonPhase: state.moonData.closestphase.phase
  }
}

CurrentWeather.propTypes = {
  cityName: Proptypes.string,
  currentTemp: Proptypes.number,
  highTemp: Proptypes.number,
  lowTemp: Proptypes.number,
  icon: Proptypes.number,
  cityId: Proptypes.number,
  moonPhase: Proptypes.string
}

export default connect(mapStateToProps)(CurrentWeather);
