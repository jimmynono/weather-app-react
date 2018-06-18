import React, { Component } from 'react';
import moment from 'moment';
import iconJSON from '../helpers/icons.json';

class HourlyCard extends Component {
  constructor(props) {
    super(props);

    this.formatTime = this.formatTime.bind(this);
  }

  formatTime(timeStamp) {
    const offset = moment().utcOffset();
    const time = moment.utc(timeStamp).utcOffset(offset).format("L LT")
    return time;
  }

  render() {
    const { dt_txt} = this.props

    const iconClass = `wi wi-day-${iconJSON[this.props.weather[0].id].icon}`;


    return (
      <div>
        <h2>{this.formatTime(dt_txt)}</h2>
        <p>Temp: {Math.round(this.props.main.temp)}&deg;</p>
        <span className={iconClass}></span>
        <p>Humidity: {this.props.main.humidity}%</p>
        <p>Barometric Pressure: {this.props.main.pressure} hPa</p>
      </div>
    )
  }
}

export default HourlyCard;
