import React, { Component } from 'react';
import '../styles/weather-icons.css';

class CurrentWeather extends Component {

  render() {
    const { cityName, currentTemp, icon, lowTemp, highTemp } = this.props;

    return(
      <div className="current-temp">
          <h1>Currently in...</h1>
          <h2>{cityName}</h2>
          <p className="current-temperature">{currentTemp}&deg;</p>
          <span className={icon}></span>
          <p>HIGH: {highTemp}&deg;</p>
          <p>LOW: {lowTemp}&deg;</p>
      </div>
    )
  }
}

export default CurrentWeather;
