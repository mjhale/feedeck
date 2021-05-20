import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initFeed } from './api/eventuallie';
import { addPlayer } from './redux/actions';
import { getName } from './api/chronicler';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
initFeed();

window.addPlayer = addPlayer;
window.store = store;
window.getName = getName;
