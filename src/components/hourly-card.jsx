import React, { Component } from 'react';
import Proptypes from 'prop-types';
import utils from '../helpers/utils';

class HourlyCard extends Component {

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
            },
            weather: [
              id
            ]
          } = this.props

    return (
      <div className="hourly-card">
        <div className="hourly-card-time-icon">
          <h2>{utils.formatTimeCard(dt_txt)}</h2>
          <span className={utils.iconFinder(dt_txt, id.id)}></span>
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
  deg: Proptypes.string,
  id: Proptypes.object
}

export default HourlyCard;
