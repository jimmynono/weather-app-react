import axios from 'axios';
import iconJSON from './icons.json';
import forecastBuilder from './utils';


const urlPrefix = 'http://api.openweathermap.org/data/2.5/';
const apiKey = '&APPID=5276ee07167d5c4e7737138a005c8e83';
const units = '&units=imperial';
const location = 'q=';

function getWeatherData(dispatch, query) {
  axios.get(urlPrefix + "weather?" + location + `${query}` + units + apiKey)
    .then((response) => {
      return response;
    })
    .then((data) => {
      dispatch({type: 'UPDATE_CITY_NAME', weatherData: data.data})
    })
}

function getWeatherForecast(dispatch, query) {
  axios.get(urlPrefix + "forecast?" + location + query + units + apiKey)
  .then((response) => {
    return response;
  })
  .then((data) => {
    dispatch({type: 'CITY_FORECAST', forecastData: forecastBuilder(data.data, iconJSON)});
  })

}

export default {
  getWeatherData,
  getWeatherForecast
};
