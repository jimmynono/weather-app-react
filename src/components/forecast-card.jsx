import React, { Component } from 'react';
import moment from 'moment';

class ForecastCard extends Component {
  constructor(props) {
    super(props)

    this.formatPrecip = this.formatPrecip.bind(this);
    this.formatDay = this.formatDay.bind(this);
  }

  formatPrecip(percent) {
    return Math.round(percent * 100);
  }

  formatDay(index) {
    if (index === 0) {
      return 'Tomorrow'
    } else {
      let day = moment().add(index + 1, 'days').format("dddd");
      return day;
    }
  }

  render() {
    const { lowTemp, highTemp, rainChance, icon, index } = this.props

    return (
      <div className="forecast-card">
        <h2>{this.formatDay(index)}</h2>
        <span className={icon}></span>
        <p>HIGH: {Math.round(highTemp)}&deg;</p>
        <p>LOW: {Math.round(lowTemp)}&deg;</p>
        <p>RAIN: {this.formatPrecip(rainChance)}%</p>
      </div>
    )
  }
}

export default ForecastCard;
