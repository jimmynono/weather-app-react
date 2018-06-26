import React, { Component } from 'react';
import CurrentWeather from './current-weather';
import FiveDayForecast from './five-day-forecast';
import HourlyForecast from './hourly-forecast';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class CityDetails extends Component {
  render() {

    const { hourlyData } = this.props;

    return (
      <div>
        <CurrentWeather showButton={false} />
        <FiveDayForecast />
        <HourlyForecast hourlyData={hourlyData}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hourlyData: state.hourlyData
  }
}

CityDetails.propTypes = {
  hourlyData: Proptypes.array
}

export default connect(mapStateToProps)(CityDetails);
