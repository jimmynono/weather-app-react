import React, { Component } from 'react';
import HourlyCard from './hourly-card';

class HourlyForecast extends Component {


  render() {
    const { hourlyData } = this.props;
    return(
      <div>
        {hourlyData && hourlyData.map((hourlyWeatherData, index) => {
          return <HourlyCard key={index} {...hourlyWeatherData} index={index} />
        })}
      </div>
    )
  }
}

export default HourlyForecast;
