import React from 'react';
import ReactDOM from 'react-dom/client';

function tick() {
    const element = (<h1>{new Date().toLocaleTimeString()}</h1>);
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);