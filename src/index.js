import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/reset.css';
import 'normalize-css';
import './css/variables.css'; 
 
import { BrowserRouter } from 'react-router-dom';
 
 

ReactDOM.render(
 
   <BrowserRouter>
      <App />
   </BrowserRouter>,
 
 document.getElementById('root')
);

 