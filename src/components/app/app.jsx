import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {ActionCreatorApp} from '@src/redux/app/app-action.js';

import '@src/styles/main.scss';

export const App = () => {
  const number = useSelector((state) => state.APP.number);
  const dispatch = useDispatch();

  return (
    <main className="main">
      <h1 className="title">Webpack React Template</h1>
      <p className="text">{number}</p>

      <button
        className="btn_increment"
        type="button" 
        onClick={() => dispatch(ActionCreatorApp.actionInc(number))}
      >
        Добавить
      </button>
      
      <button
        className="btn_decrement"
        type="button" 
        onClick={() => dispatch(ActionCreatorApp.actionDec(number))}
      >
        Отнять
      </button>

    </main>
  );
}