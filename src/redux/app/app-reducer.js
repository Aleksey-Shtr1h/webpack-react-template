import {ActionTypeApp} from './app-action.js';

export const initialState = {
  number: 0,
};

export const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypeApp.INCREMENT:
      return Object.assign({}, state, {
        number: action.payload,
      });
      
    case ActionTypeApp.DECREMENT:
      return Object.assign({}, state, {
        number: action.payload,
      });

  }

  return state;
};
