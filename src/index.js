import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import './index.css';

window.f7 = new window.Framework7();

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
