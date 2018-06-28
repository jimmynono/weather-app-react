import iconJSON from './icons.json';
import util from './utils';

const urlPrefix = 'http://api.openweathermap.org/data/2.5/';
const apiKey = process.env.REACT_APP_SECRET_CODE;
const units = '&units=imperial';
const location = 'q=';

function getWeatherData(dispatch, query) {
  fetch(urlPrefix + "weather?" + location + `${query}` + units + "&APPID=" + apiKey)
    .then(response =>  response.json())
    .then((data) => {
      console.log(data);
      dispatch({type: 'UPDATE_CITY_NAME', weatherData: data})
    })
}

function getWeatherForecast(dispatch, query) {
  fetch(urlPrefix + "forecast?" + location + query + units + "&APPID=" + apiKey)
  .then(response => response.json())
  .then((data) => {
    dispatch({
      type: 'CITY_FORECAST',
      forecastData: util.forecastBuilder(data, iconJSON),
      hourlyData: data.list
    });
  })
}

function getMoonPhase() {
  fetch('http://api.usno.navy.mil/moon/phase?date=7/4/2018&nump=12')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
}

export default {
  getWeatherData,
  getWeatherForecast,
  getMoonPhase
};
