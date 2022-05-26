import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/redux-store.js';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = (state) => {

  root.render(
    <React.StrictMode>
      <Router>
        <App state={state} dispatch={store.dispatch}/>
      </Router>
    </React.StrictMode>
  );
}
render(store.getState())

store.subscribe(() => {
  let state = store.getState();
  render(state);
})
