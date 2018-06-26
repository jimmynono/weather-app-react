import { createStore } from 'redux';
import constants from './constants';

const initialState = {
  user: null,
  inputValue: '',
  userName: '',
  showInput: false,
  chosenCity: 'Boston',
  weatherData: {
    id: '',
    cityName: '',
    currentTemp: '',
    icon: '',
    main: {
      temp: '',
      temp_max: '',
      temp_min: '',
    },
    name: '',
    weather:[{"id": '800'}]
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return Object.assign({}, state, { showInput: true});
    case constants.LOGOUT:
      return Object.assign({}, state, { userName: null});
    case constants.INPUT_CHANGE:
      return Object.assign({}, state, { inputValue: action.text });
    case constants.UPDATE_NAME:
      return Object.assign({}, state, { userName: state.inputValue,
                                        inputValue: '',
                                        showInput: false
                                      });
    case constants.CITY_INPUT_CHANGE:
      return Object.assign({}, state, { cityInputValue: action.text });
    case constants.UPDATE_CITY_NAME:
      return Object.assign({}, state, { weatherData: action.weatherData });
    case constants.CITY_FORECAST:
      return Object.assign({}, state, { forecastInfo: action.forecastData,
                                        hourlyData: action.hourlyData });
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
