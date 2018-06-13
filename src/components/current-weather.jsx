import React, { Component } from 'react';
import '../styles/weather-icons.css';

class CurrentWeather extends Component {

  render() {
    const { cityName, currentTemp, icon } = this.props;

    return(
      <div>
        <p className="App-intro">
          {cityName}<br />{Math.round(currentTemp)}&deg;
          <span className={icon}></span>
        </p>
      </div>
    )
  }
}

export default CurrentWeather;
