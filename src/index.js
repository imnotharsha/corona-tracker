import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

console.log('Store Initialized', store.getState());
store.subscribe(() => {
  console.log('store change', store.getState());
});

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
