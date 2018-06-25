import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../store/constants';
import axios from 'axios';

class CityChooser extends Component {
  render() {
    return (
      <div>
        <h1>Enter your city</h1>
        <form onSubmit={(evt) => this.props.citySubmit(evt, this.props.cityInputValue)}>
          <input value={this.props.cityInputValue || ''} onChange={this.props.cityInputChanged} />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    chosenCity: state.chosenCity,
    cityInputValue: state.cityInputValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cityInputChanged: (evt) => {
      const action = {
        type: constants.CITY_INPUT_CHANGE,
        text: evt.target.value
      }
      dispatch(action)
    },
      citySubmit: (evt, query) => {
      evt.preventDefault();

      const urlPrefix = 'http://api.openweathermap.org/data/2.5/';
      const apiKey = '&APPID=5276ee07167d5c4e7737138a005c8e83';
      const units = '&units=imperial';
      const location = 'q=';

      axios.get(urlPrefix + "weather?" + location + `${query}` + units + apiKey)
        .then((response) => {
          return response;
        })
        .then((data) => {
          dispatch({type: 'UPDATE_CITY_NAME', weatherData: data.data})
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityChooser);
