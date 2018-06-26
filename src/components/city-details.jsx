import React, { Component } from 'react';
import CurrentWeather from './current-weather';
import FiveDayForecast from './five-day-forecast';
import HourlyForecast from './hourly-forecast';
import { connect } from 'react-redux';

class CityDetails extends Component {
  render() {
    return (
      <div>
        <CurrentWeather showButton={false} />
        <FiveDayForecast />
        <HourlyForecast hourlyData={this.props.hourlyData}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hourlyData: state.hourlyData
  }
}

export default connect(mapStateToProps)(CityDetails);
