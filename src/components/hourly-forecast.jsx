import React, { Component } from 'react';
import HourlyCard from './hourly-card';
import Proptypes from 'prop-types';

class HourlyForecast extends Component {


  render() {
    const { hourlyData } = this.props;
    return(
      <div className="hourly-forecast">
        <h1>Hourly Forecast</h1>
        {hourlyData && hourlyData.map((hourlyWeatherData, index) => {
          return <HourlyCard key={index} {...hourlyWeatherData} index={index} />
        })}
      </div>
    )
  }
}

HourlyForecast.propTypes = {
  hourlyData: Proptypes.array
}

export default HourlyForecast;
