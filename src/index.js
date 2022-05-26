import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/redux-store.js';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

render();

store.subscribe(() => {
  render()
});


