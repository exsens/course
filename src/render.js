import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = (store) => {
  root.render(
    <React.StrictMode>
      <Router>
        <App store={store} />
      </Router>
    </React.StrictMode>
  );

}

export default render;

