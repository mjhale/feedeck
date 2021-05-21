import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initFeed } from './api/eventuallie';
import { addPlayer } from './redux/actions';
import { getName } from './api/chronicler';
import { listenSchedule, scheduleToFeed } from './api/blaseball';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
initFeed();
listenSchedule((s) => {
  const f = scheduleToFeed(s);
  store.dispatch({
    type: "player/feed",
    payload: f
  });
});

window.addPlayer = addPlayer;
window.store = store;
window.getName = getName;
