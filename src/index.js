import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const users = [
    {id: '0', name: 'JO'},
    {id: '1', name: 'WEL'},
    {id: '2', name: 'aaaaaaaaaaaaa'},
  ]

  const messages = [
    { id: '0', text: ['Hi', 'Lorem, ipsum.'] },
    { id: '1', text: ['Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.'] },
    { id: '2', text: ['Hi', 'dolor ipsum .', 'Spasda', 'Lorem', 'ipsum dolor.'] },
  ]

root.render(
  
  <React.StrictMode>
    <Router>
      <App users={users} messages={messages} />
    </Router>
  </React.StrictMode>
);
