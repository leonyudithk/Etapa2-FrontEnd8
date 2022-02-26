import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRouters from './routers/AppRouters';
import './styles/styles.css'

ReactDOM.render(
  <Provider store={store}>
    <AppRouters/>
  </Provider>,
  document.getElementById('root')
);


