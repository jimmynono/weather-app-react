import React, { Component } from 'react';
import moment from 'moment';
import iconJSON from '../helpers/icons.json';
import Proptypes from 'prop-types';

class HourlyCard extends Component {
  constructor(props) {
    super(props);

    this.formatTime = this.formatTime.bind(this);
  }

  formatTime(timeStamp) {
    const offset = moment().utcOffset();
    const time = moment.utc(timeStamp).utcOffset(offset).format("dddd h a")
    return time;
  }

  render() {
    const { dt_txt,
            main: {
              temp,
              humidity,
              pressure
            },
            wind: {
              speed,
              deg
            }
          } = this.props

    const iconClass = `wi wi-day-${iconJSON[this.props.weather[0].id].icon}`;

    return (
      <div className="hourly-card">
        <div className="hourly-card-time-icon">
          <h2>{this.formatTime(dt_txt)}</h2>
          <span className={iconClass}></span>
        </div>
        <div className="hourly-card-temp">
          <p>{Math.round(temp)}&deg;</p>
        </div>
        <div className="hourly-card-data">
          <p>Humidity: {humidity}%</p>
          <p>Barometric Pressure: {pressure} hPa</p>
          <p>Wind: {speed} mph {Math.round(deg)}&deg;</p>
        </div>
      </div>
    )
  }
}

HourlyCard.propTypes = {
  dt_txt: Proptypes.string,
  temp: Proptypes.string,
  humidity: Proptypes.string,
  pressure: Proptypes.string,
  speed: Proptypes.string,
  deg: Proptypes.string
}

export default HourlyCard;
