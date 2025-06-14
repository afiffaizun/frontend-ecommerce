import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Shop from './Shop'; 
//import reportWebVitals from './reportWebVitals';
import 'react-multi-carousel/lib/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>
);

reportWebVitals();