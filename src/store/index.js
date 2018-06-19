import { createStore } from 'redux';

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, { user: 'James'});
    case 'LOGOUT':
      return Object.assign({}, state, { user: null});
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
