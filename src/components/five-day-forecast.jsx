import React, { Component } from 'react';
import ForecastCard from './forecast-card';

class FiveDayForecast extends Component {

  render() {
    const { forecastData } = this.props;

    return (
      <div>
        <h1>Five Day Forecast</h1>
        <div className="five-day-forecast">
          {forecastData && forecastData.map((forecastDayInfo, index) => {
            return <ForecastCard {...forecastDayInfo} index={index}/>
          })}
        </div>
      </div>
    )
  }
}

export default FiveDayForecast;
