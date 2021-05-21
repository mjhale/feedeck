import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initFeed, listenFeed } from './api/eventuallie';
import { feedMe } from './redux/actions';
import { getName } from './api/chronicler';
import { listenSchedule, scheduleToFeed } from './api/blaseball';
import { initChron } from "./api/chronicler";

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
  feedMe(f);
});
initChron();

//listenFeed((f) => feedMe(f));
