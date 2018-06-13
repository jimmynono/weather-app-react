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

    this.forecastBuilder = this.forecastBuilder.bind(this);
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

    axios.get(urlPrefix + "forecast?" + location + units + apiKey)
    .then( res => {
      const forecastDays = this.forecastBuilder(res.data);
      console.log(forecastDays, "FD");
      this.setState({
        forecastDays: forecastDays
      })
    })
  }

  forecastBuilder(res) {
    console.log(res.list, "HERE");
    const days = [
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,

      },
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,

      },
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,

      },
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,

      },
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,

      }
    ];


    for (let i = 0; i < days.length; i++) {
      let temperatureLow = 9999;
      let temperatureHigh = -9999;
      let chancerain = 0;

      for (let j = 0; j < i + 8; j++) {

        if (res.list[j + i].rain !== undefined) {
          if (chancerain < res.list[j + i].rain['3h']) {
            chancerain = res.list[j + i].rain['3h']
          };
        }

        if (temperatureLow > res.list[j + i].main.temp) {
          temperatureLow = res.list[j + i].main.temp
        }

        if (temperatureHigh < res.list[j + i].main.temp) {
          temperatureHigh = res.list[j + i].main.temp
        }
      }

      days[i].lowTemp = temperatureLow;
      days[i].highTemp = temperatureHigh;
      days[i].rainChance = (chancerain / 8);
    }

    return days;
  }

  render() {
    const { currentTemp, cityName, weatherIcon, forecastDays } = this.state;

    return (
      <div>
        <CurrentWeather currentTemp={currentTemp} cityName={cityName} icon={weatherIcon}/>
      </div>
    );
  }
}

export default Home
