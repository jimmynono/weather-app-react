import { createStore } from 'redux';

const initialState = [{
  user: null,
  inputValue: '',
  userName: '',
  showInput: false
}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, { showInput: true});
    case 'LOGOUT':
      return Object.assign({}, state, { userName: null});
    case 'INPUT_CHANGE':
      return Object.assign({}, state, { inputValue: action.text });
    case 'UPDATE_NAME':
      return Object.assign({}, state, { userName: state.inputValue,
                                        inputValue: '',
                                        showInput: false
                                      })
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
