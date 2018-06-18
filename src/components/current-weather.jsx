import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/weather-icons.css';

class CurrentWeather extends Component {

  render() {
    const { cityName, currentTemp, icon, lowTemp, highTemp, cityId, showButton } = this.props;

    return(
      <div className="current-temp">
          <h1>Currently in...</h1>
          <h2>{cityName}</h2>
          <p className="current-temperature">{currentTemp}&deg;</p>
          <span className={icon}></span>
          <p>HIGH: {highTemp}&deg;</p>
          <p>LOW: {lowTemp}&deg;</p>
          {showButton && <Link to={`/details/${cityId}`}><button>Details...</button></Link>}
      </div>
    )
  }
}

export default CurrentWeather;
