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
    const time = moment.utc(timeStamp).utcOffset(offset).format("dddd h a")
    return time;
  }

  render() {
    console.log(this.props);
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
      <div>
        <h2>{this.formatTime(dt_txt)}</h2>
        <p>Temp: {Math.round(temp)}&deg;</p>
        <span className={iconClass}></span>
        <p>Humidity: {humidity}%</p>
        <p>Barometric Pressure: {pressure} hPa</p>
        <p>Wind: {speed} mph {Math.round(deg)}&deg;</p>
      </div>
    )
  }
}

export default HourlyCard;
