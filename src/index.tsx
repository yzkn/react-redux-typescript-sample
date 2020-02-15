import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/appContainer';
import './index.css';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
