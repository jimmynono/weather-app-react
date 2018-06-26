import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrentWeather from './current-weather';
import FiveDayForecast from './five-day-forecast';
import HourlyForecast from './hourly-forecast';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class CityDetails extends Component {
  render() {

    const { hourlyData, hasCityLoaded } = this.props;
    return (
      <div className="details-wrapper">
      {hasCityLoaded && <div>
          <CurrentWeather showButton={false} />
          <FiveDayForecast />
          <HourlyForecast hourlyData={hourlyData}/>
        </div>}
      {!hasCityLoaded && <Link to={'/'}><button>Go Home...</button></Link>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hourlyData: state.hourlyData,
    hasCityLoaded: state.weatherData.name
  }
}

CityDetails.propTypes = {
  hourlyData: Proptypes.array
}

export default connect(mapStateToProps)(CityDetails);
