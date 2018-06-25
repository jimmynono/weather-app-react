import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/weather-icons.css';
import { connect } from 'react-redux';
import iconJSON from '../helpers/icons';

class CurrentWeather extends Component {

  render() {
    const { showButton } = this.props;

    return(
      <div className="current-temp">
          <h1>Currently in...</h1>
          <h2>{this.props.cityName}</h2>
          <p className="current-temperature">{Math.round(this.props.currentTemp)}&deg;</p>
          <span className={`wi wi-day-${iconJSON[this.props.icon].icon}`}></span>
          <p>HIGH: {Math.round(this.props.highTemp)}&deg;</p>
          <p>LOW: {Math.round(this.props.lowTemp)}&deg;</p>
          {showButton && <Link to={`/details/${this.props.cityId}`}><button>Details...</button></Link>}
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
    cityId: state.weatherData.id
  }
}

export default connect(mapStateToProps)(CurrentWeather);
