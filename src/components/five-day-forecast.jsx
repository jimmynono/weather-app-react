import React, { Component } from 'react';
import ForecastCard from './forecast-card';
import { connect } from 'react-redux';

class FiveDayForecast extends Component {
  render() {

    const { forecastData } = this.props;

    return (
      <div>
        <h1>Five Day Forecast</h1>
        <div className="five-day-forecast">
          {forecastData && forecastData.map((forecastDayInfo, index) => {
            return <ForecastCard {...forecastDayInfo} key={index} />
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    forecastData: state.forecastInfo
  }
}

export default connect(mapStateToProps)(FiveDayForecast);
