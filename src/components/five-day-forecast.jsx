import React, { Component } from 'react';
import ForecastCard from './forecast-card';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class FiveDayForecast extends Component {
  render() {

    const { forecastData } = this.props;

    return (
      <div>
        <h1>Five Day Forecast</h1>
        <div className="five-day-forecast">
          {forecastData && forecastData.map((forecastDayInfo, index) => {
            return <ForecastCard {...forecastDayInfo} key={index} index={index} />
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

FiveDayForecast.propTypes = {
  forecastData: Proptypes.array
}


export default connect(mapStateToProps)(FiveDayForecast);
