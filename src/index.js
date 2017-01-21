import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import './index.css';
require('../node_modules/framework7/dist/css/framework7.ios.css');
require('../node_modules/framework7/dist/css/framework7.ios.colors.css');
import  'framework7';

window.f7 = new Framework7();

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
