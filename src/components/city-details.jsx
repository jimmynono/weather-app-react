import React, { Component } from 'react';
import axios from 'axios';
import CurrentWeather from './current-weather';
import FiveDayForecast from './five-day-forecast';
import HourlyForecast from './hourly-forecast';
import iconJSON from '../helpers/icons.json';
import forecastBuilder from '../helpers/utils.js';

class CityDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      currentTemp: '',
      cityName: ''
    }
  }

  componentDidMount() {
    const urlPrefix = 'http://api.openweathermap.org/data/2.5/';
    const apiKey = '&APPID=5276ee07167d5c4e7737138a005c8e83';
    const units = '&units=imperial';
    const location = 'id=5809844';

    axios.get(urlPrefix + "weather?" + location + units + apiKey)
    .then(res => {
      this.setState({
        isLoaded: true,
        currentTemp: Math.round(res.data.main.temp),
        cityName: res.data.name,
        lowTemp: Math.round(res.data.main.temp_min),
        highTemp: Math.round(res.data.main.temp_max),
        weatherIcon: `wi wi-day-${iconJSON[res.data.weather[0].id].icon}`,
        cityId: res.data.id
      })
    })

    axios.get(urlPrefix + "forecast?" + location + units + apiKey)
    .then( res => {
      const forecastDays = forecastBuilder(res.data, iconJSON);
      this.setState({
        forecastDays: forecastDays,
        hourlyData: res.data.list
      })
    })
  }

  render() {
    const {
        currentTemp,
        cityName,
        weatherIcon,
        lowTemp,
        highTemp,
        forecastDays,
        cityId,
        hourlyData
      } = this.state;

    return (
      <div>
        <CurrentWeather currentTemp={currentTemp} cityName={cityName} icon={weatherIcon} lowTemp={lowTemp} highTemp={highTemp} cityId={cityId} />
        <FiveDayForecast forecastData={forecastDays} />
        <HourlyForecast hourlyData={hourlyData}/>
      </div>
    );
  }
}

export default CityDetails
