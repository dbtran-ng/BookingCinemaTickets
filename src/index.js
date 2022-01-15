import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//setup redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducer/rootReducer';
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
