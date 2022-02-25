import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRedux from './containers/AppRedux';
import { store } from './redux/store/store';


ReactDOM.render(
  <Provider store={store}>
    <AppRedux/>
  </Provider>,
  document.getElementById('root')
);