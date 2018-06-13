import React, { Component } from 'react';
import axios from 'axios';
import CurrentWeather from './current-weather';
import iconJSON from '../assets/icons.json';

class Home extends Component {
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
    const location = 'q=Seattle'

    axios.get(urlPrefix + "weather?" + location + units + apiKey)
    .then(res => {
      console.log(res, "CURRENT");

      this.setState({
        isLoaded: true,
        currentTemp: res.data.main.temp,
        cityName: res.data.name,
        weatherIcon: `wi wi-day-${iconJSON[res.data.weather[0].id].icon}`
      })
    })

    axios.get(urlPrefix + "forecast" + "/daily?" + location + units + apiKey)
    .then( res => {
      console.log(res, "FORECAST");
    })
  }

  render() {
    const { currentTemp, cityName, weatherIcon } = this.state;

    return (
      <div>
        <CurrentWeather currentTemp={currentTemp} cityName={cityName} icon={weatherIcon}/>
      </div>
    );
  }
}

export default Home
