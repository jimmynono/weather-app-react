import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../store/constants';
import Api from '../helpers/api';

class CityChooser extends Component {

  render() {
    const { cityInputValue, citySubmit, cityInputChanged } = this.props;

    return (
      <div>
        <h1>Enter your city</h1>
        <form onSubmit={(evt) => citySubmit(evt, cityInputValue)}>
          <input value={cityInputValue || ''} onChange={cityInputChanged} />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
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
      Api.getWeatherData(dispatch, query);
      Api.getWeatherForecast(dispatch, query);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityChooser);
