import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import Modal from 'react-modal';
// italic styles are intentionally not being imported, to match blaseball.com
import "@fontsource/lora/400.css";
import "@fontsource/lora/700.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
Modal.setAppElement(document.getElementById('root'));
